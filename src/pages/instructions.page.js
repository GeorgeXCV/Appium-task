const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();

class InstructionsPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../screens/${platform}/instructions.screen.js`);
    }

    verifyPageTitle() {
        ActionHelper.waitForElement(this.getObjectLocator().pageTitle);
        // Will be required when no longer using text as selector
        ActionHelper.getText(this.getObjectLocator().pageTitle).should.equal('Testing instructions');
    }
}

module.exports = InstructionsPage;