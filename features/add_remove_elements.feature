Feature: Verify whether elements can be added and deleted

  Scenario: As a user I want to add and remove elements
    Given I am on the "add_remove_elements/" page
    When I click on "<add_element>"
    Then I should be able to click on a "<delete_element>" button

    Examples: 
      | add_element | delete_element |
      | add         | delete         |
