function backRedirect() {
    if(window.history.length == 2) {
        window.location = "/apps/PowerStore";
    } else {
        window.history.go(-2);
    }
}

function backRedirectForStore() {
    if(window.history.length == 2) {
        window.location = "/"
    } else {
        window.history.go(-2);
    }
}