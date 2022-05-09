








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









