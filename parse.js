var fs = require('fs')
var glob = require('glob')
var d3 = require('d3')

var data = []

glob.sync(__dirname + '/logs/*').forEach(function(path){
  var file = fs.readFileSync(path, 'utf-8')
  
  var lines = file.split('\n')
    .filter(d => d)   // remove trailing lines
    .map(function(d){
      var obj = JSON.parse(d.split('=')[1])

      obj.date = d3.isoParse(obj.modificationDate)
      obj.pos = obj.position.pos
      obj.isbn = obj.contentReference.asin

      obj.key = d.split('=')[0].trim()
      return obj
    })

  data = data.concat(lines)
})

fs.writeFileSync(__dirname + '/public/data.json', JSON.stringify(data))