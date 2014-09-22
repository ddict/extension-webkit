// var Extension = $;
var Extension = require('extension');

var ex = Extension();

ex.listen();

ex.on('startup', function() {
    console.log('startup');
});

ex.on('install', function() {
    console.log('install');
});

ex.on('update', function() {
    console.log('update');
});

ex.on('message', function(data, tab, callback) {
    console.log('message');
    callback('ok');
});

ex.notify({
    data: 'data',
    icon: '/icon.png'
});

ex.playAudio('https://soundcloud.hs.llnwd.net/LgRCTywpLWGZ.128.mp3?AWSAccessKeyId=AKIAJNIGGLK7XA7YZSNQ\u0026Expires=1411383029\u0026Signature=4I4SPN4mwXgsGedLpWdHkbxugB0%3D\u0026e=1411383029\u0026h=b020fc536a71417e6eca47310211364a","preview_mp3_128_url":"https://ec-preview-media.sndcdn.com/preview/0/30/LgRCTywpLWGZ.128.mp3?f10880d39085a94a0418a7e162b03d52e21adf826af17a391e1b761930259ff66aedf8abf5619a1d8e901999ffaab18c09c0bea9ec457fe7c837f87919416ce2751dde73a137edcd506f0426af83009b5e78');

// ex.on('context_menu', function() {
//     console.log(arguments);
// });

// ex.context_menu.create({
//     title: 'context_menu',
//     contexts: ['all']
// }, function() {
//     console.log('done');
// });