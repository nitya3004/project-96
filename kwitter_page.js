// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDHZgtMZ5NzhcTTDlZVmwIMBZtEFTcLHDQ",
      authDomain: "letschat-web-app---1-6feff.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-6feff-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-6feff",
      storageBucket: "letschat-web-app---1-6feff.appspot.com",
      messagingSenderId: "522744611880",
      appId: "1:522744611880:web:ee6b54766603618a29211d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("roomname");

    function send(){
          msg=document.getElementById("msg").value ;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
