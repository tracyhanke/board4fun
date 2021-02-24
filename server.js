const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = 10086;
const io = require('socket.io')(http);

app.use('/js',express.static(__dirname + '/static/js'));

app.get('/', (req, res) => {
  console.log(req.query);
  if (req.query.method != 'create') {
    res.sendFile(__dirname + '/static/index.html');
    return;
  }

  let username = req.query.username;
  if (username == '') {
    username = Math.floor(Math.random() * 100);
  }

  res.send('mock config page username: ' + username);
});

http.listen(port, () => console.log('listening on port ' + port));

// io.on('connection', (socket) => {
//   console.log('new connection, socket id: ' + socket.id);
// });
// function onConnection(socket){
//   socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
// }

// io.on('connection', onConnection);
