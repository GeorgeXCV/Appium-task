const {Given, When, Then} = require('@cucumber/cucumber');

const HomePage = require('../pages/home.page');
const InstructionsPage = require('../pages/instructions.page');
const TabBarPage = require('../pages/tabBar.page');

const homePage = new HomePage();
const instructionsPage = new InstructionsPage();
const tabBarPage = new TabBarPage();

Given(/^I launch the app$/, () => {
    homePage.launchApp();
});

When(/^The app has finished loading$/, () => {
    instructionsPage.verifyPageTitle()
});

Then(/^I should see the Settings and Dashboard tabs$/, () => {
    tabBarPage.verifyDashboardTabLoaded()
    tabBarPage.verifySettingsTabLoaded()
});