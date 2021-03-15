

//Event Handlers

document.addEventListener('DOMContentLoaded', (event) => {


  const button = document.querySelector('clicker');

let callBackFunction (event) => {
  console.log('Ruger is loved') ;
 // button.textContent ="click count: ${event.detail}" ;
}

button.addEventListener('LOVE', callBackFunction);




})
<button id="clicker"> <b>LOVE</b>
</button>
