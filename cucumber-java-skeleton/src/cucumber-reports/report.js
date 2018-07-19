$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("skeleton/abc.feature");
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
        "Git hub"
      ],
      "line": 15,
      "id": "githublogin-feature;login-scenario;;2"
    },
    {
      "cells": [
        "ABC",
        "XYZ",
        "Sign in GitHub"
      ],
      "line": 16,
      "id": "githublogin-feature;login-scenario;;3"
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
  "duration": 9139526799,
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
  "name": "user navigates to Git hub",
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
  "duration": 160135229,
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
  "duration": 92982771,
  "status": "passed"
});
formatter.match({
  "location": "ABC.user_click_on_SignIn()"
});
formatter.result({
  "duration": 1674744716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Git hub",
      "offset": 18
    }
  ],
  "location": "ABC.user_navigates_to_GitHub(String)"
});
formatter.result({
  "duration": 19649605,
  "status": "passed"
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
  "duration": 10373473612,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Scenario",
  "description": "",
  "id": "githublogin-feature;login-scenario;;3",
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
  "duration": 88031716,
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
  "duration": 87219893,
  "status": "passed"
});
formatter.match({
  "location": "ABC.user_click_on_SignIn()"
});
formatter.result({
  "duration": 857987741,
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
  "duration": 16504291,
  "status": "passed"
});
});