var Chrome = require('./chrome');

//extend from Chrome
var Opera = Chrome;

module.exports = Opera;

Opera.notify = function(opt, callback) {
    alert(opt.data);
};

Opera.playAudio = function(url) {
    var embed = document.createElement('embed');
    embed.src = url;
    document.body.appendChild(embed);
};