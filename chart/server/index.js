const express = require('express');
var app = express();
const cors = require('cors')
var fs = require('fs').promises;
var parse = require('csv-parse/lib/sync');
app.get('/',cors(), async (req, res) => {
  (async function () {
    const fileContent = await fs.readFile('test.csv');
    const records = parse(fileContent);
    res.send(records);
})();
});
app.listen('3000',() => console.log('listening on 3000'));