// demo or it did not happen

var demo1 = document.querySelector('#demo-1')
var demo2 = document.querySelector('#demo-2')

setTimeout(() => { demo1.checked = true }, 500)
setTimeout(() => { demo1.checked = false}, 1500)
setTimeout(() => { demo2.checked = true }, 2000)
setTimeout(() => { demo2.checked = false}, 3000)




//*******************TITLE****************************/
let app = document.getElementById("title");
var typewriter = new Typewriter(title, {
  loop: false,
});
typewriter
  .typeString("Soy Hernán Carracedo.")
  .start()

//*******************DESCRIPTION****************************/
  let app2 = document.getElementById("description");

  var typewriter = new Typewriter(description, {
  loop: false,
  });

  typewriter
  .pauseFor(3600)
  .typeString('Tengo una')
  .pauseFor(300)
  .deleteChars(3)
  .typeString('dos')
  .pauseFor(300)
  .deleteChars(3)
  .typeString('varias pasiones')
  .pauseFor(300)
  .deleteChars(21)
  .typeString('Programo, escalo, escribo, hablo.')
  .start();
   
  