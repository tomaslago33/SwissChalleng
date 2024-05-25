document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('select');
   var instances = M.FormSelect.init(elems);
});

$(document).ready(function() {
  $(".toggle-password").click(function() {
      var input = $($(this).attr("toggle"));
      if (input.attr("type") === "password") {
          input.attr("type", "text");
      } else {
          input.attr("type", "password");
      }
  });
});