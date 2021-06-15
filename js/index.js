// const stringmath = require('string-math');
import stringmath from 'string-math';
window.onload = function(){
  
  // adding event listeners to all buttons in the page
  document.querySelectorAll('button').forEach(function(element){
    element.addEventListener('click', function(event){
      console.log(stringmath('2+2'));
    })
  })
}