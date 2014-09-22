var Emitter = require('emitter');

module.exports = Chrome;

/**
 * events
 *     startup
 *     update
 *     install
 *     chrome_update
 *     shared_module_update
 *     update_available
 *     message
 *
 * properties
 *     tab
 *     context_menu
 *
 * methods
 *     send     @runtime.sendMessage
 *     notify   @notifications.create
 */
function Chrome(opt) {
    if(!(this instanceof Chrome)) {
        return new Chrome(opt);
    }
}

//inherit from chrome
Chrome.prototype = Object.create(chrome);

//event emitter
Emitter(Chrome.prototype);

/**
 * init listener, object properties setup etc
 */
Chrome.prototype.listen = function() {
    var self = this;

    //startup
    self.runtime.onStartup.addListener(function() {
        console.log('startup');

        var args = Array.prototype.slice.call(arguments);
        args.unshift('startup');

        console.log(args);

        self.emit.apply(self, args);
    });

    //install
    self.runtime.onInstalled.addListener(function(data) {
        if(!(data && data.reason)) {
            return;
        }

        var args = Array.prototype.slice.call(arguments);
        args.unshift(data.reason);

        self.emit.apply(self, args);
    });

    //update_available
    self.runtime.onUpdateAvailable.addListener(function() {
        
        var args = Array.prototype.slice.call(arguments);
        args.unshift('update_available');

        self.emit.apply(self, args);
    });

    //message
    self.runtime.onMessage.addListener(function() {
        
        var args = Array.prototype.slice.call(arguments);
        args.unshift('message');

        self.emit.apply(self, args);
    });

    //context menu
    self.contextMenus.onClicked.addListener(function() {

        var args = Array.prototype.slice.call(arguments);
        args.unshift('context_menu');

        self.emit.apply(self, args);
    });
};

//aliases
Chrome.prototype.tab          = Chrome.prototype.tabs;
Chrome.prototype.context_menu = Chrome.prototype.contextMenus;
Chrome.prototype.send         = Chrome.prototype.runtime.sendMessage;

Chrome.prototype.notify = function(opt, callback) {
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

Chrome.prototype.playAudio = function(url) {
    var audio = document.createElement('audio');
    audio.src = url;
    audio.play();
};
