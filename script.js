(function() {
    "use strict";

    //Arrays to hold the names of the games and sketches
    let nameGame = [
        "Pirate Ship vs. Sea Monster", 
        "Rabbit vs. Fox"
    ];

    let nameSketches = [
        "Blue", 
        "Sun and Moon", 
        "Electric Lasers"
    ];

    //Arrays to hold links to games and sketches
    let games = [
        "https://tamidy.github.io/pirate-ship-vs-sea-monster-js/", 
        "https://tamidy.github.io/rabbit-vs-fox-js/"
    ];

    let sketches = [
        "https://tamidy.github.io/blue/", 
        "https://tamidy.github.io/sun-and-moon/", 
        "https://tamidy.github.io/electric-lasers/"
    ];

    window.onload = function() {

        //Checking the nav bar links
        let navlinks = document.querySelectorAll("nav > a"); 
        for (let i=0; i<navlinks.length; i++) {
            if (navlinks[i].innerHTML == "Games") { 
                navlinks[i].onclick = displayGames;
            } else if (navlinks[i].innerHTML == "Sketches") {
                navlinks[i].onclick = displaySketches;
            }
        }
    }

    function displayGames() {
        //Showing a list of the games 
        let list = document.getElementById("itemlist");
        for (let i=0; i<nameGame.length; i++) {
            console.log(nameGame[i]);
            let item = document.createElement("li");
            item.textContent = nameGame[i];
            list.appendChild(item);
        }
    }

    function displaySketches() {
        //Showing a list of the sketches

    }

}) ();