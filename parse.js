var fs = require('fs')
var glob = require('glob')
var d3 = require('d3')


var data = []

glob.sync(__dirname + '/logs/*').forEach(function(path){
  var file = fs.readFileSync(path, 'utf-8')
  
  var lines = file.split('\n')
    .map(function(d){
      var str = d.split('=')[1]
      if (!str) return null
      
      var obj = JSON.parse(str)
      obj.key = d.split('=')[0].trim()
      return obj
    })
    .filter(d => d)
    // .map(d => d.annotationData)

  data = data.concat(lines)
})

fs.writeFileSync(__dirname + '/public/data.json', JSON.stringify(data))

data.forEach(function(d, i){
  d.startPos = d.annotationData.readingStartPosition
  d.endPos = d.position.pos
  d.midPos = d.position.begin
  // console.log(d.startPos, d.endPos, d.midPos, d.endPos - d.midPos)
  // console.log(d.annotationData.readingStartTime)
  // console.log(d.modificationDate)
  if (i){
    // console.log(data[i - 1].endPos - d.endPos)
  }
})