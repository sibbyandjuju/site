let setUpForm = () => {
  const scriptURL = "https://script.google.com/macros/s/AKfycbxHnE5_f8mMpXqo64c_IhbV9eKL1_Xbj42Rw84ZTJnUedbDyzoK/exec";
  const form = document.forms['submit-address'];

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);

    // Set form to "Submitting..." state
    const inputs = form.elements;
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }
    const oldSubmitText = inputs.submit.innerText;
    inputs.submit.innerText = "Submitting..."

    // Send data
    fetch(scriptURL, {
      method:'POST',
      body: data
    })
      .then(response => {
        console.log('Success!', response);
        const formSection = document.getElementById("form");
        formSection.classList.add("success");
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert("Error submitting information. Refresh and try again or contact Sabrina or Julius.\n" + error.message);

        // Reset form
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].disabled = false;
        }   
        inputs.submit.innerText = oldSubmitText;
      });
  })
}

let distortText = () => {
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
}

setUpForm();
distortText();