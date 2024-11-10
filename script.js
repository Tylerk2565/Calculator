// Adds the given value to the input field
function display(value) {
  document.getElementById("result").value += value;
}

// Clears the display by assigning the value to "" (empty)
function clearScreen() {
  document.getElementById("result").value = "";
}

// Deletes the last character from the input field
function deleteLast() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

// When backspace is pressed, it calls the deleteLast function
document.addEventListener('keydown', function(event) {
  if (event.key === 'Backspace') {
    deleteLast();
  }
});

// Calculates by using the eval function, gives an error if input isn't proper
function calculate() {
  let result = document.getElementById("result").value;
  // Error handling, 'try' contains code that may have an error 'eval', if not, then the result will
  // be displayed, if there's an error then 'catch' will catch the error and display "Error"
  try {
    result = eval(result);
    document.getElementById("result").value = result;
  } catch(error) {
    document.getElementById("result").value = "Error";
  }
}