const {Given, When} = require('@cucumber/cucumber');

const HomePage = require('../pages/home.page');
const homePage = new HomePage();

// This test is designed to fail to showcase screenshot failure reporting
Given(/^I open the app$/, () => {
    homePage.launchApp();
});

When(/^The test fails$/, () => {
    throw('FAIL')
});