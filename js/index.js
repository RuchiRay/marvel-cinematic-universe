var $element=$('.each-event, .title');
var $window = $(window);
$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');
function check_for_fade() { 
    var window_height = $window.height();
    
    $.each($element, function (event) {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_offset = $element.offset().top;
        space = window_height - (element_height + element_offset -$(window).scrollTop());
        if (space < 60) {
            $element.addClass("non-focus");
        } else {
            $element.removeClass("non-focus");
        }
 
    });
};
let qui = document.querySelector('.quix')
console.log(qui)
qui.addEventListener('click', function() {
    // document.querySelector('.wrapper').classList.toggle('expand');
    let wrapper = document.querySelector('#mainTime');
    console.log(wrapper)
    if(wrapper.className=='expand')
    {
        wrapper.className = 'wrapper';
        qui.innerHTML = 'expand';

    }
    else
    {
        wrapper.className = 'expand';
        qui.innerHTML = 'contract';

    }
  });
  
  console.log('hihii')