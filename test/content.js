var Extension = require('extension');

var ex = Extension();

ex.send('haha', function(data) {
    console.log(data);
});