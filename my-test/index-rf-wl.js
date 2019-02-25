const data = require('./train2.json')
const dt = require('./decision-tree.js')
const test = require('./test2.json')
const sr = require('./serialize.js')

// Configuration
var config = {
    trainingSet: data,
    categoryAttr: 'win',
    ignoredAttributes: ['label','f1']
};

// // Building Decision Tree
// var decisionTree = new dt.DecisionTree(config);
//
// let count = 0, cc = 0, wc = 0
// test.forEach(t => {
//   let isCorrect = false
//   let r = decisionTree.predict(t)
//   count++
//   if (r == t.win) { cc++; isCorrect = true }
//   else wc++
//   console.log(`count: ${count}, t: ${r}, o: ${t.win}, ac: ${(cc*100/count).toFixed(1)} ic: ${(isCorrect)?"Correct":"Wrong"}`)
// })



// Building Random Forest
var numberOfTrees = 3;
var randomForest = new dt.RandomForest(config, numberOfTrees);

let count = 0, cc = 0, wc = 0
test.forEach(t => {
  let isCorrect = false
  let r = randomForest.predict(t)
  r.W = r.W || 0
  r.L = r.L || 0
  // console.log(r)
  if (r.W > r.L) r = 'W'
  else r = 'L'
  count++
  if (r == t.win) { cc++; isCorrect = true }
  else wc++
  console.log(`count: ${count}, t: ${r}, o: ${t.win}, ac: ${(cc*100/count).toFixed(1)} ic: ${(isCorrect)?"Correct":"Wrong"}`)
})
