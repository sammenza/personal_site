var attach = function attach(element, listener, event, tf){
    if (element.attachEvent) {
        element.attachEvent("on"+listener,event);
    } else{
        element.addEventListener(listener,event,tf);
    }
}

var fadeOut = function fadeOut(element,startLevel,endLevel,duration,callback){
    var fOInt,
    opacity = startLevel;
    fOInt = setInterval(function() {
        if (opacity <= endLevel) {
            element.style.opacity = endLevel;
            element.style.filter = "alpha(opacity = " + endLevel + ")";
            clearInterval(fOInt);
            if( typeof callback == 'function') callback(true);
        } else {
            opacity -= 0.1;
            element.style.opacity = opacity;
            element.style.filter = "alpha(opacity = " + opacity * 100 + ")";
        }
    }, duration);
}

attach(window, 'load', function() {
    // fadeOut(document.getElementById('loader-wrapper'), 1, 0, 50, function (cb) {
    // });
    document.getElementById('loader-wrapper').className = 'slide-out';
    document.getElementById('loader-wrapper').visible = false;
});