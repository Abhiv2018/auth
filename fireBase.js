
Var app_fireBase ={};



(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsO0CmO6Caty8fHp9-ERddz3lorCXSLic",
    authDomain: "test-f362f.firebaseapp.com",
    databaseURL: "https://test-f362f.firebaseio.com",
    projectId: "test-f362f",
    storageBucket: "test-f362f.appspot.com",
    messagingSenderId: "50556532520"
  };
  firebase.initializeApp(config);
	
	app_fireBase = firebase;

})()