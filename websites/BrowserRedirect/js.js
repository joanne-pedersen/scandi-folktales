// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

//Output
if (isChrome == true) {
    window.location.replace("http://www.w3schools.com");
} else if (isFirefox == true) {
    alert("Firefox");
} else {
    alert("HAHA NOPE");
}
