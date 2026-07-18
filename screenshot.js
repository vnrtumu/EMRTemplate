import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1470, height: 835 });
  await page.goto('http://localhost:5173/landing', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'landing_screenshot.png' });
  await browser.close();
})();
