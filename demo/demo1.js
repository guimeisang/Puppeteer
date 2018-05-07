const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

// 定义一个延时的timeout 函数
let timeout = function(delay){
    return new Promise((resolve, reject) => {
        serTimeout(() =>{
            try{
                resolve(1)
            } catch(e){
                reject(0)
            }
        }, delay);
    })
};

(async () =>{
    var browser = await puppeteer.launch({
        headless: false
    });
    var page = await browser.newPage();
    
    await page.emulate(iPhone);
})()



