//*******************TITLE****************************/
let app = document.getElementById("title");
var typewriter = new Typewriter(title, {
  loop: false,
});
typewriter
  .typeString("Hola soy Hernán Carracedo")
  .start()

//*******************DESCRIPTION****************************/
  let app2 = document.getElementById("description");

  var typewriter = new Typewriter(description, {
  loop: false,
  });

  typewriter
  .pauseFor(3600)
  .typeString('tengo una')
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
   
  
