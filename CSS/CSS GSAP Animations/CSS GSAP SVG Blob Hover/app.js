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

  constructor(selector) {}
  addEventListeners() {}
  draw() {}
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
