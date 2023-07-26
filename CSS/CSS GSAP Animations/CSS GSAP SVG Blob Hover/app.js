class Animation {
  cols = 16;
  rows = 9;
  circleSize = 30;
  scaleMin = 0.15;
  scaleMax = 2.5;
  range = 175;

  spacingHorizontal = 60;
  spacingVertical = 80;
  // getting the color var defined in css
  fill = getComputedStyle(document.documentElement).getPropertyValue(
    "--circles"
  );
  svgMargin = 40;
  svgHeight = 0;
  svgWidth = 0;
  circles = [];
  screen = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  mouseStored = Object.assign({}, this.mouse);
  constructor(selector) {}
  addEventListeners() {}
  draw() {
    for (var i = 0; i < this.rows; i++) {
      const offset = i % 2;
      for (var j = 0; j < this.cols + 2 * offset; j++) {
        // We're drawing the initial lines horizontally
        let c = new Circle(
          this.svgMargin +
            j * this.circleSize +
            j * this.spacingHorizontal -
            (offset * (this.spacingHorizontal + this.circleSize)) / 2,
          this.svgMargin + i * this.spacingVertical,
          this.circleSize,
          this.fill
        );

        // Set a transform origin and add the HTML element to the SVG
        const cElement = c.getElement();
        gsap.set(cElement, { transformOrigin: "50% 50%" });
        this.g.appendChild(cElement);

        this.circles.push(c);
      }
    }

    this.setCircleCenters();
  }
  clamp(num, min, max) {}
  setMouseCoords(event) {}
  setCircleCenters() {}
  animate() {}
  setCircleScale() {}
}

class Circle {
  constructor(cx, cy, r, fill) {}
  getElement() {}
  setElement() {}
}

const animation = new Animation("#animation");
