Feature: Opening the help screen

  Scenario: As a user I want to be able to open the help screen from the side menu the first time I open the app
    Given I press "Paraderos"               
    #button to remove the splash screen
    When I swipe left
    #to open te menu
    And I press "Ayuda"
    Then I should see "Calcular ruta con horario"


  Scenario: Ver los puntos de recarga
    Given I wait to see "Inicio"
    And I click on screen 80% from the left and 90% from the top
    When I press "RECARGA"
    Then I should see ".Naranj@"


 Scenario: Como usuario deseo ver rutas complementarias
        Given I press "Rutas"
        When I press "COMPLEMENTARIO"
        Then I should see "Colina"


  Scenario: Ver los puntos de personalización
    Given I wait to see "Inicio"
    And I click on screen 80% from the left and 90% from the top
    When I press "PERSONALIZACIÓN"
    Then I should see "Cade Candelaria"
