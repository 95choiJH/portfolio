
$("document").ready(function() {  

    var width = window.innerWidth;
        careerImg = $('.career-img');
        sdcImg = $('.sdc-img');
        chargerImg = $('.charger-img');
        standardY = careerImg.offset().top;
        sdcImgY = sdcImg.offset().top;
        chargerImgY = chargerImg.offset().top;
        text = $('.text');
        textHome = $('.text-home');
        textCareer = $('.text-career');
        textSdc = $('.text-sdc');
        textCharger = $('.text-charger');
        cateHome = $('.category-home');
        cateWork = $('.category-work');
        viewCareer = $('.view-career');
        viewSdc = $('.view-sdc');
        viewCharger = $('.view-charger');
        backright = $('.backRight');
        backrightPre = $('.backRight-pre');
        backrightNext = $('.backRight-next');
        homeColor = "#B8A310";
        careerColor = "#15cb98";
        sdcColor = "#727584";
        chargerColor = "#E3A062"
        mql = window.matchMedia('( min-height: 720px )');
        mql2 = window.matchMedia('( max-width: 1024px )');
        console.log(mql);
        menu = $('.menu');
        menuBack = $('.menu-back');
        menuBackRight = $('.menu-backRight');
        mouseActive = $('.mouse-active');
        menuHome = $('.menu-home');
        menuCareer = $('.menu-career');
        menuSdc = $('.menu-sdc');
        menuCharger = $('.menu-charger');
        menuProfile = $('.menu-profile');
        square = $('.square');
        backLeftWork = $('.backLeftWork');
        backRightWrap = $('#backRight-wrap');
        backRight = $('.backRight');
        width_size = window.innerWidth;
        scrollMark = $('.scroll');
        var delta = 300; var timer = null;
        contact = $('.contact');
        additionCareer = $('.addition-career');
        additionSdc = $('.addition-sdc');
        additionCharger = $('.addition-charger');
        view = $('.view');
        form = $('.form');

        
    $(view).click(function() {
        if(viewCareer.hasClass('view-appear')) {
            window.open("https://95choijh.github.io/career-pc/");
        } else if(viewSdc.hasClass('view-appear')) {
            window.open("https://95choijh.github.io/sdc-pc/");
        } else {
            window.open("https://95choijh.github.io/charger-pc/");
        }
    });

    function resizeTest() {
        if (width_size <= 1024) {
            square.addClass('width-720');
            backLeftWork.addClass('width-720');
            backRightWrap.addClass('width-720');
            scrollMark.addClass('width-720');
            square.removeClass('width-1024');
            backLeftWork.removeClass('width-1024');
            backRightWrap.removeClass('width-1024');
            scrollMark.removeClass('width-1024');
        } else {
            square.addClass('width-1024');
            backLeftWork.addClass('width-1024');
            backRightWrap.addClass('width-1024');
            scrollMark.addClass('width-1024');
            square.removeClass('width-720');
            backLeftWork.removeClass('width-720');
            backRightWrap.removeClass('width-720');
            scrollMark.removeClass('width-720');
        }
    }
    resizeTest();

    $(window).resize(function (){
        width_size = window.innerWidth;
        resizeTest();
    })

    $( window ).on( 'resize', function( ) { 
        clearTimeout( timer ); 
        timer = setTimeout( resizeDone, delta ); 
    }); 
    function resizeDone( ) { 
        window.location.reload();
    }

    window.addEventListener('resize', function() {
        var height = $(document).scrollTop();
        if(standardY > height) {
            backright.css({"background-color" : homeColor});
            backrightNext.css({"background-color" : careerColor});
            backrightNext.css({"height" : height + "px"});
        } else if(sdcImgY > height) {
            backright.css({"background-color" : careerColor});
            backrightNext.css({"background-color" : sdcColor});
            backrightNext.css({"height" : height - sdcImgY + standardY +"px"});
        } else if(chargerImgY > height) {
            backright.css({"background-color" : sdcColor});
            backrightNext.css({"background-color" : chargerColor});
            backrightNext.css({"height" : height - chargerImgY + standardY +"px"});
        }
        if(height <= standardY*0.3){
            textHome.addClass('text-appear');
        }
        if(height <= standardY*0.4) {
            cateHome.addClass('category-appear');
        }
        if(height > standardY*0.5) {
            textCareer.addClass('text-appear');
        }
        if(height > standardY*0.6) {
            cateWork.addClass('category-appear');
            viewCareer.addClass('view-appear');
            additionCareer.addClass('appear');
        }
        if(height > sdcImgY - standardY*0.3) {
            textSdc.addClass('text-appear');
            textCareer.removeClass('text-appear');
            viewCareer.removeClass('view-appear');
            additionCareer.removeClass('appear');
        }
        if(height > sdcImgY - standardY*0.2) {
            viewSdc.addClass('view-appear');
            additionSdc.addClass('appear');
        }
        if(height > chargerImgY - standardY*0.5) {
            textCharger.addClass('text-appear');
            textCareer.removeClass('text-appear');
            textSdc.removeClass('text-appear');
            viewCareer.removeClass('view-appear');
            viewSdc.removeClass('view-appear');
            additionSdc.removeClass('appear');
        }
        if(height > chargerImgY - standardY*0.4) {
            viewCharger.addClass('view-appear');
            additionCharger.addClass('appear');
        }

        if(mql2.matches == true) {
            
            menuHome.on('click', function(e){
                window.scrollTo(0,0)
            })
        
            menuCareer.on('click', function(e){
                window.scrollTo(0,standardY - 150)
            })
        
            menuSdc.on('click', function(e){
                window.scrollTo(0,sdcImgY - 150)
            })
        
            menuCharger.on('click', function(e){
                window.scrollTo(0,chargerImgY - 150)
            })
        } else {
            menuHome.on('click', function(e){
                window.scrollTo(0,0)
            })
        
            menuCareer.on('click', function(e){
                window.scrollTo(0,standardY)
            })
        
            menuSdc.on('click', function(e){
                window.scrollTo(0,sdcImgY)
            })
        
            menuCharger.on('click', function(e){
                window.scrollTo(0,chargerImgY)
            })
        }  
        if(Math.round(height) + $(window).height() == $(document).height()) {
            contact.addClass('contact-appear');
        } else {
            contact.removeClass('contact-appear');
        }
      }, true);


    $(window).scroll(function () {
        var height = $(document).scrollTop();
        console.log(height);
        if(height > standardY*0.3){
            textHome.removeClass('text-appear');
        } else {
            textHome.addClass('text-appear');
        }
        if(height > standardY*0.4) {
            cateHome.removeClass('category-appear');
        } else {
            cateHome.addClass('category-appear');
        }
        if(height > standardY*0.5) {
            textCareer.addClass('text-appear');
        } else {
            textCareer.removeClass('text-appear');
            viewCareer.removeClass('view-appear')
            additionCareer.removeClass('appear')
        }
        if(height > standardY*0.6) {
            cateWork.addClass('category-appear');
            viewCareer.addClass('view-appear');
            additionCareer.addClass('appear');
        } else {
            cateWork.removeClass('category-appear');
        }
        if(height > sdcImgY - standardY*0.8) {
            viewCareer.removeClass('view-appear')
            additionCareer.removeClass('appear');
        }
        if(height > sdcImgY - standardY*0.7) {
            textCareer.removeClass('text-appear');
        }
        if(height > sdcImgY - standardY*0.3) {
            textSdc.addClass('text-appear');
        } else {
            textSdc.removeClass('text-appear');
            viewSdc.removeClass('view-appear');
            additionSdc.removeClass('appear');
        }
        if(height > sdcImgY - standardY*0.2) {
            viewSdc.addClass('view-appear');
            additionSdc.addClass('appear');
        }
        if(height > chargerImgY - standardY*0.8) {
            viewSdc.removeClass('view-appear');
            additionSdc.removeClass('appear');
        }
        if(height > chargerImgY - standardY*0.7) {
            textSdc.removeClass('text-appear');
        }
        if(height > chargerImgY - standardY*0.5) {
            textCharger.addClass('text-appear');
        } else {
            textCharger.removeClass('text-appear');
            viewCharger.removeClass('view-appear')
            additionCharger.removeClass('appear');
        }
        if(height > chargerImgY - standardY*0.4) {
            viewCharger.addClass('view-appear');
            additionCharger.addClass('appear');
        }

        if(standardY > height) {
            backright.css({"background-color" : homeColor});
            backrightNext.css({"background-color" : careerColor});
            backrightNext.css({"height" : height + "px"});
        } else if(sdcImgY > height) {
            backright.css({"background-color" : careerColor});
            backrightNext.css({"background-color" : sdcColor});
            backrightNext.css({"height" : height - sdcImgY + standardY +"px"});
        } else if(chargerImgY > height) {
            backright.css({"background-color" : sdcColor});
            backrightNext.css({"background-color" : chargerColor});
            backrightNext.css({"height" : height - chargerImgY + standardY +"px"});
        } else if(height > chargerImgY) {
            backright.css({"background-color" : chargerColor});
        }
        if(height + $(window).height() == $(document).height()) {
            contact.addClass('contact-appear');
        } else {
            contact.removeClass('contact-appear');
        }
        if(Math.round(height) + $(window).height() == $(document).height()) {
            contact.addClass('contact-appear');
        } else {
            contact.removeClass('contact-appear');
        }
    })

    function test() {
        $(menu).toggleClass('menu-hover');
        $(menu).toggleClass('active');
        $(menuBack).toggleClass('menu-open');
        $(menuBackRight).toggleClass('menu-open-backRight');
    }
    menu.on('click', function(e){
        e.preventDefault();
        test();
    })

    mouseActive.on('click', function(e){
        e.preventDefault();
        test();
    }) 

});