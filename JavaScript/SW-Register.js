//JavaScript

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("Service-Worker.js").then(registration => {
        console.log("Service Worker Registered :)");
        //console.log(registration);
    }).catch(error => {
        console.log("Service Worker Registration Failed :(");
        console.log(error);
    });
}
