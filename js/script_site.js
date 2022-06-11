//menu  button ورود/ثبت نام
$( document ).ready(function() {
    // Bounce button
    $('#animatebutton').click(function(){
        const element =  document.querySelector('.animatebutton');
        element.classList.add('animated', 'swing');
        setTimeout(function() {
          element.classList.remove('swing'); 
  },        1000); 
    });
    
    
}); 

//button سبد خرید
$( document ).ready(function() {
    // Bounce button
    $('#animatebutton2').click(function(){
        const element =  document.querySelector('.animatebutton2');
        element.classList.add('animated', 'swing');
        setTimeout(function() {
          element.classList.remove('swing'); 
  },        1000); 
    });
}); 



//menu  button ورود/ثبت نام
$( document ).ready(function() {
  // Bounce button
  $('#animatebutton3').click(function(){
      const element =  document.querySelector('.animatebutton');
      element.classList.add('animated', 'swing');
      setTimeout(function() {
        element.classList.remove('swing'); 
},        1000); 
  });
  
  
}); 

//button سبد خرید
$( document ).ready(function() {
  // Bounce button
  $('#animatebutton4').click(function(){
      const element =  document.querySelector('.animatebutton2');
      element.classList.add('animated', 'swing');
      setTimeout(function() {
        element.classList.remove('swing'); 
},        1000); 
  });
}); 



//end menu








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






// page login

$(document).ready(function(){
  $('.login-info-box').fadeOut();
  $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
  if($('#log-login-show').is(':checked')) {
      $('.register-info-box').fadeOut(); 
      $('.login-info-box').fadeIn();
      
      $('.white-panel').addClass('right-log');
      $('.register-show').addClass('show-log-panel');
      $('.login-show').removeClass('show-log-panel');
      
  }
  else if($('#log-reg-show').is(':checked')) {
      $('.register-info-box').fadeIn();
      $('.login-info-box').fadeOut();
      
      $('.white-panel').removeClass('right-log');
      
      $('.login-show').addClass('show-log-panel');
      $('.register-show').removeClass('show-log-panel');
  }
});










