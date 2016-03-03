/**
 * Created by TBANACH on 2016-03-03.
 */


function start(world_wide_web) {
    browser.driver.get(world_wide_web);
    browser.driver.manage().window().maximize();
};

function read_teams_odds () {
    var q = require('C:/Users/TBANACH/AppData/Roaming/npm/node_modules/q');
    browser.driver.findElement(by.xpath('//*[@id="fscon"]/ul/li[5]')).click();
    browser.driver.findElement(by.css('.fs-table')).then(function (krowie) {
        browser.driver.findElement(by.css('.odds-content')).then(function (tablica) {
            tablica.findElements(by.css('.soccer.odds')).then(function (table) {
                var table_objects = [];
                for (i=1;i<table.length;i++) {
                    browser.driver.findElement(by.css('#fs > div.odds-content > table:nth-child('+i+')')).getText().then(function (nazwa) {
                        //var Nazwa_ligi = nazwa.findElement(by.css('.name')).getText();
                        //var godzina_meczu = nazwa.findElement(by.css('.cell_ad.time')).getText();
                        //var nazwa_zespolu_HOME = nazwa.findElement(by.css('.cell_ab.team-home')).getText();
                        //var nazwa_zespolu_AWAY = nazwa.findElement(by.css('.cell_ac.team-away')).getText();
                        console.log(nazwa);
                    });
                }
            });
        });
    });
};

function read_teams_scores () {
    browser.driver.findElement(by.css('.fs-table')).getInnerHtml().then(function (krowie) {
        console.log(krowie);
    });
};

function write_scores_to_database () {
    browser.driver.findElement(by.css('.fs-table')).getInnerHtml().then(function (krowie) {
        console.log(krowie);
    });
};

function write_odds_to_database () {
    browser.driver.findElement(by.css('.fs-table')).getInnerHtml().then(function (krowie) {
        console.log(krowie);
    });
};

module.exports = {
    wejscie_na_strone: start,
    czytanie_druzyn: read_teams_odds
};