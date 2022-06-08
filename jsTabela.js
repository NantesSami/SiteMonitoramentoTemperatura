function listarmes() {
  var valor_ano_pesquisa = document.getElementById('inputGroupSelect01').value;
  var var_mes=document.getElementById("inputGroupSelect02");

  var dados= "";
  var db=firebase.database().ref().child('Injetora1').child('realtime').child(valor_ano_pesquisa);
  db.on("child_added", function(snapshot){
    var adicionado= snapshot.key;
    dados="<option>"+adicionado+"</option>"+dados;
    var_mes.innerHTML=" <option selected=\"true\" disabled=\"disabled\">  mês </option>"+dados;
  })
}

function listardia(){

  var valor_ano_pesquisa = document.getElementById('inputGroupSelect01').value;
  var valor_mes_pesquisa = document.getElementById('inputGroupSelect02').value;
  var var_dia=document.getElementById("inputGroupSelect03");

  var dados= "";
  var db=firebase.database().ref().child('Injetora1').child('realtime').child(valor_ano_pesquisa).child(valor_mes_pesquisa);
  db.on("child_added", function(snapshot){
    var adicionado= snapshot.key;
    dados="<option>"+adicionado+"</option>"+dados;
    var_dia.innerHTML=" <option selected=\"true\" disabled=\"disabled\"> dia </option>"+dados;
  })
}
function TabelaMes(){
  var valor_ano_Tabela = document.getElementById('AnoTabela').value;
  var var_mes_Tabela=document.getElementById("MesTabela");

  var dadosMes= "";
  var db=firebase.database().ref().child('Injetora1').child('realtime').child(valor_ano_Tabela);
  db.on("child_added", function(snapshot){
    var adicionado= snapshot.key;
    dadosMes="<option>"+adicionado+"</option>"+dadosMes;
    var_mes_Tabela.innerHTML=" <option selected=\"true\" disabled=\"disabled\">Selecione o mês.. </option>"+dadosMes;
  })
}
function ExibirTabela(){
  document.getElementById('tabela').innerHTML = tabela;
  var ano=document.getElementById('AnoTabela').value;
  var mes=document.getElementById('MesTabela').value;

  var dados= "";
  var db=firebase.database().ref().child('Injetora1').child('realtime').child(ano).child(mes);
  db.on("child_added", function(snapshot){
    var diaAdicionado= snapshot.key;
    var cicloAdicionado=snapshot.val();
    var array_string = cicloAdicionado.split(",");
    var numero_ciclos = array_string[0];

    var numero_paradas = null;
    var db_path=firebase.database().ref().child('Injetora1').child('N_parada').child(ano).child(mes).child(diaAdicionado);
    db_path.on('value', snap => {
      var value = snap.val();
        numero_paradas = value;
        if (numero_paradas == null){
          numero_paradas = 0;
        }
        dados+="<tr><td>"+diaAdicionado+"</td><td>"+numero_ciclos+"</td><td>"+numero_paradas+"</td></tr>";
        tabela.innerHTML=" <tr> <th> Dia </th> <th> Ciclos Diarios</th> <th> Paradas </th> </tr>"+dados;
    })
  })

}
function Pesquisar(){
  var primeiralinhadata = document.getElementById('primeiralinha');
  var segundalinhaciclos = document.getElementById('segundalinha');
  var terceiralinha= document.getElementById('terceiralinha');
  var ano = document.getElementById('inputGroupSelect01').value;
  var mes = document.getElementById('inputGroupSelect02').value;
  var dia = document.getElementById('inputGroupSelect03').value;
  var data= "Data: <label class=\"black-text\">"+dia+'/'+mes+'/'+ano+"</label>"

  //create a reference
  const dbRefObject = firebase.database().ref().child('Injetora1').child('realtime').child(ano).child(mes).child(dia);

  //console.log(dbRefObject);


  var value = "";
  //sincornizar
  dbRefObject.on('value', snap => {
  var value = snap.val();

  var array_string = value.split(",");
  var numero_ciclos = "Número de Ciclos Diarios: <label class=\"black-text\">"+array_string[0]+"</label> ";
  var codigo_estado_maquina = array_string[1];
  var estado_maquina = "";
  var botao= "<button class=\"btn btn-dark al\" type=\"button\" onclick=\"Voltar()\"> Voltar a Tabelas </button>";

  document.getElementById('barra').innerHTML = "<img src=\"barra.png\" width=438 height=50>"
  document.getElementById('primeiralinha').innerHTML = data;
  document.getElementById('segundalinha').innerHTML = numero_ciclos;
  document.getElementById('terceiralinha').innerHTML =botao;
  })




}


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

  var tabelaAno=document.getElementById("AnoTabela");

  var dadosTabela= "";
  var db=firebase.database().ref().child('Injetora1').child('realtime');
  db.on("child_added", function(snapshot){
    var adicionado= snapshot.key;
    dadosTabela="<option>"+adicionado+"</option>"+dadosTabela;
    tabelaAno.innerHTML=" <option selected=\"true\" disabled=\"disabled\">Selecione o ano... </option>"+dadosTabela;
  })






  var var_datas=document.getElementById("inputGroupSelect01");

  var dados= "";
  var db=firebase.database().ref().child('Injetora1').child('realtime');
  db.on("child_added", function(snapshot){
    var adicionado= snapshot.key;
    dados="<option>"+adicionado+"</option>"+dados;
    var_datas.innerHTML=" <option selected=\"true\" disabled=\"disabled\">  Ano </option>"+dados;
  })



}());
