const express = require('express');
const app = express();

//express app root route '/' handler
app.get('/', (req, res) => {
  res.send({ hi: 'twitter #gotta.luv #code' });
});

//set up dynamic port binding from Heroku process environment variables
//OR default to 5000 for localhost development environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
