Feature: GitHubLogin feature
Background: 

Given The URL of Git hub

@Regression
Scenario Outline:Login Scenario
When user enters <username> as username
And user enters <password> as password
And user clicks on SignIn
Then user navigates to <result>

Examples:
|username|password|result|
|ShilpaKumareshan|Testing123|Git hub|
|ABC|XYZ|Sign in GitHub|
