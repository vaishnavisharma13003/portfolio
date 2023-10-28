
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');  
    });
    
    });






    // contact

 var send=function(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vaishnavi@gmail.com",
        Password : "BB8F4D8BB97E15FC121F364E6715FD9AB1AB",
        To : 'vaishnavisharma1301@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New enquiry from portfolio ",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}





