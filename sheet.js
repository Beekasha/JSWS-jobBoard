const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
    constructor() {
        this.doc = new GoogleSpreadsheet(process.env.SHEET_ID_FROM_URL);
    }
    async load() {
        await this.doc.useServiceAccountAuth(require('./credentials.json'));
        await this.doc.loadInfo(); // loads document properties and worksheets
    }
    async addRows(rows) {
        const sheet = this.doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
        await sheet.addRows(rows);
    }
}

