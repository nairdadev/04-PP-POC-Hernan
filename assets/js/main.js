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
   
  

//*******************CARDS****************************/


  var $cell = $('.card');

  //open and close card when clicked on card
  $cell.find('.js-expander').click(function() {
  
    var $thisCell = $(this).closest('.card');
  
    if ($thisCell.hasClass('is-collapsed')) {
      $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
      $thisCell.removeClass('is-collapsed').addClass('is-expanded');
      
      if ($cell.not($thisCell).hasClass('is-inactive')) {
        //do nothing
      } else {
        $cell.not($thisCell).addClass('is-inactive');
      }
  
    } else {
      $thisCell.removeClass('is-expanded').addClass('is-collapsed');
      $cell.not($thisCell).removeClass('is-inactive');
    }
  });
  
  //close card when click on cross
  $cell.find('.js-collapser').click(function() {
  
    var $thisCell = $(this).closest('.card');
  
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  
  });