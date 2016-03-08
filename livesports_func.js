/**
 * Created by TBANACH on 2016-03-03.
 */


function start(world_wide_web) {
    browser.driver.get(world_wide_web);
    browser.driver.manage().window().maximize();
};

function read_teams_odds2 () {
    var q = require('C:/Users/TBANACH/AppData/Roaming/npm/node_modules/q');
    browser.driver.findElement(by.xpath('//*[@id="fscon"]/ul/li[5]')).click();
    browser.driver.findElement(by.css('.fs-table')).then(function (krowie) {
            krowie.findElements(by.css('.soccer')).then(function (table) {
                var table_objects = [];
                for (i=1;i<table.length;i++) {
                    browser.driver.findElement(by.css('#fs > div > table:nth-child('+i+')')).then(function (nazwa) {
                        var Nazwa_ligi = (nazwa.findElement(by.css('.name')).getText());

                        var godzina_meczu = (nazwa.findElement(by.css('.cell_ad.time')).getInnerHtml());
                        //var nazwa_zespolu_HOME = nazwa.findElement(by.css('.cell_ab.team-home')).getText();
                        // var nazwa_zespolu_AWAY = nazwa.findElement(by.css('.cell_ac.team-away')).getText();
                        Nazwa_ligi.then(function (nameOfLeague) {
                            godzina_meczu.then(function (hourOFmatch) {
                                console.log(nameOfLeague + ' ' + hourOFmatch)
                            });
                        });
                    });
                }
            });
    });
};


function read_teams_odds4 () {
    var q = require('C:/Users/TBANACH/AppData/Roaming/npm/node_modules/q');
    browser.driver.findElement(by.xpath('//*[@id="fscon"]/ul/li[5]')).click();
    browser.driver.findElement(by.css('.fs-table')).then(function (krowie) {
        krowie.findElements(by.css('.soccer')).then(function (table) {
            var table_objects = [];
            for (i=1;i<table.length;i++) {
                browser.driver.findElement(by.css('#fs > div > table:nth-child('+i+')')).then(function (nazwa) {
                    var Nazwa_ligi = (nazwa.findElement(by.css('.name')).getText());
                    nazwa.findElement(by.css('tbody')).then(function (tabelka) {
                        tabelka.findElements(by.css('tr')).then(function (wiersze) {
                            for (j=0;j<wiersze.length;j++){
                                wiersze[j].findElements(by.css('td.cell_ab.team-home')).then(function (values) {
                                    var gino = [];
                                    for (g=0;g<values.length;g++) {
                                        gino.push(values[g].getText());
                                    }
                                        q.all(gino).then(function (value) {
                                            console.log(value);
                                        })
                                })
                                wiersze[j].findElements(by.css('td.cell_ac.team-away')).then(function (values) {
                                    var gino = [];
                                    for (g=0;g<values.length;g++) {
                                        gino.push(values[g].getText());
                                    }
                                    q.all(gino).then(function (value) {
                                        console.log(value);
                                    })
                                })
                                wiersze[j].findElements(by.css('td.cell_ad.time')).then(function (values) {
                                    var gino = [];
                                    for (g=0;g<values.length;g++) {
                                        gino.push(values[g].getText());
                                    }
                                    q.all(gino).then(function (value) {
                                        console.log(value);
                                    })
                                })
                                wiersze[j].findElements(by.css('td.cell_oa')).then(function (values) {
                                    var gino = [];
                                    for (g=0;g<values.length;g++) {
                                        gino.push(values[g].getText());
                                    }
                                    q.all(gino).then(function (value) {
                                        console.log(value);
                                    })
                                })
                                wiersze[j].findElements(by.css('td.cell_ob')).then(function (values) {
                                    var gino = [];
                                    for (g=0;g<values.length;g++) {
                                        gino.push(values[g].getText());
                                    }
                                    q.all(gino).then(function (value) {
                                        console.log(value);
                                    })
                                })
                                wiersze[j].findElements(by.css('td.cell_oc')).then(function (values) {
                                    var gino = [];
                                    for (g=0;g<values.length;g++) {
                                        gino.push(values[g].getText());
                                    }
                                    q.all(gino).then(function (value) {
                                        console.log(value);
                                    })
                                })
                            }
                        });
                    });
                });
            }
        });
    });
};

function DataObj() {
    this.league_name = null;
    this.home = null;
    this.away = null;
};

function read_teams_odds () {
    var q = require('C:/Users/TBANACH/AppData/Roaming/npm/node_modules/q');
    var Data = new Array();
    var obj = new DataObj();
    browser.driver.findElement(by.xpath('//*[@id="fscon"]/ul/li[5]')).click();
    browser.driver.findElement(by.css('.content')).then(function () {
        browser.driver.findElement(by.css('.flashscore')).then(function (step5) {
             step5.findElement(by.css('.fs-table')).then(function (step7) {
                 var dataa = step7.findElements(by.css('.soccer')).then(function (step9) {
                    for (i=0;i>step9.length;i++) {
                        var lll = i;
                        step9[i].findElement(by.css('tbody')).then(function (aaa) {
                            aaa.findElements(by.css('tr')).then(function (aaa2) {
                                browser.driver.findElement(by.css('#fs > div.odds-content > table:nth-child('+ lll +') > thead > tr > td.head_ab.left.project-bonus-border > span.country.left > span.name')).getText().then(function (aaa) {
                                    console.log(String(aaa))
                                })
                                for(z=0;z<aaa2.length;z++){
                                    aaa2[z].findElement(by.css('.cell_ad.time')).getText().then(function (aaa3) {
                                        return aaa3
                                    })
                                }
                        })
                        })
                    }
                })
            })
        })
    })
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