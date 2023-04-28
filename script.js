$(function(){


    $(".openbtn").click(function () {

        var $menuBar= $('.menu-wrapper').find('.menu-inner');

        if($menuBar.hasClass('open')){
            $menuBar.removeClass('open')
            $menuBar.slideUp('fast');
        }else{
            $menuBar.addClass('open')
            $menuBar.slideDown('fast');
        };

        $(this).toggleClass('active');
    });

    

    $('.gallery-openBtn22').click(function(){
        var $galleryBar =$('.gallery22');

        if($galleryBar.hasClass('open')){
            $galleryBar.removeClass('open');
            $galleryBar.slideUp();
        }else{
            $galleryBar.addClass('open');
            $galleryBar.slideDown();
        };
    });

    $('.gallery-openBtn23').click(function(){
        var $galleryBar =$('.gallery23');

        if($galleryBar.hasClass('open')){
            $galleryBar.removeClass('open');
            $galleryBar.slideUp();
        }else{
            $galleryBar.addClass('open');
            $galleryBar.slideDown();
        };
    });

    //lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

    lightbox.option({
        'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
        'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
    })

});
