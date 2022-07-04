const {Given, When, Then} = require('@cucumber/cucumber');

const HomePage = require('../pages/home.page');
const SideMenuPage = require('../pages/sideMenu.page');

const homePage = new HomePage();
const sideMenuPage = new SideMenuPage()

Given(/^I launch the app and open the side menu$/, () => {
    homePage.launchApp();
    homePage.openSideMenu();
});

When(/^I press the button$/, () => {
    sideMenuPage.cickGetUltimateAnswerButton()
});

Then(/^An alert is displayed with the correct answer$/, () => {
    sideMenuPage.verifyAnswer('42')
});