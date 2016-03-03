/**
 * Created by TBANACH on 2016-03-03.
 */
var livesports_po = function () {
};

livesports_po.prototype = Object.create({}, {
    lp1_product_button: { get: function () { return browser.driver.findElement(by.xpath('//*[@id="nav"]/li[1]/a'))}},
    lp1_whats_inside: { get: function () { return browser.driver.findElement(by.xpath('//*[@id="main-navigation"]/li[5]/a/span[2]'))}},
    lp1_view_charts: { get: function () { return browser.driver.findElement(by.xpath('/html/body/div[1]/section[2]/div/div/div/div/div/div/p[2]/a'))}},
    lp1_2d_3d_charts: { get: function () { return browser.driver.findElement(by.xpath('/html/body/div[1]/div/div/div[2]/div/section/div/div/div[3]/a/img'))}},
    lp1_3d_chart: { get: function () { return browser.driver.findElement(by.xpath('//*[@id="pie3d_5"]/img'))}}
});

module.exports = livesports_po;