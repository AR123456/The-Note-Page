const template = document.createElement("template");

template.innerHTML = `
<style>
label {
    color: red; 
    display: block;
}
.description{
font-size: .65rem;
font-weight: lighter;
color: #777;
}
</style>
 
<label>
<input type ="checkbox" />
<slot></slot>
<span class="description">
    <slot name="description"></slot>
</span>
</label>
 
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.append(template.content.cloneNode(true));

    this.checkbox = shadow.querySelector("input");
  }
  // life cycle events
  static get observedAttributes() {
    // array of attributes want to check , these are things that will trigger attributeChangedCallback
    return ["checked"];
  }

  // attributeChangeCallback takes in name,oldValue,newValue
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") this.updateChecked(newValue);
  }
  // conncected callback- call whenever element added to dom
  connectedCallback() {
    console.log("connected"); // 3 becasue we have 3 elements
  }
  connectedCallback() {
    console.log("dis connected");
  }
  // function to update the checked value
  updateChecked(value) {
    // check the check box if the value is not null and not false
    this.checkbox.checked = value != null && value !== "false";
  }
}

customElements.define("todo-item", TodoItem);

// toggle value of checked every 1/2 second
const item = document.querySelector("todo-item");
// let checked = true;
// setInterval(() => {
//   checked = !checked;
//   item.setAttribute("checked", checked);
// }, 500);
item.remove();
