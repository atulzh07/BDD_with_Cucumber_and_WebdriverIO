Feature: Verify whether respective details are displayed on hovering

  Scenario Outline: As a user, I want to hover over an element so I can view the details
    Given I am on the "hovers" page
    When I hover over a "<div>"
    Then I should be able to see "<details>"

    Examples: 
      | div | details     |
      |   3 | name: user1 |
