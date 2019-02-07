const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage'
  });
});

const server = app.listen(80, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
