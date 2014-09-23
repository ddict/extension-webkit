module.exports = require('./' + detectBrowser());

function detectBrowser() {
    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'ie';
    }
    if(M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if(tem !== null) {
            return 'opera';
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if((tem = ua.match(/version\/(\d+)/i)) !== null) {
        M.splice(1, 1, tem[1]);
    }
    return M[0].toLowerCase();
}