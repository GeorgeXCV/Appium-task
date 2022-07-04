class TabBar{
    constructor(){
        this.dashboardTab = '//*[@text="Dashboard"]';
        this.settingsTab =  '//*[@text="Settings"]';
    }
}

module.exports = new TabBar();