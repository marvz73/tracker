<?php

//In Canvas via SignedRequest/POST, the authentication should be passed via the signed_request header
//You can also use OAuth/GET based flows

$signedRequest = isset($_REQUEST['signed_request']) ? $_REQUEST['signed_request'] : '' ;

$consumer_secret = 'YOUR SECRET KEY HERE';

if ($signedRequest == null || $consumer_secret == null) {
   die("Error: Signed Request or Consumer Secret not found");
}



//decode the signedRequest
$sep = strpos($signedRequest, '.');
$encodedSig = substr($signedRequest, 0, $sep);
$encodedEnv = substr($signedRequest, $sep + 1);
$calcedSig = base64_encode(hash_hmac("sha256", $encodedEnv, $consumer_secret, true));

if ($calcedSig != $encodedSig) 
{
   echo "Error: Signed Request Failed.  Is the app in Canvas?";
}

//decode the signed request object
$sr = base64_decode($encodedEnv);

?>
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

<div ng-controller="InitCtrl" style="height: 100%">
  <ng-map style="height: 100%;width: 100%;display: block">
  <marker 

      title="Click"
      position="[{{map.getCenter().lat()}}, {{map.getCenter().lng()}}]" 
      on-click="showDetails()"

    ></marker>    <marker 

      title="Click"
      position="[{{map.getCenter().lat()}}, {{map.getCenter().lng()}}]" 
      on-click="showDetails()"

    ></marker>

    <marker 

      title="Click"
      position="[{{map.getCenter().lat()}}, {{map.getCenter().lng()}}]" 
      on-click="showDetails()"

    ></marker>


  </ng-map>
</div>


    <!-- LIBRARY -->
    <script type="text/javascript" src="js/jquery-1.5.1.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
    <script type="text/javascript" src="js/angular.min.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyARTGgrMvXIZ_IhLXOpc17mVSQCbiPdSls&sensor=false&extension=.js"></script>
          
    
    <!--socket.io-->
    <script type="text/javascript" src="https://node.ruaven.com/socket.io/socket.io.js"></script>
    <script type="text/javascript">
        var sr = JSON.parse('<?php echo $sr ?>');
        var  orgId = sr.context.environment.parameters.orginationId;
        var orgLength = orgId.length - 3;
        var socket = io.connect('https://node.ruaven.com/' + orgId.substring(orgLength, 0));
    </script>
    <script type="text/javascript" src="lib/socket.js"></script>

    <!-- ADDON'S -->
    <script type="text/javascript" src="js/angular-ui-router.js"></script>
    <script type="text/javascript" src="js/ngMap.js"></script>

    <!--FORCE CANVAS-->
    <script type="text/javascript" src="lib/canvas/canvas.js"></script>
    <script type="text/javascript" src="lib/canvas/cookies.js"></script>
    <script type="text/javascript" src="lib/canvas/oauth.js"></script>
    <script type="text/javascript" src="lib/canvas/xd.js"></script>
    <script type="text/javascript" src="lib/canvas/client.js"></script>
    <script type="text/javascript" src="lib/canvas/json2.js"></script>
    <script type="text/javascript" src="lib/canvas/icanhaz.js"></script>
    
    <!-- APPLICATION -->
    <script type="text/javascript" src="js/app.js"></script>

    <script>
        $(document).ready(function() {
            console.debug('::', sr);
        });
    </script>

  </body>
</html>
