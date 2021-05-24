var firebaseConfig = {
    apiKey: "AIzaSyDSS5rnawRoKu2JnGMm6fc9e938B4xOqpg",
    authDomain: "kwitter-1878e.firebaseapp.com",
    databaseURL: "https://kwitter-1878e-default-rtdb.firebaseio.com",
    projectId: "kwitter-1878e",
    storageBucket: "kwitter-1878e.appspot.com",
    messagingSenderId: "154647147544",
    appId: "1:154647147544:web:40ac5ccfff562e57547f6d",
    measurementId: "G-5B3JVYN4XJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}