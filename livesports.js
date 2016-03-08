/**
 * Created by TBANACH on 2016-03-03.
 */
var ds = require('./livesports_val.json');
var func = require('./livesports_func.js');
describe('Scrapper kursow', function() {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;
    });
    it('Enter website', function () {
        func.wejscie_na_strone(ds.www_livesports);
    });
    it('read data', function (){
        func.czytanie_druzyn();
    });
});