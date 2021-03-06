/* javascript lives here */
"use strict";
// IIFE - Immediately Invoked Function Expression
(function () {
    /// <reference path="../objects/Vehicle.ts"/>
    /// <reference path="../objects/Car.ts"/>
    /// <reference path="../objects/Point.ts"/>
    /// <reference path="../collections/games.ts"/>
    // App entry point
    function Start() {
        LoadNavBar();
        LoadPageContent();
    }
    // Loads the Main Navigation using AJAX




    function LoadNavBar() {
      $("#mainNav").load("../navbar.html", function(data){
        switch (document.title) {
                case "Home":
                    var homeLink = document.getElementById("homeLink");
                    homeLink.setAttribute("class", "active");
                    break;
                case "Projects":
                    var projectsLink = document.getElementById("projectsLink");
                    projectsLink.setAttribute("class", "active");
                    break;
                case "Contact":
                    var contactLink = document.getElementById("contactLink");
                    contactLink.setAttribute("class", "active");
                    break;
            }
      });
    }



    // Loads the Content for each page using the Document Title
    function LoadPageContent() {
        switch (document.title) {
            case "Home":
                LoadHomePage();
                break;
            case "Projects":
                LoadProjectsPage();
                break;
            case "Contact":
                LoadContactPage();
                break;
        }
    }
    // Loads the content of the Home Page
    function LoadHomePage() {
        // Date Class Examples
        var today = new Date();
        var months = ["January", "February", "March", "April", "May",
            "June", "July", "August", "September", "October", "November", "December"];
        var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var currentMonth = months[today.getMonth()];
        var currentDay = day[today.getDay()];
        console.log(currentDay + " " + currentMonth + " " + today.getDate() + ", " + today.getFullYear());
        // Number Examples
        var myNumber = 10003.14157826;
        console.log(myNumber.toFixed(4));
        console.log(myNumber.toString());
        console.log(myNumber.toLocaleString());
        // Math Examples
        var die1 = Math.floor(Math.random() * 6) + 1;
        console.log(die1);
        var die2 = Math.floor(Math.random() * 6) + 1;
        console.log(die2);
        var dice = die1 + die2; // 2 six-sided dice
        console.log(dice);
        var myCar = new objects.Car(4, 2, "Honda", "Civic");
        myCar.drives();
        myCar.honks();
        console.log("myCar has " + myCar.doors + " doors");
        // first point
        var Point1 = new objects.Point(10, 10);
        // second point
        var Point2 = new objects.Point(20, 20);
        // calculate distance between two points
        var distance = objects.Point.Distance(Point1, Point2);
        console.log(distance);
        var game;
        var data = {
            games: game
        };

        $.getJSON("../games.json", function(data){
          var gameListBody = $("#gameListBody");
           data.games.forEach(function (game) {
                // inject a "template row" inside the dataRows div tag
                var newRow = document.createElement("tr");
                newRow.innerHTML = "\n          <td>" + game.name + "</td>\n          <td class=\"text-center\">" + game.cost + "</td>\n          <td class=\"text-center\">" + game.rating + "</td>\n        ";
                gameListBody[0].appendChild(newRow);
            }, this);
        });
    }


    // Loads the content for the projects page
    function LoadProjectsPage() {
        // Step 1 - Setup references to the elements you need to hook into
        var HideButton = document.getElementById("HideButton");
        var HalfSizeButton = document.getElementById("HalfSizeButton");
        var ThreeQuarterSizeButton = document.getElementById("ThreeQuarterSizeButton");
        var ShowButton = document.getElementById("ShowButton");
        var FirstProjectImage = document.getElementById("FirstProjectImage");
        var ButtonArray = [HideButton, HalfSizeButton, ThreeQuarterSizeButton, ShowButton];

        let buttons = $("button");

        buttons.click(ButtonClick);

        buttons.hover(
          function(){
            $(this).attr("class", "btn btn-success btn-lg");
        },
          function(){
            $(this).attr("class", "btn btn-danger btn-lg");
        }
        );

        buttons.attr("class", "btn btn-danger btn-lg");

        buttons.css("color", "yellow");

        /*
        ButtonArray.forEach(function (button) {
            // set an event listener for each button
            button.addEventListener("click", ButtonClick);
        }, this);
        */

        // Use one named function, ButtonClick to respond to each of the buttons
        function ButtonClick(event) {
            // store which button has been clicked in currentButton
            //let currentButton = event.currentTarget; <- one way of getting a ref to the button
            var currentButton = event.currentTarget;
            switch (currentButton.getAttribute("id")) {
                case "HideButton":
                    FirstProjectImage.style.display = "none";
                    break;
                case "HalfSizeButton":
                    FirstProjectImage.style.maxWidth = "50%";
                    FirstProjectImage.style.display = "block";
                    break;
                case "ThreeQuarterSizeButton":
                    FirstProjectImage.style.maxWidth = "75%";
                    FirstProjectImage.style.display = "block";
                    break;
                case "ShowButton":
                    FirstProjectImage.style.display = "block";
                    FirstProjectImage.style.maxWidth = "100%";
                    break;
            }
        }
    }

    function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  };

  function isValidPhoneNumber(phoneNumber) {
    var pattern = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
    return pattern.test(phoneNumber);
  }

    // Loads the Content for the Contact Page
    function LoadContactPage() {
        let FullName = $("#FullName");
        var ContactNumber = $("#ContactNumber");
        var Email = $("#Email");
        var Message = $("#Message");
        //let SendButton = document.getElementById("SendButton"); -- Vanilla JavaScript
        var SendButton = $("#SendButton"); //-- jQuery
        //let SendButton = document.querySelectorAll("#SendButton")[0]; -- Vanilla JavaScript

        console.log(SendButton.text()); // getter

        // outside sendbuton click event
        // change event triggers when focus is lost

        FullName.change(function(){
          let fullNameString = FullName.val();
            if(fullNameString.length < 2) {
              $("#FullNameErrorMessage").show(0, function(){
                $(this).text("Full Name too short");
              });
              FullName.focus();
              FullName.select();
            }
            else {
              $("#FullNameErrorMessage").hide();
            }
        });

        ContactNumber.change(function(){
          if(!isValidPhoneNumber(ContactNumber.val())){
             $("#ContactNumberErrorMessage").show(0, function(){
                $(this).text("Invalid Phone Number");
              });
            ContactNumber.focus();
            ContactNumber.select();
          }
          else {
            $("#ContactNumberErrorMessage").hide();
          }
        })

        Email.change(function(){
          if(!isValidEmailAddress(Email.val())){
             $("#EmailErrorMessage").show(0, function(){
                $(this).text("Invalid Email Address");
              });
            Email.focus();
            Email.select();
          }
          else {
            $("#EmailErrorMessage").hide();
          }
        })

        // sendbutton click event
        SendButton.on("click", function (event) {
          // inside the sendbuton click event
            //event.preventDefault();
            //console.log(ContactNumber.val());
            //console.log(Email.val());
            //console.log(Message.val());


        });

        $("input").dblclick(function(){
          $(this).val(""); // clears the text box
        });

        $("input").on("dblclick", function(){
          $(this).css("background", "red");
        });
    }
    // call the Start function when the window loads
    window.onload = Start; // Start is the callback function / event handler
})(); // end of the IIFE
//# sourceMappingURL=app.js.map

