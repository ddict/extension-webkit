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
    
    var embed2 = document.createElement('embed');
    embed2.src = '';
    document.body.appendChild(embed2);
};