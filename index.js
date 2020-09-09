require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet');

 
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(process.env.SHEET_ID_FROM_URL);
 
(async function() {




    await doc.updateProperties({ title: 'renamed secure' });
    
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    await sheet.addRows([
        { title: 'Software Engineer', location: 'FL' },
        { title: 'Software Developer', location: 'LA' },
    ]);
    // console.log(sheet.title);
    // console.log(sheet.rowCount);
    
    // // adding / removing sheets
    // const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
    // await newSheet.delete();
})()