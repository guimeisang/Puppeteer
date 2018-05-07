var puppeteer = require('puppeteer');

(async () =>{
    var browser = await puppeteer.launch({
        headless: false
    });
    var page = await browser.newPage();

    await page.setViewport({
        width: 1200,
        height: 800  
    })
    await page.goto('https://www.jd.com');
    await page.screenshot({
        path: 'pic/jd.png',
        fullPage: true
    });
    // browser.close();
})()