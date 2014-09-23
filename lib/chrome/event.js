var Emitter = require('emitter');

module.exports = Event;

/**
 *     startup
 *     update
 *     install
 *     chrome_update
 *     shared_module_update
 *     update_available
 *     message
 */
function Event(Chrome) {
    Emitter(Chrome);

    //startup
    Chrome.runtime.onStartup.addListener(function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('startup');

        Chrome.emit.apply(Chrome, args);
    });

    //install
    Chrome.runtime.onInstalled.addListener(function(data) {
        if(!(data && data.reason)) {
            return;
        }

        var args = Array.prototype.slice.call(arguments);
        args.unshift(data.reason);

        Chrome.emit.apply(Chrome, args);
    });

    //update_available
    Chrome.runtime.onUpdateAvailable.addListener(function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('update_available');

        Chrome.emit.apply(Chrome, args);
    });

    //message
    Chrome.runtime.onMessage.addListener(function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('message');

        Chrome.emit.apply(Chrome, args);
    });

    //context_menu
    Chrome.contextMenus.onClicked.addListener(function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('context_menu');

        Chrome.emit.apply(Chrome, args);
    });
}