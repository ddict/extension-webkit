var Chrome = require('./chrome');

module.exports = Opera;

function Opera(opt) {
    if(!(this instanceof Opera)) {
        return new Opera(opt);
    }
}

//inherit from chrome
Opera.prototype = Object.create(Chrome.prototype);

Opera.prototype.notify = function(opt, callback) {
    alert(opt.data);
};

Opera.prototype.playAudio = function(url) {
    var embed = document.createElement('embed');
    embed.src = url;
    document.body.appendChild(embed);
};