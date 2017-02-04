$(document).ready(function(){
    $(".navbar-nav li").click(function(){
//        console.log('clicked!');
        switch (this.children[0].hash) {
            case '#/users':
                $("li").removeClass('active');
                $(this).addClass('active');
                break;
            case '#/login':
                $("li").removeClass('active');
                $(this).addClass('active');
                break;
            case '#/':
                $("li").removeClass('active');
                $('#homeSweetHome').addClass('active');
                break;
        }
    });
    $('.navbar-brand').click(() => {
        $("li").removeClass('active');
        $('#homeSweetHome').addClass('active');               
     });
});