let first_number = document.getElementById('number1');
let second_number = document.getElementById('number2');
let third_number = document.getElementById('number3');
let fourth_number = document.getElementById('number4');
let fifth_number = document.getElementById('number5');
let sixth_number = document.getElementById('number6');
let seventh_number = document.getElementById('number7');
let eight_number = document.getElementById('number8');
let result = document.getElementById('display');

submit = document.getElementById('submit');

submit.addEventListener("click", ()=>{
  let first = parseFloat(first_number.value);
  let second = parseFloat(second_number.value);
  
  result.textContent = ` The result is: ${first + second}`;
})

submit2.addEventListener("click", ()=>{
  let third = parseFloat(third_number.value);
  let fourth = parseFloat(fourth_number.value)
  
  result.textContent = ` The result is: ${third - fourth}`;
})

submit3.addEventListener("click", ()=>{
  let fifth = parseFloat(fifth_number.value);
  let sixth = parseFloat(sixth_number.value);
  
  result.textContent = ` The result is: ${fifth * sixth}`;
})

submit4.addEventListener("click", ()=>{
  let seventh = parseFloat(seventh_number.value);
  let eight = parseFloat(eight_number.value);
  
  result.textContent = ` The result is: ${seventh / eight}`;
})