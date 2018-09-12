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
#     Scenario: Successfully Login to losestudiantes.co
#         Given I go to the website "https://losestudiantes.co"
#         And I get element with class "botonCerrar"
# #--
#         Given I go to the website "https://pymeadmincorp.com/app/#/login"
#         And I get element with class "sign-in-button"
#         And I click
#         And I get element with class "botonIngresar"
#         And I click
#         And I get element with name "nombre"
#         And I send text "Servio"
#         And I get element with name "apellido"
#         And I send text "Pantoja"
#         When I get element with class "logInButton"
#         And I click
#         Then show error message with content "Ocurrió un error activando tu cuenta"
