Feature: Side Menu
    @androidApp
    Scenario: Side menu button displays alert with the correct answer
        Given I launch the app and open the side menu
        When  I press the button
        Then  An alert is displayed with the correct answer