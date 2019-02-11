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
    var personName = $("#name-input").val().trim();
    var personEmail = $("#email-input").val().trim();
    var personMessage = $("#message-input").val().trim();
    var newPerson = {
        name: personName,
        email: personEmail,
        message: personMessage,
    };
    database.ref().push(newPerson);
    $("#name-input").val("");
    $("#email-input").val("");
    $("#message-input").val("");
});

$("#home-button").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});

$("#about-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".my-about-page").offset().top},
        'slow');
});