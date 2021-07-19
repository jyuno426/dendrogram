import { data } from "./data.js";

const width = document.body.clientWidth - 100;

const main = () => {
  const svg = d3.select("body").append("svg").attr("width", width);
  const root = tree(data);
  buildSVG(svg, root);

  const bBox = svg.node().getBBox();
  svg.attr("viewBox", `${bBox.x} ${bBox.y} ${bBox.width} ${bBox.height}`);
};

document.addEventListener("DOMContentLoaded", main);

const tree = (_data) => {
  const root = d3.hierarchy(_data);
  // .sort((a, b) => d3.descending(a.height, b.height));
  root.dx = 40;
  root.dy = width / (root.height + 1);
  return d3.cluster().nodeSize([root.dx, root.dy])(root);
};

const buildSVG = (svg, root) => {
  svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke", "#555")
    .attr("stroke-opacity", 0.4)
    .attr("stroke-width", 1.5)
    .selectAll("path")
    .data(root.links())
    .join("path")
    .attr(
      "d",
      (d) => `
        M${d.target.y},${d.target.x}
        C${d.source.y + root.dy / 2},${d.target.x}
         ${d.source.y + root.dy / 2},${d.source.x}
         ${d.source.y},${d.source.x}
      `
    );

  svg
    .append("g")
    .selectAll("circle")
    .data(root.descendants())
    .join("circle")
    .attr("cx", (d) => d.y)
    .attr("cy", (d) => d.x)
    .attr("fill", (d) => (d.children ? "#555" : "#009900"))
    .attr("r", 2.5);

  const name = (d) => d.data.name;
  // const value = (d) =>
  //   `${d.data.value
  //     .toString()
  //     .padStart(7, "_")
  //     .replace(/\B(?=([_\d]{3})+(?![_\d]))/g, ",")}원`;
  const value = (d) =>
    `${Math.floor(d.data.value / 10000)}만 ${d.data.value % 10000}원`;
  // const value = (d) => `${(d.data.value / 10000).toFixed(1)}만`;
  svg
    .append("g")
    .attr("font-family", "monospace")
    .attr("font-size", 12)
    .attr("stroke-linejoin", "round")
    .attr("stroke-width", 3)
    .selectAll("text")
    .data(root.descendants())
    .enter()
    .append("svg:text")
    .attr("x", (d) => d.y)
    .attr("y", (d) => d.x)
    .attr("text-anchor", "start")
    .append("svg:tspan")
    .attr("x", (d) => d.y + 10)
    .attr("dy", "0.31em")
    .attr("style", "stroke:white; stroke-width:0.6em")
    .text(name)
    .clone()
    .attr("dy", "0")
    .attr("style", "fill:black")
    .text(name)
    .clone()
    .attr("dy", "1.2em")
    .attr("style", "stroke:white; stroke-width:0.6em")
    .text(value)
    .clone()
    .attr("dy", "0")
    .attr("style", "fill:green")
    .text(value);
};
