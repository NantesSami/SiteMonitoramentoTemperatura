(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDfzaE9DosRiSvscUF2VNb47w3YP2xMauo",
    authDomain: "scmt-b8c6f.firebaseapp.com",
    databaseURL: "https://scmt-b8c6f-default-rtdb.firebaseio.com",
    storageBucket: "scmt-b8c6f.appspot.com",
      };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



const dbRefObject = firebase.database().ref().child('Sensor').child('Temperatura').child('Medida');

  dbRefObject.on('value', snap => {
  var medida = snap.val();

  document.getElementById("medida").innerHTML = medida;
  })

  const dbRefObject2 = firebase.database().ref().child('Sensor').child('Temperatura').child('Min');

    dbRefObject2.on('value', snap => {
    var min = snap.val();

    document.getElementById("minima").innerHTML = min;
    })

    const dbRefObject3 = firebase.database().ref().child('Sensor').child('Temperatura').child('Max');

      dbRefObject3.on('value', snap => {
      var max = snap.val();

      document.getElementById("maxima").innerHTML = max;
      })

  }());
