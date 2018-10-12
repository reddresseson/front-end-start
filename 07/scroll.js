var $window= $(window);
var $up = $('.up');


$window.on('scroll', function(event){
    var scrollTop = $window.scrollTop();
    var 업버튼이보여질위치 = 100;

    if(scrollTop > 업버튼이보여질위치) {
        $up.fadeIn();
    }
    else {
        $up.fadeOut();
    }
});


function goTop(){

    $window.scrollTop(0);
};

$up.on('click', goTop);