$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/GitHubLogin.feature");
formatter.feature({
  "line": 1,
  "name": "GitHubLogin feature",
  "description": "",
  "id": "githublogin-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login Scenario",
  "description": "",
  "id": "githublogin-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \u003cusername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user navigates to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "githublogin-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 14,
      "id": "githublogin-feature;login-scenario;;1"
    },
    {
      "cells": [
        "ABC",
        "XYZ",
        "Sign in GitHub"
      ],
      "line": 15,
      "id": "githublogin-feature;login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The URL of Git hub",
  "keyword": "Given "
});
formatter.match({
  "location": "ABC.the_URL_of_Git_hub()"
});
formatter.result({
  "duration": 8436109729,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Scenario",
  "description": "",
  "id": "githublogin-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters ABC as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters XYZ as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user navigates to Sign in GitHub",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 12
    }
  ],
  "location": "ABC.user_enters_ShilpaKumareshan_as_username(String)"
});
formatter.result({
  "duration": 115987930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XYZ",
      "offset": 12
    }
  ],
  "location": "ABC.user_enters_Testing123_as_password(String)"
});
formatter.result({
  "duration": 89104433,
  "status": "passed"
});
formatter.match({
  "location": "ABC.user_click_on_SignIn()"
});
formatter.result({
  "duration": 880330066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in GitHub",
      "offset": 18
    }
  ],
  "location": "ABC.user_navigates_to_GitHub(String)"
});
formatter.result({
  "duration": 28792868,
  "status": "passed"
});
formatter.uri("skeleton/abc.feature");
formatter.feature({
  "line": 1,
  "name": "GitHubLogin feature",
  "description": "",
  "id": "githublogin-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login Scenario",
  "description": "",
  "id": "githublogin-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \u003cusername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters \u003cpassword\u003e as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user navigates to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "githublogin-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 14,
      "id": "githublogin-feature;login-scenario;;1"
    },
    {
      "cells": [
        "ShilpaKumareshan",
        "Testing123",
        "Sign in"
      ],
      "line": 15,
      "id": "githublogin-feature;login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The URL of Git hub",
  "keyword": "Given "
});
formatter.match({
  "location": "ABC.the_URL_of_Git_hub()"
});
formatter.result({
  "duration": 7199834722,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Scenario",
  "description": "",
  "id": "githublogin-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters ShilpaKumareshan as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters Testing123 as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on SignIn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user navigates to Sign in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ShilpaKumareshan",
      "offset": 12
    }
  ],
  "location": "ABC.user_enters_ShilpaKumareshan_as_username(String)"
});
formatter.result({
  "duration": 179269996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing123",
      "offset": 12
    }
  ],
  "location": "ABC.user_enters_Testing123_as_password(String)"
});
formatter.result({
  "duration": 145673405,
  "status": "passed"
});
formatter.match({
  "location": "ABC.user_click_on_SignIn()"
});
formatter.result({
  "duration": 1687137917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 18
    }
  ],
  "location": "ABC.user_navigates_to_GitHub(String)"
});
formatter.result({
  "duration": 14544926,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat skeleton.ABC.user_navigates_to_GitHub(ABC.java:38)\r\n\tat ✽.Then user navigates to Sign in(skeleton/abc.feature:11)\r\n",
  "status": "failed"
});
});