const express = require('express');
const app = express();

app, get('/', () => {
  res.send({ hi: 'there' });
});

app.listen(5000);
