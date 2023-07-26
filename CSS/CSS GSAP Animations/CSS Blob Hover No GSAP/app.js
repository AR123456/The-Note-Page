class Circle {
  constructor(cx, cy, r, fill) {
    this.cx = cx;
    this.cy = cy;
    this.r = r;
    this.fill = fill;
    this.element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.setElement();
  }

  getElement() {
    return this.element;
  }

  setElement() {
    this.element.setAttribute("cx", this.cx);
    this.element.setAttribute("cy", this.cy);
    this.element.setAttribute("r", this.r);
    this.element.setAttribute("fill", this.fill);
  }

  // Add any additional methods or properties needed for your animation
}

class Animation {
  constructor(selector) {
    this.svg = document.querySelector(selector);
    this.cols = 16;
    this.rows = 9;
    this.circleSize = 30;
    this.scaleMin = 0.15; // Minimum scale for circles
    this.scaleMax = 2.5; // Maximum scale for circles
    this.range = 175; // Range for scaling circles
    this.spacingHorizontal = 60;
    this.spacingVertical = 80;
    this.fill = getComputedStyle(document.documentElement).getPropertyValue(
      "--circles"
    );
    this.circles = [];
    this.screen = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    this.mouseStored = Object.assign({}, this.mouse);
    this.svgWidth = 0;
    this.svgHeight = 0;

    this.addEventListeners();
    this.createCircles();
    this.setCircleScale({ clientX: this.mouse.x, clientY: this.mouse.y });
  }

  updateSvgDimensions() {
    this.svgWidth =
      this.cols * this.circleSize + (this.cols - 1) * this.spacingHorizontal;
    this.svgHeight =
      this.rows * this.circleSize + (this.rows - 1) * this.spacingVertical;
    this.svg.setAttribute("viewBox", `0 0 ${this.svgWidth} ${this.svgHeight}`);
  }

  createCircles() {
    this.updateSvgDimensions();
    for (let i = 0; i < this.rows; i++) {
      const offset = i % 2;
      for (let j = 0; j < this.cols + 2 * offset; j++) {
        const cx =
          j * (this.circleSize + this.spacingHorizontal) +
          this.spacingHorizontal / 2;
        const cy =
          i * (this.circleSize + this.spacingVertical) +
          this.spacingVertical / 2;
        const circle = new Circle(cx, cy, this.circleSize, this.fill);
        this.svg.appendChild(circle.getElement());
        this.circles.push(circle);
      }
    }
  }

  addEventListeners() {
    document.addEventListener("mousemove", (event) =>
      this.setCircleScale(event)
    );
    window.addEventListener("resize", () => {
      this.screen.width = window.innerWidth;
      this.screen.height = window.innerHeight;
      this.updateSvgDimensions();
    });
  }

  setCircleScale(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.circles.forEach((circle) => {
      const boundingRect = circle.getElement().getBoundingClientRect();
      const centerX = boundingRect.x + boundingRect.width / 2;
      const centerY = boundingRect.y + boundingRect.height / 2;

      const distance = Math.sqrt(
        Math.pow(centerX - mouseX, 2) + Math.pow(centerY - mouseY, 2)
      );

      const scale = this.range / (distance + this.circleSize);
      const clampedScale = this.clamp(scale, this.scaleMin, this.scaleMax);

      circle.getElement().style.transition = "transform 0.2s ease";
      circle.getElement().style.transform = `scale(${clampedScale})`;
    });
  }

  clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }
}

// Instantiate the Animation class with the selector of the SVG element
const animation = new Animation("#animation");
