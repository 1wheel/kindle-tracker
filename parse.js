var fs = require('fs')

var file = fs.readFileSync(__dirname + '/logs/annotation_1487899704391', 'utf-8')



var lines = file.split('\n')
  .map(function(d){
    var str = d.split('=')[1]
    if (str) return JSON.parse(str)
  })
  .filter(d => d)
  // .map(d => d.annotationData)

console.log(lines[0])


lines.forEach(function(d){
  d.startPos = d.annotationData.readingStartPosition
  d.endPos = d.position.pos
  d.midPos = d.position.begin
  // console.log(d.startPos, d.endPos, d.midPos, d.endPos - d.midPos)
  console.log(d.annotationData.readingStartTime)
  // console.log(d.modificationDate)
})