$(function() {
    // #change-colorがクリックされたら
    $('#change-color').on('click', function(){
        // id属性がtargetの要素のcolorプロパティをredにする
        $('#target').css('color', 'red');
    });

    // #change-textがクリックされたら
    $('#change-text').on('click', function(){
        // id属性がtargetの要素のpをHello!にする
        $('#target').text('Hello!');
    });

    // #fade-outがクリックされたら
    $('#fade-out').on('click', function(){
        // id属性がtargetの要素をフェードアウトする
        $('#target').fadeOut();
    });

    // #fade-inがクリックされたら
    $('#fade-in').on('click', function(){
        // id属性がtargetの要素をフェードアウトする
        $('#target').fadeIn();
    });
});