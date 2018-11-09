// @flow
const express = require('express');
// const path = require('path');

const app = express();
const port = 3000;
// const DIST_DIR = path.join(__dirname, 'build');

// Serving the files on the dist folder
// app.use(express.static(DIST_DIR));

app.get('*', (req, res) => res.end('Hello world!!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
