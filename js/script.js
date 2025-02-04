$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});

// Add hover effect to menus
jQuery('.navbar .dropdown').hover(function () {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
}, function () {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
});

$(".nav-link").click(function(){
    if ($(this).hasClass('active')){
        $('#' + this.hash.substr(1).toLowerCase()).toggleClass('active');
    }
});

$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


//$('.headingwrapper, .slider').hover(function() {
 // $('.slider').toggleClass('close');

//});

  jQuery(".nav-folderized h3").click(function(){
      jQuery(this).parent(".nav.fote").toggleClass("open"); 
      jQuery('footer').animate({ scrollTop: jQuery(this).offset().top - 170 }, 1500 );
  });

  jQuery(document).ready(function($){
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});

 //LOADER START HERE

function reveal() {
    // window sizes
    var winsize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    // if animating return
    if (this.isAnimating) {
        return false;
    }
    this.isAnimating = true;
    var widthVal, heightVal, transform;
    var pageDiagonal = Math.sqrt(Math.pow(winsize.width, 2) + Math.pow(winsize.height, 2));
    widthVal = heightVal = pageDiagonal + 'px';
    transform = 'translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0,' + pageDiagonal + 'px,0)';
    var revealerWrapper = document.getElementById("revealer");
    revealerWrapper.style.width = widthVal;
    revealerWrapper.style.height = heightVal;
    revealerWrapper.style.WebkitTransform = revealerWrapper.style.transform = transform;
    revealerWrapper.style.opacity = 1;
    setTimeout(function() {
        revealerWrapper.style.opacity = 0;
    }, 1600);
    setTimeout(function() {
        $("#loader-wrapper").fadeOut();
    }, 750);
}
$(window).ready(function() {
    if ($('body').hasClass("main")) {
        reveal();
    }
    $("body").addClass("loaded");
});

//GOOGLE TRANSLATE

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,fr,sw,ar,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
  }


// WORK IN PROGRESS BELOW
      	
$('document').ready(function () {


    // RESTYLE THE DROPDOWN MENU
$('#google_translate_element').on("click", function () {

    // Change font family and color
    $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
        .css({
            'color':'#000',
            'font-family': 'DroidSerif-Bold',
            'width':'100%',
            'font-weight':'500',
            'text-transform':'uppercase'
        });
  
    // Change the padding of the languages
    $("iframe").contents().find('.goog-te-menu2-item div').css({
        'border-top': 'solid 1px #E6E6E6','padding': '10px 15px 10px 15px','font-family': 'DroidSerif-Bold','font-weight':'500','text-transform':'uppercase','text-transform':'uppercase'
    });

  
    // Change hover effects
   $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
        $(this).css('background-color', '#B89C17').find('span.text').css({
        });
    },
    function () {
        $(this).css('background-color', 'white').find('span.text').css({
            'font-family': 'DroidSerif-Bold',
            'font-weight':'500',
            'text-transform':'uppercase',
            'color':'#000'
         });
    });

   

    // Change the iframe's box shadow
    $(".goog-te-menu-frame").css({
        'height': '300px',
         'box-shadow': 'rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.3) 0px 8px 10px -5px',
         'overflow-y':'scroll'
     });
    
  
  
    // Change the iframe's size and position?
    $(".goog-te-menu-frame").css({
        'width': '100%',
        'top': '50px',
 
        
       
    });
    // Change iframes's size
    $("iframe").contents().find('.goog-te-menu2').css({
        'height': '300px',
        'width': '100%',
       'overflow-y':'scroll'
       
    });
});
});

