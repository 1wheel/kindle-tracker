var ƒ = d3.f

d3.json('data.json', function(err, res){
  data = res
  data.forEach(function(d){
    d.date = d3.isoParse(d.modificationDate)
    d.pos = d.position.pos
    d.asin = d.contentReference.asin
  })
  console.log(data[0])

  byBook = d3.nestBy(data, ƒ('asin'))

  var sel = d3.select('body').html('')
  var c = d3.conventions({parentSel: sel, margin: {left: 100}})

  c.x = d3.scaleTime()
    .domain(d3.extent(data, ƒ('date')))
    .range(c.x.range())
  c.y.domain([0, d3.max(data, ƒ('pos'))])

  c.xAxis.scale(c.x).tickFormat(d3.timeFormat("%m/%d"))
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



})