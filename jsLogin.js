(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
  apiKey: "AIzaSyBLzAvh6jXPS6dVeM4Ep9CDRZEOgXD-4kk",
  authDomain: "injetora-haitan-supervisorio.firebaseapp.com",
  databaseURL: "https://injetora-haitan-supervisorio.firebaseio.com",
  projectId: "injetora-haitan-supervisorio",
  storageBucket: "injetora-haitan-supervisorio.appspot.com",
  messagingSenderId: "609448112398",
  appId: "1:609448112398:web:7a755d4c39da159880a75f",
  measurementId: "G-H8KBQ0S272"
 };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





}());
function Cadastrar(){

  var email= document.getElementById('email').value;
  var password= document.getElementById('pass').value;
  alert(email);

       firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      alert("Usuário criado com sucesso!")
      window.location.replace('paginaInicial.html');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      firebase.auth().signOut().then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
    });
}

function Entrar(){
  var email= document.getElementById('email').value;
  var password= document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      window.location.replace('paginaInicial.html');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      firebase.auth().signOut().then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
    });
}
