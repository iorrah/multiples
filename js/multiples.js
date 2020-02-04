(function($) {
  "use strict"; // Start of use strict

  var print = function(content) {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = content;
    document.getElementById("main").appendChild(paragraph);
  };

  var engine = function() {
    var content = "";
    
    for (var i = 1; i <= 100; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        content = " - online banking";
      } else if (i % 3 === 0) {
        content = " - online";
      } else if (i % 5 === 0) {
        content = " - banking";
      }

      print(i + content);
    }
  };

  engine();

})(jQuery); // End of use strict
