(function() {
    $(document).ready(function() {
      var is_dragging;
      is_dragging = false;
      $(document).on("mousedown touchstart", ".circle", function(e) {
        return is_dragging = true;
      });
      $(document).on("mouseup touchend", function(e) {
        return is_dragging = false;
      });
      return $(window).on("mousemove touchmove", function(e) {
        var angle, center_x, center_y, circle, delta_x, delta_y, pos_x, pos_y, touch;
        if (is_dragging) {
          circle = $(".circle");
          touch = void 0;
          if (e.originalEvent.touches) {
            touch = e.originalEvent.touches[0];
          }
          center_x = ($(circle).outerWidth() / 2) + $(circle).offset().left;
          center_y = ($(circle).outerHeight() / 2) + $(circle).offset().top;
          pos_x = e.pageX || touch.pageX;
          pos_y = e.pageY || touch.pageY;
          delta_y = center_y - pos_y;
          delta_x = center_x - pos_x;
          angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI); // Calculate Angle between circle center and mouse pos
          angle -= 90;
          if (angle < 0) {
            angle = 360 + angle; // Always show angle positive
          }
          angle = Math.round(angle);
          $(".dot").css("transform", "rotate(" + angle + "deg)");
          return $(".debug").html(angle + "کیلو");
        }
      });
    });
  
  }).call(this);









  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
      
      element.addEventListener('click', function (e) {
  
        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;	
  
          if(nextEl) {
              e.preventDefault();	
              let mycollapse = new bootstrap.Collapse(nextEl);
              
              if(nextEl.classList.contains('show')){
                mycollapse.hide();
              } else {
                  mycollapse.show();
                  // find other submenus with class=show
                  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                  // if it exists, then close all of them
                  if(opened_submenu){
                    new bootstrap.Collapse(opened_submenu);
                  }
              }
          }
      }); // addEventListener
    }) // forEach
  }); 
  // DOMContentLoaded  end



/// for buy product
var number = document.getElementById('box');
for (i=0; i<100; i++){
  var span = document.createElement('span');
  span.textContent = i;
  number.appendChild(span);
}
var num = number.getElementsByTagName('span');
var index = 0;

function nextNum(){
  num[index].style.display = 'none';
  index = (index + 1) % num.length;
  num[index].style.display = 'initial';
}

function prevNum(){
  num[index].style.display = 'none';
  index = (index - 1 + num.length) % num.length;
  num[index].style.display = 'initial';
}


//Show heart in page buy product
$(document).ready(function() {
  $('.card .icon a').click(function(){
    $('.card .icon a').toggleClass('active')
  })
})











