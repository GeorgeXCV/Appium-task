const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();

class SideMenuPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../screens/${platform}/sidemenu.screen.js`);
    }

    cickGetUltimateAnswerButton() {
        ActionHelper.waitForElement(this.getObjectLocator().getAnswerButton);
        ActionHelper.click(this.getObjectLocator().getAnswerButton)
    }

    verifyAnswer(answer) {
        ActionHelper.waitForElement(this.getObjectLocator().answer);
        ActionHelper.getText(this.getObjectLocator().answer).should.equal(answer);
    }
}

module.exports = SideMenuPage;