var config = {
    apiKey: "AIzaSyD8tT2tddzxPyAvg4iq4Qt00bP5Bw646kI",
    authDomain: "aarons-awesome-portfolio.firebaseapp.com",
    databaseURL: "https://aarons-awesome-portfolio.firebaseio.com",
    projectId: "aarons-awesome-portfolio",
    storageBucket: "aarons-awesome-portfolio.appspot.com",
    messagingSenderId: "28092699817"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit-input").on("click", function (event) {
    event.preventDefault();
    var personEmail = $("#exampleInputEmail1").val().trim();
    var personMessage = $("#exampleMessage").val().trim();
    var newPerson = {
        email: personEmail,
        message: personMessage,
    };
    database.ref().push(newPerson);
    $("#exampleInputEmail1").val("");
    $("#exampleMessage").val("");
    alert('Your information has been sent to Aaron!');
});