document.addEventListener('DOMContentLoaded', function() {
    var liItems = document.querySelectorAll('.menu_item');
    for (var i = 0; i < liItems.length; i++) {
      liItems[i].addEventListener('click', scrollToSection);
    }
  
    function scrollToSection() {
      var targetIndex = Array.from(liItems).indexOf(this);
      var sections = document.querySelectorAll('.section');
      if (sections && targetIndex >= 0 && targetIndex < sections.length) {
        sections[targetIndex].scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var liItems = document.querySelectorAll('.sliderItem');
    for (var i = 0; i < liItems.length; i++) {
      liItems[i].addEventListener('click', scrollToSection);
    }
  
    function scrollToSection() {
      var targetIndex = Array.from(liItems).indexOf(this);
      var sections = document.querySelectorAll('.section');
      if (sections && targetIndex >= 0 && targetIndex < sections.length) {
        sections[targetIndex].scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
  const botones = document.querySelectorAll(".cont_botones button");
  const sections = document.querySelectorAll(".section");
  
  botones[0].addEventListener("click", function() {
    sections[3].scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  botones[1].addEventListener("click", function() {
    sections[2].scrollIntoView({
      behavior: 'smooth'
    });
  });
  document.querySelector(".flotante").addEventListener("click", function() {
    window.location.href = "https://api.whatsapp.com/send/?phone=5493516643787";
  });