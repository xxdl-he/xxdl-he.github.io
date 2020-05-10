var bodyBgs = [];
bodyBgs[0] = "https://snakekisscdn.imfast.io/1.mp3";
bodyBgs[1] = "https://snakekisscdn.imfast.io/2.mp3";
bodyBgs[2] = "https://snakekisscdn.imfast.io/3.mp3";
bodyBgs[3] = "https://snakekisscdn.imfast.io/4.mp3";
bodyBgs[4] = "https://snakekisscdn.imfast.io/5.mp3";
bodyBgs[5] = "https://snakekisscdn.imfast.io/6.mp3";
bodyBgs[6] = "https://snakekisscdn.imfast.io/7.mp3";
bodyBgs[7] = "https://snakekisscdn.imfast.io/8.mp3";
bodyBgs[8] = "https://snakekisscdn.imfast.io/9.mp3";
bodyBgs[9] = "https://snakekisscdn.imfast.io/10.mp3";
bodyBgs[10] = "https://snakekisscdn.imfast.io/11.mp3";
bodyBgs[11] = "https://snakekisscdn.imfast.io/12.mp3";
bodyBgs[12] = "https://snakekisscdn.imfast.io/13.mp3";
bodyBgs[13] = "https://snakekisscdn.imfast.io/14.mp3";
bodyBgs[14] = "https://snakekisscdn.imfast.io/15.mp3";
bodyBgs[15] = "https://snakekisscdn.imfast.io/16.mp3";
bodyBgs[16] = "https://snakekisscdn.imfast.io/17.mp3";
bodyBgs[17] = "https://snakekisscdn.imfast.io/18.mp3";
bodyBgs[18] = "https://snakekisscdn.imfast.io/19.mp3";
bodyBgs[19] = "https://snakekisscdn.imfast.io/20.mp3";
bodyBgs[20] = "https://snakekisscdn.imfast.io/21.mp3";
bodyBgs[21] = "https://snakekisscdn.imfast.io/22.mp3";
bodyBgs[22] = "https://snakekisscdn.imfast.io/23.mp3";
bodyBgs[23] = "https://snakekisscdn.imfast.io/24.mp3";
bodyBgs[24] = "https://snakekisscdn.imfast.io/25.mp3";
bodyBgs[25] = "https://snakekisscdn.imfast.io/26.mp3";
bodyBgs[26] = "https://snakekisscdn.imfast.io/27.mp3";
bodyBgs[27] = "https://snakekisscdn.imfast.io/28.mp3";
bodyBgs[28] = "https://snakekisscdn.imfast.io/29.mp3";
bodyBgs[29] = "https://snakekisscdn.imfast.io/30.mp3";
bodyBgs[30] = "https://snakekisscdn.imfast.io/31.mp3";
bodyBgs[31] = "https://snakekisscdn.imfast.io/32.mp3";
bodyBgs[32] = "https://snakekisscdn.imfast.io/33.mp3";
bodyBgs[33] = "https://snakekisscdn.imfast.io/34.mp3";
bodyBgs[34] = "https://snakekisscdn.imfast.io/35.mp3";
bodyBgs[35] = "https://snakekisscdn.imfast.io/36.mp3";
bodyBgs[36] = "https://snakekisscdn.imfast.io/37.mp3";
bodyBgs[37] = "https://snakekisscdn.imfast.io/38.mp3";
bodyBgs[38] = "https://snakekisscdn.imfast.io/39.mp3";
bodyBgs[39] = "https://snakekisscdn.imfast.io/40.mp3";
bodyBgs[40] = "https://snakekisscdn.imfast.io/41.mp3";
bodyBgs[41] = "https://snakekisscdn.imfast.io/42.mp3";
bodyBgs[42] = "https://snakekisscdn.imfast.io/43.mp3";
bodyBgs[43] = "https://snakekisscdn.imfast.io/44.mp3";
bodyBgs[44] = "https://snakekisscdn.imfast.io/45.mp3";
bodyBgs[45] = "https://snakekisscdn.imfast.io/46.mp3";
bodyBgs[46] = "https://snakekisscdn.imfast.io/47.mp3";
bodyBgs[47] = "https://snakekisscdn.imfast.io/48.mp3";
bodyBgs[48] = "https://snakekisscdn.imfast.io/49.mp3";
bodyBgs[49] = "https://snakekisscdn.imfast.io/50.mp3";
bodyBgs[50] = "https://snakekisscdn.imfast.io/51.mp3";
bodyBgs[51] = "https://snakekisscdn.imfast.io/52.mp3";
bodyBgs[52] = "https://snakekisscdn.imfast.io/53.mp3";
bodyBgs[53] = "https://snakekisscdn.imfast.io/54.mp3";
bodyBgs[55] = "https://snakekisscdn.imfast.io/55.mp3";
bodyBgs[55] = "https://snakekisscdn.imfast.io/56.mp3";
bodyBgs[56] = "https://snakekisscdn.imfast.io/57.mp3";
bodyBgs[57] = "https://snakekisscdn.imfast.io/58.mp3";
bodyBgs[58] = "https://snakekisscdn.imfast.io/59.mp3";
bodyBgs[59] = "https://snakekisscdn.imfast.io/50.mp3";
bodyBgs[60] = "https://snakekisscdn.imfast.io/61.mp3";
bodyBgs[61] = "https://snakekisscdn.imfast.io/62.mp3";
bodyBgs[62] = "https://snakekisscdn.imfast.io/63.mp3";
bodyBgs[63] = "https://snakekisscdn.imfast.io/64.mp3";
bodyBgs[64] = "https://snakekisscdn.imfast.io/65.mp3";
bodyBgs[65] = "https://snakekisscdn.imfast.io/66.mp3";
bodyBgs[66] = "https://snakekisscdn.imfast.io/67.mp3";
bodyBgs[67] = "https://snakekisscdn.imfast.io/68.mp3";
bodyBgs[68] = "https://snakekisscdn.imfast.io/69.mp3";
bodyBgs[69] = "https://snakekisscdn.imfast.io/70.mp3";
bodyBgs[70] = "https://snakekisscdn.imfast.io/71.mp3";
bodyBgs[71] = "https://snakekisscdn.imfast.io/72.mp3";
var randomBgIndex = Math.round(Math.random() * 71);
document.write('<audio id=\'Jaudio\' src=\'' + bodyBgs[randomBgIndex] + '\'autoplay=\'autoplay\'></audio>');
//]]>；
function audioAutoPlay(id) 
{
    var audio = document.getElementById(id), play = function () 
    {
        audio.play();
        document.removeEventListener("touchstart", play, false);
    };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () 
    {
        play();
    }, false);
    document.addEventListener("touchstart", play, false);
}
audioAutoPlay('Jaudio');
var audio = document.getElementById("Jaudio");
audio.loop = false;
audio.addEventListener('ended', function () 
{
    location.reload();
}, false);
