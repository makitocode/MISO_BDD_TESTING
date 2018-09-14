#Taller 5. Punto 1.5 Creación de Usuarios.

Feature: SignUp into losestudiantes

##Method to create new User
Scenario Outline: SignUp failed with variuos inputs (dataSets)

  Given I go to losestudiantes home screen
    When I open the login screen
    And I create user with <name> and <lastname> and <email>
    And I try to signUp
    ##Then I expect to see error
    Then I expect to see <error>

    Examples:
      | email                           | name     | lastname             | error             |
      |                                 |          |                      | Ingresa tu correo |
      ##| perez.pepito@uniandes.edu.co    | pepito   | perez                