console.clear()
var ƒ = d3.f

var isbnToName = {
  B00H7WPC4S: 'History of Portugal', 
  B005WBGNZS: 'Straight Man'
}

d3.json('data.json', function(err, res){
  data = res
  data.forEach(function(d){
    d.date = d3.isoParse(d.modificationDate)
    d.pos = d.position.pos
    d.isbn = d.contentReference.asin
  })
  data = data.filter(d => d.date < new Date(2017, 2, 0))

  byBook = d3.nestBy(data, ƒ('isbn'))
  byBook.forEach(d => {
    d.last = _.last(d)
    d.title = isbnToName[d.key] || ''
    d.titleSpans = d3.wordwrap(d.title, 15)
  })

  var sel = d3.select('#kindle-slope').html('')
  var c = d3.conventions({parentSel: sel, width: 750, height: 150, margin: {left: 80*1}})

  c.x = d3.scaleTime()
    .domain(d3.extent(data, ƒ('date')))
    .range(c.x.range())

  c.y.domain([0, d3.max(data, ƒ('pos'))])

  c.yAxis.ticks(5)
  c.xAxis.scale(c.x).tickFormat(d3.timeFormat("%m/%d")).ticks(5)
  c.drawAxis()

   line = d3.line()
    .x(ƒ('date', c.x))
    .y(ƒ('pos', c.y))
    .curve(d3.curveStep)

  c.svg.appendMany(byBook, 'path')
    .at({
      d: line,
      fill: 'none', 
      stroke: '#000',
    })

  var lastSel = c.svg.appendMany(byBook, 'g')
    .filter(d => d.last.pos > 1000)
    .translate(d => [c.x(d.last.date), c.y(d.last.pos)])

  lastSel.append('circle')
    .at({r: 3, stroke: '#000', fill: '#fff', cy: -4})

  lastSel.append('text')
    .at({textAnchor: 'middle', y: d => d.titleSpans.length*-13})
    .tspans(ƒ('titleSpans'))
})



d3.csv('lookups.csv', function(err, res){
  words = res

  words.forEach(function(d){
    d.word = d.word_key.split(':')[1]
    d.date = new Date(+d.timestamp)
    d.hour = d.time.getHours()
  })


  var sel = d3.select('#kindle-slope').html('')
  var c = d3.conventions({parentSel: sel, width: 750, height: 150, margin: {left: 80*1}})

  c.x = d3.scaleTime()
    .domain(d3.extent(words, ƒ('date')))
    .range(c.x.range())

  c.y.domain([0, 23])
  


})


