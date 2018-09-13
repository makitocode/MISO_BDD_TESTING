#Complete siguiendo las instrucciones del taller.

Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

# Scenario: Login failed
#     Given I go to losestudiantes home screen
#     When I open the login screen
#     And I fill a wrong email and password
#     And I try to login
#     Then I expect to not be able to login

Scenario Outline: Login failed with wrong inputs (dataSets)

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email            | password | error                    |
      |                  |          | Ingresa una contraseña   |
      | miso@gmail.com   |    1234  | Upss! El correo y        |

#Login exitoso a site losestudiantes.co
#user: perez.pepito@uniandes.edu.co
#pass: password1234
Scenario: Successfully Login to losestudiantes.co
    Given I go to losestudiantes home screen
        When I open the login screen
        And I type perez.pepito@uniandes.edu.co and password1234
        And I try to login
        Then I expect to see button profile
