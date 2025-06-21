let trainJourney = d3.interpolate(0, 69);
console.log(trainJourney);
let midpoint = trainJourney(0.5);
console.log(midpoint);
let almostHome = trainJourney(0.99);
console.log(almostHome);
let home = trainJourney(1);
console.log(home);

// And, if we look back at the docs for d3.scaleLinear, the definition of that function is almost exactly: "Constructs a new linear scale with the specified domain and range, the default interpolator, and clamping disabled."

// I'm probably wrong and oversimplifying, but right now, it helps for me to think of scaling functions as interpolators with more bells and whistles. For example, since we now know that scaleLinear uses d3.interpolate under the hood (unless you tell it otherwise I guess), we can do something like this to get to get the same behaviour from a scale:

// Object {midPointFromScale: 34.5}
let stockholmUppsala = d3.scaleLinear().range([0, 68]);
let midPointFromScale = stockholmUppsala(0.5);
console.log(midPointFromScale);
//the midpoint ifrom above is 34.5 so this is 50
console.log(stockholmUppsala.invert(34.5));

const distanceToMinutes = d3.scaleLinear().domain([0, 69]).range([0, 38]);
console.log(distanceToMinutes(25));
console.log(distanceToMinutes(69));

let distance = { uppsala: 96, vasby: 25 };
let travelTime = { uppsala: 38, vasby: 27 };
let kmPerMinute = {
  uppsala: distance.uppsala / travelTime.uppsala,
  vasby: distance.vasby / travelTime.vasby,
};
console.log(kmPerMinute);
