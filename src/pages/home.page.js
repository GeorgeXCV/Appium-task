const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();

class HomePage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../screens/${platform}/home.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(2);
    }

    openSideMenu() {
        ActionHelper.swipeTo(5, 300, 500, 300)
        ActionHelper.waitForElement(this.getObjectLocator().sideMenuTitle);
    }
}

module.exports = HomePage;