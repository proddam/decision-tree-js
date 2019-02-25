const data = require('./train1.json')
const dt = require('./decision-tree.js')
const test = require('./test1.json')

// Configuration
var config = {
    trainingSet: data,
    categoryAttr: 'label',
    ignoredAttributes: []
};

// Building Decision Tree
var decisionTree = new dt.DecisionTree(config);

console.log(decisionTree)


// let count = 0, cc = 0, wc = 0
// test.forEach(t => {
//   let isCorrect = false
//   let r = decisionTree.predict(t)
//   count++
//   if (r == t.label) { cc++; isCorrect = true }
//   else wc++
//   console.log(`count: ${count}, t: ${r}, o: ${t.label}, ac: ${(cc*100/count).toFixed(1)} ic: ${(isCorrect)?"Correct":"Wrong"}`)
// })



// Building Random Forest
// var numberOfTrees = 3;
// var randomForest = new dt.RandomForest(config, numberOfTrees);
//
// let count = 0, cc = 0, wc = 0
// test.forEach(t => {
//   let isCorrect = false
//   let r = randomForest.predict(t)
//   r.U = r.U || 0
//   r.D = r.D || 0
//   // console.log(r)
//   if (r.U > r.D) r = 'U'
//   else r = 'D'
//   count++
//   if (r == t.label) { cc++; isCorrect = true }
//   else wc++
//   console.log(`count: ${count}, t: ${r}, o: ${t.label}, ac: ${(cc*100/count).toFixed(1)} ic: ${(isCorrect)?"Correct":"Wrong"}`)
// })
