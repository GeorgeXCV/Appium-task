class SideMenu {
    constructor() {
        this.getAnswerButton = '//*[@text="Get the ultimate answer"]';
        this.answer = '//*[@resource-id="android:id/alertTitle"]';
    }
}

module.exports = new SideMenu();