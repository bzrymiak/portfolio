// dropdown menu code from https://www.w3schools.com/howto/howto_js_dropdown.asp
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // close dropdown if user clicks off
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }