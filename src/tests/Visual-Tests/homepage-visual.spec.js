// Test script to demonstrate a visual test
const { percySnapshot } = require('@percy/webdriverio')

// Test suite
describe('Demo Site - Homepage - Visual UI tests', () => {
    // Before each test, do the following
    beforeEach(() => {
        browser.maximizeWindow();
        browser.url('https://nifty-bell-cda939.netlify.com/');
    });
    // Test case
    it('should load the homepage and take a screenshot', async () => {
        await percySnapshot(browser, 'Home page screenshot', {widths: [1200, 992]});
    });
});
