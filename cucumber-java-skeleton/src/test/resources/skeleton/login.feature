Feature: Login Feature

Background:
Given The URL of Git hub

Scenario: Valid Github User
When User enters ShilpaKumareshan as username
And User enters Testing123 as password
Then User clicks on Submit for Git hub page


Scenario: InValid Github User
When User enters ABCD as username
And User enters Testing123 as password
Then User clicks on Submit for Sign in for Git Hub Page