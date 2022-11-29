Feature: Check and Uncheck the checkboxes

  Scenario Outline: As a user, I want to check and uncheck the checkboxes
    Given I am on the "checkboxes" page
    When I click on a "<checkbox>"
    Then I should be able to see whether it is "<state>"

    Examples: 
      | checkbox  | state   |
      | unchecked | checked |
