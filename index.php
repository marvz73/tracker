 <!DOCTYPE html>
  <html>
    <head>
      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      
      <!--Import Google Icon Font-->
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <style type="text/css">.cloak{display: none;}</style>
    </head>

    <body ng-app="tracker">
    

    <div id="asset-information" style="{{isClosing || 'margin-left:-450px;'}}" ng-cloak="cloak">

      <div id="asset-information-container" class="row"> 
        <div class="col s2" id="asset-menu">
          <a ui-sref-active="icon-active" ui-sref="location" class=""><i class="icons icon-location"></i></a>
          <a ui-sref-active="icon-active" ui-sref="speed" ><i class="icons icon-gauge"></i></a>
          <a ui-sref-active="icon-active" ui-sref="fuel"><i class="icons icon-fuel"></i></a>
          <a ui-sref-active="icon-active" ui-sref="notification"><i class="icons icon-notification"></i></a>
        </div>
        <div class="col s8" id="asset-details">


        <!-- BOF SIDEBAR DETAILS HERE -->

        <div ui-view class="result-list"></div>

        <!-- EOF SIDEBAR DETAILS HERE -->


        </div>
        <div class="col s2" id="main-menu">
          <a ui-sref-active="icon-active" ui-sref="search" ><i class="icons icon-search"></i></a>
          <a ui-sref-active="icon-active" ui-sref="globalNotification" ><i class="icons icon-notification"></i></a>
          <a ui-sref-active="icon-active" ui-sref="routes" ><i class="icons icon-routes"></i></a>
          <a ui-sref-active="icon-active" ui-sref="zones" ><i class="icons icon-zones"></i></a>
          <a ui-sref-active="icon-active" ui-sref="filter" ><i class="icons icon-filter"></i></a>
        </div>
      </div>

    </div>

<div ng-controller="HomeCtrl as vm" style="height: 100%">
<ng-map style="height: 100%;width: 100%;display: block">


  <marker 

    title="Click"
    position="[{{map.getCenter().lat()}}, {{map.getCenter().lng()}}]" 
    on-click="showDetails()"

  ></marker>


</ng-map>
</div>


      <!-- LIBRARY -->
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
      <script type="text/javascript" src="js/angular.min.js"></script>
      <script src="http://maps.google.com/maps/api/js"></script>
      
      <!-- ADDON'S -->
      <script type="text/javascript" src="js/angular-ui-router.js"></script>
      <script type="text/javascript" src="js/ngMap.js"></script>

      <!-- APPLICATION -->
      <script type="text/javascript" src="js/app.js"></script>


    </body>
  </html>