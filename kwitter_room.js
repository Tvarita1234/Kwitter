// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD6OrP2tnWCOkorIIwB1hq2Ow_rDFxRlTE",
      authDomain: "kwitter-52b23.firebaseapp.com",
      databaseURL: "https://kwitter-52b23-default-rtdb.firebaseio.com",
      projectId: "kwitter-52b23",
      storageBucket: "kwitter-52b23.appspot.com",
      messagingSenderId: "843618734787",
      appId: "1:843618734787:web:869c46421ae0d26e454876"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class'room_name' id="+Room_names+"onclick= 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

      });

      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}