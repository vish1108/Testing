app.use(express.static('public'));
app.get('/css/style.css', function(req, res) {
  res.type('text/css');
  res.sendFile(__dirname + '/public/css/style.css');
});
