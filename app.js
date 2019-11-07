const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
clearBtn.addEventListener("click", runEvent);
// Doubleclick
clearBtn.addEventListener("dblclick", runEvent);
// Mousedown
clearBtn.addEventListener("mousedown", runEvent);
// Mouseup
clearBtn.addEventListener("mouseup", runEvent);
// Mouseenter -
card.addEventListener("mouseenter", runEvent);
// Mouseleave
card.addEventListener("mouseleave", runEvent);
// Mouseover
card.addEventListener("mouseover", runEvent);
// Mouseout
card.addEventListener("mouseout", runEvent);
// Mousemove
card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
// The mouseover event triggers when the mouse pointer enters the div element, and its child elements. The mouseenter event is only triggered when the mouse pointer enters the div element. The onmousemove event triggers every time the mouse pointer is moved over the div element.
//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseenter_mouseover
//This means that mouseleave is fired when the pointer has exited the element and all of its descendants, whereas mouseout is fired when the pointer leaves the element or leaves one of the element's descendants (even if the pointer is still within the element
//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseleave_mouseout
