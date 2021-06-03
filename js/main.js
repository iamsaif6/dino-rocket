
let trigger = document.querySelector('.nav__menu');
let menu = document.querySelector('.offset')

trigger.addEventListener('click' , function(){
      menu.classList.toggle('active');
      this.classList.toggle('active')
     });


     

$('.logo__carousel').owlCarousel({

      loop:true,
      nav:true,
      dots:true,
      items: 3,
      margin:40,

      responsive : {
            // breakpoint from 0 up
            0 : {
                  items:1
            },
            // breakpoint from 480 up
            480 : {
                  items:2
            },
            // breakpoint from 768 up
            768 : {
                  item:3
            }
        }
});

