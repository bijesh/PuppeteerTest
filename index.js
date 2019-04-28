const puppeteer = require('puppeteer');
const assert = require('assert');

async function GetScreenShot() {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 677 })
    await page.goto('http://localhost');
    await page.screenshot({ path: 'screenshots/Page'+Math.random()+'.png' });
    
    browser.close();
  }
  
  async function CheckTheHeadingIs()
  {
    const options = {
        path: 'screenshots/Page'+Math.random()+'.png' ,
        fullPage: false,
        clip: {
          x: 0,
          y: 240,
          width: 1000,
          height: 100
        }
      }
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 677 });      
    await page.goto('https://localhost');
    const headingElement = "body > div.page-section > div > div > h2";
    let headingText = await page.evaluate((sel) => {
        let element = document.querySelector(sel);
        return element? element.innerHTML: null;
      }, headingElement);
      await page.screenshot(options);
      browser.close();
    console.log("Heading is " + headingText);
    assert.equal(headingText,"Hey! Looks like you've taken a break.",);
  }

  CheckTheHeadingIs();