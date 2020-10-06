var express = require('express')();

var http = require('http').Server(express);
var io = require('socket.io')(http);

//.....................................................CSS.....................................................
express.get('/css/bootstrap.min.css', function(req, res){
 res.sendFile(__dirname + '/css/bootstrap.min.css');
});

express.get('/css/ie10-viewport-bug-workaround.css', function(req, res){
 res.sendFile(__dirname + '/css/ie10-viewport-bug-workaround.css');
});

express.get('/css/normalise.css', function(req, res){
 res.sendFile(__dirname + '/css/normalise.css');
});

express.get('/css/fonts.css', function(req, res){
 res.sendFile(__dirname + '/css/fonts.css');
});

express.get('/css/custom_admin.css', function(req, res){
 res.sendFile(__dirname + '/css/custom_admin.css');
});

express.get('/css/custom_scoreboard.css', function(req, res){
 res.sendFile(__dirname + '/css/custom_scoreboard.css');
});

//...................................................../CSS ends here.....................................................

//.....................................................Fonts CSS.....................................................
express.get('/fonts/Ez4zJbsGr2BgXcNUWBVgEEbBiZVUr6I3CXzgk1sO27Y.woff2', function(req, res){
 res.sendFile(__dirname + '/fonts/Ez4zJbsGr2BgXcNUWBVgEEbBiZVUr6I3CXzgk1sO27Y.woff2');
});

express.get('/fonts/UyBMtLsHKBKXelqf4x7VRQ.woff2', function(req, res){
 res.sendFile(__dirname + '/fonts/UyBMtLsHKBKXelqf4x7VRQ.woff2');
});

express.get('/fonts/1YwB1sO8YE1Lyjf12WNiUA.woff2', function(req, res){
 res.sendFile(__dirname + '/fonts/1YwB1sO8YE1Lyjf12WNiUA.woff2');
});
//...................................................../Fonts CSS ends here.....................................................


//.....................................................Plugins' CSS & JS.....................................................


// icheck
express.get('/plugins/icheck/skins/flat/blue.css', function(req, res){
 res.sendFile(__dirname + '/plugins/icheck/skins/flat/blue.css');
});

express.get('/plugins/icheck/icheck.js', function(req, res){
 res.sendFile(__dirname + '/plugins/icheck/icheck.js');
});

express.get('/plugins/icheck/skins/flat/blue.png', function(req, res){
 res.sendFile(__dirname + '/plugins/icheck/skins/flat/blue.png');
});

// Jquery Web Ticker
express.get('/plugins/jquery_web_ticker/jquery.webticker.min.js', function(req, res){
 res.sendFile(__dirname + '/plugins/jquery_web_ticker/jquery.webticker.min.js');
});

express.get('/plugins/jquery_web_ticker/web_ticker.css', function(req, res){
 res.sendFile(__dirname + '/plugins/jquery_web_ticker/web_ticker.css');
});

//...................................................../Plugins' CSS & JS end here.....................................................

//.....................................................JS.....................................................
express.get('/js/ie-emulation-modes-warning.js', function(req, res){
 res.sendFile(__dirname + '/js/ie-emulation-modes-warning.js');
});

express.get('/js/jquery.min.js', function(req, res){
 res.sendFile(__dirname + '/js/jquery.min.js');
});

express.get('/js/bootstrap.min.js', function(req, res){
 res.sendFile(__dirname + '/js/bootstrap.min.js');
});

express.get('/js/ie10-viewport-bug-workaround.js', function(req, res){
 res.sendFile(__dirname + '/js/ie10-viewport-bug-workaround.js');
});

// express.get('/js/fireworks.js', function(req, res){
//  res.sendFile(__dirname + '/js/fireworks.js');
// });

//...................................................../JS ends here.....................................................

//.....................................................Images.....................................................
express.get('/images/logo_psionic_5.png', function(req, res){
 res.sendFile(__dirname + '/images/logo_psionic_5.png');
});

express.get('/images/uttara_club_logo_1.png', function(req, res){
 res.sendFile(__dirname + '/images/uttara_club_logo_1.png');
});
//...................................................../Images.....................................................



express.get('/', function(req, res){
 res.sendFile(__dirname + '/scoreboard.html');
});

express.get('/admin', function(req, res){
 res.sendFile(__dirname + '/admin_scoreboard.html');
});

io.on('connection', function(socket){
 console.log('a user connected');
});

http.listen(3000, function(){
 console.log('listening on *:3000');
});

io.on('connection', function(socket){
 console.log('a user connected');
 socket.on('disconnect', function(){
   console.log('user disconnected');
 });
});

io.on('connection', function(socket){
 socket.on('update board', function(msg){
   io.emit('update board', msg);
 });
});

io.on('connection', function(socket){
 socket.on('update round', function(round, objectives, prize_money, checkbox_objectives){
   io.emit('update round', round, objectives, prize_money, checkbox_objectives);
 });
});

io.on('connection', function(socket){
 socket.on('undo last', function(){
   io.emit('undo last');
 });
});

io.on('connection', function(socket){
 socket.on('reset board', function(){
   io.emit('reset board');
 });
});

io.on('connection', function(socket){
 socket.on('reset all', function(){
   io.emit('reset all');
 });
});

io.on('connection', function(socket){
 socket.on('winner fireworks', function(toggle){
   io.emit('winner fireworks', toggle);
 });
});

io.on('connection', function(socket){
 socket.on('ticker text', function(toggle){
   io.emit('ticker text', toggle);
 });
});







