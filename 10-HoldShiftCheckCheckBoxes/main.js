const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if shift key down
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every check box
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween');
      }

      if(inBetween){
          checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
