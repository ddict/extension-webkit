var event = require('./event');
var context_menu = require('./context_menu');
var context_menu = require('./tab');

var Chrome = chrome;

module.exports = Chrome;

event(Chrome);
Chrome.context_menu = context_menu;
Chrome.tab = tab;

/**
 * properties
 *     tab
 *     context_menu
 *
 * methods
 *     send     @runtime.sendMessage
 *     notify   @notifications.create
 *     set      save persistent data in localStorage
 *     get      retrive persistent data in localStorage
 */

//aliases
Chrome.send = chrome.runtime.sendMessage;

//notification
Chrome.notify = function(opt, callback) {
    opt = {
        type: 'basic',
        title: opt.title || 'Extension',
        message: opt.data,
        iconUrl: opt.icon
    };

    if(callback) {
        return chrome.notifications.create('', opt, callback);
    }

    chrome.notifications.create('', opt, function() {});
};

Chrome.playAudio = function(url) {
    var audio = document.createElement('audio');
    audio.src = url;
    audio.play();
};

Chrome.set = function(key, value) {
    var data = localStorage.data;

    if(!key) {
        return;
    }

    if(!data) {
        data = {};
    }

    try {
        data = JSON.parse(data);
    } catch(e) {
        delete localStorage.data;
        data = {};
    }
    
    if(!value) {
        var obj = key;
        var keys = Object.keys(obj);

        for(var i = 0; i < keys.length; i++) {
            data[keys[i]] = obj[keys[i]];
        }
    } else {
        data[key] = value;
    }

    localStorage.data = JSON.stringify(data);
};

Chrome.get = function(key) {
    var data = localStorage.data;

    if(!data) {
        data = {};
    }

    try {
        data = JSON.parse(data);
    } catch(e) {
        delete localStorage.data;
        data = {};
    }

    if(!key) {
        return data;
    }

    return data[key];
};