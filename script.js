const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function palindrome() {
  let str = textInput.value; 
  let regex = /[^a-z0-9]/gi;
  let splitStr = str.split('').reverse().join('');
  let otherStr = str.toLowerCase().replace(regex, '');
  let theStr = otherStr.split('').reverse().join('');

  return theStr === otherStr || splitStr === str ? 
  result.textContent = `${textInput.value} is a palindrome` 
  : result.textContent = `${textInput.value} is not a palindrome` ;
};




function click() {
  if (!textInput.value) {
    alert("Please input a value");
  } else {
    palindrome();
    textInput.value = "";
  } 
};

button.addEventListener("click", click);










