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
    var personFirstName = $("#form_name").val().trim();
    var personLastName = $("#form_lastname").val().trim();
    var personEmail = $("#form_email").val().trim();
    var personNeed = $("#form_need").val().trim();
    var personMessage = $("#form_message").val().trim();
    var newPerson = {
        firstName: personFirstName,
        lastName: personLastName,
        email: personEmail,
        need: personNeed,
        message: personMessage,
    };
    database.ref().push(newPerson);
    $("#form_name").val("");
    $("#form_lastname").val("");
    $("#form_email").val("");
    $("#form_need").val("");
    $("#form_message").val("");
    alert('Your information has been sent to Aaron!');
});

$("#home-button").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});

$("#about-button").click(function () {
    $('html,body').animate({
            scrollTop: $(".my-about-page").offset().top
        },
        'slow');
});

$("#portfolio-button").click(function () {
    $('html,body').animate({
            scrollTop: $(".my-portfolio-page").offset().top
        },
        'slow');
});

$("#contact-button").click(function () {
    $('html,body').animate({
            scrollTop: $(".my-contact-page").offset().top
        },
        'slow');
});