var firebaseConfig = {
    apiKey: "AIzaSyDDRVPY-_ofOo6CWFiT6hyP8ZP0IR9MfeA",
    authDomain: "kwitter-505a8.firebaseapp.com",
    databaseURL: "https://kwitter-505a8-default-rtdb.firebaseio.com",
    projectId: "kwitter-505a8",
    storageBucket: "kwitter-505a8.appspot.com",
    messagingSenderId: "722412976880",
    appId: "1:722412976880:web:202bf687ce7f1891e52035"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username")

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addroom() {
    Room_name = document.getElementById("room_name").value

    firebase.database().ref("/").child(Room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", Room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start 
            console.log("room_name - " + Room_names)
            row = "<div class = 'room_name' id ='" + Room_names + "' onclick ='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirecttoroomname(params) {
    console.log(params)
    localStorage.setItem("room_name", params);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("userxname")
    localStorage.removeItem("room_name")
    window.location = "index.html"

}