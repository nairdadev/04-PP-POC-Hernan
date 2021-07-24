
    function loadApp() {

        var flipbook = $('.flipbook');
  
        // Check if the CSS was already loaded
  
        if (flipbook.width() == 0 || flipbook.height() == 0) {
          setTimeout(loadApp, 10);
          return;
        }
  
        $('.flipbook .double').scissor();
  
        // Create the flipbook
  
        $('.flipbook').turn({
          // Elevation
  
          elevation: 50,
  
          // Enable gradients
  
          gradients: true,
  
          // Auto center this flipbook
  
          autoCenter: true
  
        });
      }
  
      // Load the HTML4 version if there's not CSS transform
  
      yepnope({
        test: Modernizr.csstransforms,
        yep: ['./assets/js/turn.min.js'],
        nope: ['./assets/js/turn.html4.min.js'],
        both: ['./assets/js/scissor.min.js', './assets/css/double-page.css'],
        complete: loadApp
      });
  