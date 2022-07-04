Feature: Homepage
    @androidApp
    Scenario: Dashboard and Settings tab load in Android app
        Given I launch the app
        When The app has finished loading
        Then I should see the Settings and Dashboard tabs