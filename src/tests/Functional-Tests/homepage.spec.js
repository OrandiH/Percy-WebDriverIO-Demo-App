// Test script to demonstrate a functional test
import { expect } from 'chai';

// Test suite
// driver = webdriver.chrome('C:\Users\sundarrajm\Documents\GitHub\Percy-WebDriverIO-Demo-App\node_modules\chromedriver\lib\chromedriver\chromedriver.exe')
describe('Demo Site - Homepage - Functional UI tests', () => {
    // Before each test, do the following
    beforeEach(() => {
        browser.maximizeWindow();
        browser.url('https://nifty-bell-cda940.netlify.com/');
    //    browser.url('https://nifty-bell-cda939.netlify.com/');
    });

    // Test case
    it('should load the home page and assert that the main container is present', () => {
        const mainContainer = $('.main-container');
        expect(mainContainer.isDisplayed()).to.be.equal(true);
    });

    it('should load the home page and assert that the Youtube iframe is present', () => {
        const YTIframe = $('#youTubeVideoFrame');
        const videoPlayer = $('body > #player');
        browser.switchToFrame(YTIframe);
        browser.pause(2000);
        expect(videoPlayer.isDisplayed()).to.be.equal(true);
    });

});
