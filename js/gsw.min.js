

var navbar = document.getElementById("navbar");
function updateNavbar() {
    (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) < 125 ? navbar.classList.remove("navBarMode") : navbar.classList.add("navBarMode")
}
var oldRelease, blurredMountain = document.getElementById("blurredMountain");

function goTo(e) {
    var t = 0;
    e && (t = document.getElementById(e).getBoundingClientRect().top - document.body.getBoundingClientRect().top + 180),
    document.body.scrollTop = t,
    document.documentElement.scrollTop = t
}
var darkMode = !1;
function toggleDarkMode() {
    createCookie("darkMode", darkMode = darkMode ? (document.getElementsByTagName("html")[0].classList.remove("darkMode"),
    !1) : (enableDarkMode(),
    !0), 999999)
}
function enableDarkMode() {
    document.getElementsByTagName("html")[0].classList.add("darkMode")
}
function readCookie(e) {
    for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
        for (var o = n[a]; " " == o.charAt(0); )
            o = o.substring(1, o.length);
        if (0 == o.indexOf(t))
            return "true" == o.substring(t.length, o.length) || "false" != o.substring(t.length, o.length) && o.substring(t.length, o.length)
    }
    return null
}
function createCookie(e, t, n) {
    if (n) {
        var a = new Date;
        a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
        var o = "; expires=" + a.toGMTString()
    } else
        o = "";
    document.cookie = e + "=" + t + o + "; path=/"
}
null != readCookie("darkMode") ? readCookie("darkMode") && (darkMode = !0,
enableDarkMode()) : window.matchMedia("(prefers-color-scheme: dark)").matches && (enableDarkMode(),
darkMode = !0);
var iOSVersion = navigator.userAgent.match(/OS ((\d+_?){2,3})\s/);
null != iOSVersion && (document.getElementById("altStoreSection").style.display = "block",
iOSVersion = iOSVersion[0].replace(/\_/g, "."),
document.getElementById("iOSVersion").innerText = "| i" + iOSVersion);
var releaseDate = new Date(Date.UTC(2020, 4, 23, 22, 0, 0))
  , releaseDateFormatted = releaseDate.getTime();
