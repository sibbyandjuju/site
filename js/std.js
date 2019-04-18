// BLOTTER
var text = new Blotter.Text("3.21", {
  family: "thicc",
  size: 240,
  fill: "blue"
});

var material = new Blotter.RollingDistortMaterial();

// Play with the value for uSpeed. Lower values slow
// down animation, while higher values speed it up. At
// a speed of 0.0, animation is stopped entirely.
material.uniforms.uSpeed.value = 0.25;

var blotter = new Blotter(material, {
  texts: text
});

var elem = document.getElementById("distortion-text");
var scope = blotter.forText(text);

scope.appendTo(elem);
var placeholder = document.getElementById("distortion-text-placeholder");
placeholder.style.opacity = 0;