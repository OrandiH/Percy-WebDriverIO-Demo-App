import { expect } from 'chai';

describe('Demo Site - Homepage - Functional UI tests', () => {
    beforeEach(() => {
        browser.maximizeWindow();
    });

    it('should load the home page and assert that the main container is present', () => {
        const mainContainer = $('.main-container');
        expect(mainContainer.isDisplayed()).to.be.equal(true);
    });

    it('should load the home page and assert that the Youtube iframe is present', () => {
        const YTIframe = $('')
    });

});
