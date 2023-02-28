const template = document.createElement("template");
// styles from outside do not leak into shadow dom
template.innerHTML = `
<style>
h3 {color:green}
</style>
<h3>
<slot></slot>
</h3>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    // use shadow dom to set style , can see it in dev tools
    // show shadow dom in dev tools will see slot element under the select element
    // using mode of open allows for modification using this.shadowRoot
    const shadow = this.attachShadow({ mode: "open" });
    // apennd the template to the shadow
    shadow.append(template.content.cloneNode(true));

    // here this.shadowRoot is equal to shadow above
    // this.shadowRoot;
  }
}
// register with DOM using normal html elements and must contain a hypen so browser knows that it is custom , second arg is the class.  Now add to the DOM
customElements.define("todo-item", TodoItem);
