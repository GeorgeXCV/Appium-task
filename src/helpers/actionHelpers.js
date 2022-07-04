class ActionHelper {
    
    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }

    static launchApp() {
        driver.launchApp();
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
        $(locator).click();
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

    static getText(locator) {
        return $(locator).getText();
    }

    static swipeRight(locator = null) {
        browser.swipe(locator, 500);
    }

    static scrollIntoView(locator) {
        $(locator).scrollIntoView()
    }

    static swipeTo(fromX, FromY, toX, toY) {
        driver.touchPerform([
            { action: 'press', options: { x: fromX, y: FromY }},
            { action: 'wait', options: { ms: 500 }},
            { action: 'moveTo', options: { x: toX, y: toY }},
            { action: 'release' }
        ]);
    }
}

module.exports = ActionHelper;