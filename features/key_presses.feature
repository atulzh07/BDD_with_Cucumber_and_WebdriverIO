Feature: Identify which key is pressed on the keyboard

  Scenario Outline: As a user, I can know which key has been pressed on the keyboard
    Given I am on the "key_presses" page
    When I type a "<key>"
    Then I should see a "<message>"

    Examples: 
      | key | message        |
      | B   | You entered: B |
      | A   | You entered: A |
