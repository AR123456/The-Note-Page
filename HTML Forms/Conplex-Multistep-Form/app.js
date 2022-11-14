// https://www.youtube.com/watch?v=VdqtdKXxKhM&list=RDCMUCFbNIlppjAuEX4znoulh0Cw&index=2
// https://github.com/WebDevSimplified/js-multistep-form

// vars
// getting by data attribute  - The syntax is simple. Any attribute on any element whose attribute name starts with data- is a data attribute.
//https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
const multiStepForm = document.querySelector("[data-multi-step]");
// this needs to be an array
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = parseInt(
  formSteps.find((step) => {
    return step.classList.contains("active");
    // get the data step number and use parseInt go make it a number
  })?.dataset.step
);
console.log(currentStep);
