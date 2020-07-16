const svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height"),
  g = svg.append("g").attr("transform", "translate(40,0)");
// the size that we want the tree to take up
const tree = d3.tree().size([height, width - 160]);
// using d3 stratify to put the data into the correct layout
const stratify = d3
  .stratify()
  // parent Id returns the name of each items parent node
  .parentId((d) => {
    return d.id.substring(0, d.id.lastIndexOf("."));
  });
// d3.csv("data/tree.csv")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// reading the data in v5 way
d3.csv("data/tree.csv")
  .then((data) => {
    // console.log(data);
    // set up the root node by passing data into the stratify function
    const root = stratify(data)
      // sort acording to to the depth of each node into the tree
      .sort((a, b) => {
        return a.height - b.height || a.id.localeCompare(b.id);
      });
    // raw data when loaded
    console.log("data", data);
    // stratified version of the array
    console.log("root", root);
    //tree layout adds x and y for node to know where it belongs on screen
    console.log("tree root", tree(root));
    // array the gets returned after the links method is called
    // each item corresponds to a link that needs to be drawn
    // between 2 nodes in network
    console.log("tree root links", tree(root).links());
    // Add the links (given by calling tree(root), which also adds positional x/y coordinates) for the nodes
    const link = g
      .selectAll(".link")
      // pass value on to the tree layout function
      .data(tree(root).links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr(
        "d",
        d3
          // to attach custom link for each path we need to draw
          .linkHorizontal()
          // for eachh item in the tree(root).links() array
          // draws line from source node to target node
          .x((d) => {
            return d.y;
          })
          .y((d) => {
            return d.x;
          })
      );

    // Add groups for each node in the hierarchy with circles and text labels
    const node = g
      .selectAll(".node")
      // using descendanats method on tree layout to return
      //every node need to enter into tree layout
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("class", (d) => {
        return "node" + (d.children ? " node--internal" : " node--leaf");
      })
      // translation depending on x and y coordinates
      .attr("transform", (d) => {
        return "translate(" + d.y + "," + d.x + ")";
      });
    // attach a circle and text label to each
    node.append("circle").attr("r", 2.5);

    node
      .append("text")
      .attr("dy", 3)
      .attr("x", (d) => {
        return d.children ? -8 : 8;
      })
      .style("text-anchor", (d) => {
        return d.children ? "end" : "start";
      })
      .text((d) => {
        return d.id.substring(d.id.lastIndexOf(".") + 1);
      });
  })
  .catch(function (error) {
    console.log(error);
  });
