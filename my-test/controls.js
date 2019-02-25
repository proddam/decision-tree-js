function init() {
    var displayTreeDiv = document.getElementById('displayTree');

    // Configuration
    var config = {
        trainingSet: data,
        categoryAttr: 'label',
        ignoredAttributes: []
    };

    // Building Decision Tree
    var tree = new dt.DecisionTree(config);

    displayTreeDiv.innerHTML = treeToHtml(tree.root);

    // Repeating of string taken from: http://stackoverflow.com/a/202627/653511
    var EMPTY_STRING = new Array(26).join('&nbsp;');

    // Recursively traversing decision tree (DFS)
    function treeToHtml(tree) {

        if (tree.category) {
            return  ['<ul>',
                        '<li>',
                            '<a href="#" style="background-color:', tree.category, '">', EMPTY_STRING, '</a>',
                        '</li>',
                     '</ul>'].join('');
        }

        return  ['<ul>',
                    '<li>',
                        '<a href="#"><b>', tree.attribute, ' ', tree.predicateName, ' ', tree.pivot, ' ?</b></a>',
                        '<ul>',
                            '<li>',
                                '<a href="#">yes (', tree.matchedCount, ' points) </a>',
                                treeToHtml(tree.match),
                            '</li>',
                            '<li>',
                                '<a href="#">no (', tree.notMatchedCount, ' points) </a>',
                                treeToHtml(tree.notMatch),
                            '</li>',
                        '</ul>',
                    '</li>',
                 '</ul>'].join('');
    }
}
