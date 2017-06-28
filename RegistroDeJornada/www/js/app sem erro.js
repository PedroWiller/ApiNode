angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $ionicPopup) {
  
  //Bang relacionado ao login e seu MODAL
    //-------------------------------------------------------------------------------------------------------------
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    HttpService.login($scope.login)
   .then(function(response) {
       $scope.login = response;       
    });
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

   $scope.showAlert = function() {
  
      var alertPopup = $ionicPopup.alert({
         title: 'Redefinir senha!',
         template: 'Instrução enviada por Email'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };

   $scope.showAlertSincronizar = function() {
  
      var alertPopup = $ionicPopup.alert({
         title: 'Sincronização',
         template: 'Sincronização concluida!'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };

   $scope.showAlertChecklist = function() {
  
      var alertPopup = $ionicPopup.alert({
         title: 'Check-List',
         template: 'Inserida com Sucesso!'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };

   $scope.showAlertRelatorio = function() {
  
      var alertPopup = $ionicPopup.alert({
         title: 'Fim de Jornada',
         template: 'Jornada concluida com sucesso!'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };

   $scope.showAlertRefeicao = function() {
  
      var alertPopup = $ionicPopup.alert({
         title: 'Tempo de Refeição Restante',
         template: '59min 55seg'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };

   $scope.showAlertDescanso = function() {
  
      var alertPopup = $ionicPopup.alert({
         title: 'Tempo de Descanso Restante',
         template: '14min 18seg'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };

   $scope.showAlertPernoite = function() {
  
      var alertPopup = $ionicPopup.alert({
         title: 'Tempo de Pernoite Restante',
         template: '07h 55min 50seg'
      });

      alertPopup.then(function(res) {
         // Custom functionality....
      });
   };

   $scope.CalculaDistancia = function(){

    console.log("chegou aqui " + $scope.txtOrigem);

     $('#litResultado').html('Aguarde...');
                //Instanciar o DistanceMatrixService
                var service = new google.maps.DistanceMatrixService();
                //executar o DistanceMatrixService
                service.getDistanceMatrix(
                  {
                      //Origem
                      origins: [$scope.txtOrigem],
                      //Destino
                      destinations: [$scope.txtDestino],
                      //Modo (DRIVING | WALKING | BICYCLING)
                      travelMode: google.maps.TravelMode.DRIVING,
                      //Sistema de medida (METRIC | IMPERIAL)
                      unitSystem: google.maps.UnitSystem.METRIC
                      //Vai chamar o callback
                  }, callback);

  }
            //Tratar o retorno do DistanceMatrixService
            function callback(response, status) {

               console.log(" aqui tb");
                //Verificar o Status
                if (status != google.maps.DistanceMatrixStatus.OK)
                    //Se o status não for "OK"
                    $('#litResultado').html(status);
                else {
                    //Se o status for OK
                    //Endereço de origem = response.originAddresses
                    //Endereço de destino = response.destinationAddresses
                    //Distância = response.rows[0].elements[0].distance.text
                    //Duração = response.rows[0].elements[0].duration.text
                    $('#litResultado').html("<strong>Origem</strong>: " + response.originAddresses +
                        "<br /><strong>Destino:</strong> " + response.destinationAddresses +
                        "<br /><strong>Distância</strong>: " + response.rows[0].elements[0].distance.text +
                        " <br /><strong>Duração</strong>: " + response.rows[0].elements[0].duration.text
                        );
                    //Atualizar o mapa
                    $("#map").attr("src", "https://maps.google.com/maps?saddr=" + response.originAddresses + "&daddr=" + response.destinationAddresses + "&output=embed");
                }
            }

            
});
