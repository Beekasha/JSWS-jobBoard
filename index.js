require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet');

 
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(process.env.SHEET_ID_FROM_URL);
 
(async function() {



    // OR load directly from json file if not in secure environment
    await doc.useServiceAccountAuth(require('./credentials.json'));

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    await doc.updateProperties({ title: 'renamed doc2' });
    
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    await sheet.addRows([
        { title: 'Software Engineer', location: 'NY' },
        { title: 'Software Developer', location: 'LA' },
    ]);
    // console.log(sheet.title);
    // console.log(sheet.rowCount);
    
    // // adding / removing sheets
    // const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
    // await newSheet.delete();
})()