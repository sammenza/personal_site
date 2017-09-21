var attach = function attach(element, listener, event, tf){
    if (element.attachEvent) {
        element.attachEvent("on"+listener, event);
    } else{
        element.addEventListener(listener, event, tf);
    }
}

attach(window, 'load', function() {
    document.getElementById('loader-wrapper').className = 'slide-out';
    document.getElementById('loader-wrapper').visible = false;
});
