import stringmath from 'string-math';


// evaluate the expression
function eveluate(){
  if(!document.querySelector('#expression').value) return;
  document.querySelector('#expression').value = stringmath(document.querySelector('#expression').value);
}

window.onload = function(){

  // listen for enter keypress
  document.querySelector('#expression').addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
      eveluate();
    }
  })

  // adding event listeners to all buttons in the page
  document.querySelectorAll('button').forEach(function(element){
    element.addEventListener('click', function(event){

      // clear the input field
      if(event.target.innerHTML === 'CE'){
        document.querySelector('#expression').value = '';
        return
      }

      // evaluate the expression on pressing '='
      if(event.target.innerHTML === '='){
        eveluate();
        return
      }

      document.querySelector('#expression').value = document.querySelector('#expression').value.toString()+event.target.innerHTML;
    })
  })
}