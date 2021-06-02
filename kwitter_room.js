var firebaseConfig = {
  apiKey: "AIzaSyBeNQ1ULMp1dFT4kKw0iLfgOa-WhgjMrUA",
  authDomain: "titer-5b1ff.firebaseapp.com",
  databaseURL: "https://titer-5b1ff-default-rtdb.firebaseio.com",
  projectId: "titer-5b1ff",
  storageBucket: "titer-5b1ff.appspot.com",
  messagingSenderId: "44907864889",
  appId: "1:44907864889:web:a8694d0091f74b7f77bee8",
  measurementId: "G-3Y5HD64ZNW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  