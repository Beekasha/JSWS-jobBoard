const Sheet = require('./sheet');
const fetch = require('node-fetch');


(async function() {

    const sheet = new Sheet();
    await sheet.load();

    const resp = await fetch('https://jobs.github.com/positions.json?description=python&location=remote');
    const json = await resp.json();

    console.log({json})

})()
