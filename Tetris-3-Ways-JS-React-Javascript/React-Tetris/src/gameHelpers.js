// 1) set stage width and height const exports
// 2) function to create stage which is a multidementional array which represents rows and columns
export const STAGE_WIDTH = 12;
export const STAGE_HEIGTH = 20;

// import this to Tetris js component
export const createStage = () =>
  Array.from(Array(STAGE_HEIGTH), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
