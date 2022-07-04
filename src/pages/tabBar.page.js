const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();

class TabBarPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../screens/${platform}/tabBar.screen.js`);
    }

    verifyDashboardTabLoaded() {
        ActionHelper.waitForElement(this.getObjectLocator().dashboardTab);
        ActionHelper.getText(this.getObjectLocator().dashboardTab).should.equal('Dashboard');
    }

    verifySettingsTabLoaded() {
        ActionHelper.waitForElement(this.getObjectLocator().settingsTab);
        ActionHelper.getText(this.getObjectLocator().settingsTab).should.equal('Settings');
    }
}

module.exports = TabBarPage;