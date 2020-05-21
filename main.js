const width = 800,
  height = 800;

const projection = d3
  // to use d3 need to define a projection
  // .geoConicEqualArea()
  // .geoMercator()
  // .geoStereographic()
  // .geoMiller()
  .geoOrthographic()

  // scale sets how zoomed in the vis is
  // .scale(153)
  .scale(300)
  // translate sets the center of the map
  .translate([width / 2, height / 2])
  .precision(0.1);
// the path generator takes the projection in an argument
const path = d3.geoPath().projection(projection);

const graticule = d3.geoGraticule();

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
// V5 syntax
d3.json("data/world-110m.json")
  .then((world) => {
    console.log(world); // map on first load
    // this object is of a type of Topology

    // value that is getting passed to the datum method
    // to append the land borders
    // and make into geoJson
    console.log(topojson.feature(world, world.objects.land));

    console.log(graticule);
    // apply a path to the SVG canvas
    svg
      .append("path")
      // the datum comes from path generator
      // geo path generator needs a geojson object
      // call being made to topojson to make this conversion
      // append lines for land boarders
      // applying topojson.feature() method to convert to a geoJson type
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);
    // append lines for country borders
    svg
      .append("path")
      .datum(
        // topojson.mesh() takes in a list of countries and spits out
        // a path of the boarders between them
        topojson.mesh(world, world.objects.countries, (a, b) => {
          // this filter function is to retun only one bouarder per country
          return a !== b;
        })
      )
      .attr("class", "boundary")
      .attr("d", path);
    // append lines for graticules
    // d3.geoGraticule can be passed right into datum to generate path
    svg
      .append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path);
  })
  .catch((error) => {
    console.log(error);
  });

d3.select(self.frameElement).style("height", height + "px");
