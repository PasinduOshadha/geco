import "bootstrap/js/dist/collapse";
import AOS from "aos"


document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    AOS.init();

    var link = document.querySelector('.navbar-toggler');
    link.addEventListener('click', function() {
      if (link.classList.contains('toggle-menu--clicked')) {
        link.classList.remove('toggle-menu--clicked');
      } else {
        link.classList.add('toggle-menu--clicked');
      }
    }, false);
  }, false);