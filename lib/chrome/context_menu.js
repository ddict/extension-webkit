var context_menu = {
    next_id: 0,
    callbacks: []
};

module.exports = context_menu;

//event
chrome.contextMenus.onClicked.addListener(function(data, tab) {
    var id = data.menuItemId;

    if(context_menu.callbacks[id]) {
        context_menu.callbacks[id](data, tab);
    }
});

context_menu.create = function(opt) {
    opt.contexts = opt.contexts || ['all'];

    if(!opt.id) {
        opt.id = this.next_id + '';
        this.next_id++;

        if(opt.onClick) {
            this.callbacks.push(opt.onClick);
            delete opt.onClick;
        } else {
            this.callbacks.push(function() {});
        }
    }

    chrome.contextMenus.create(opt, function() {
        if(arguments.length) {
            console.warn(arguments);
        }
    });
};