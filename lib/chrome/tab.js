var tab = {};

module.exports = tab;

tab.create = function(url, callback) {
    chrome.tabs.create({
        url: url
    }, function() {
        if(callback) {
            callback.apply(chrome, arguments);
        }
    });
};