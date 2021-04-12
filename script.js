(function() {
    "use strict";

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
        //Checking the item list links
        let itemlinks = document.querySelectorAll("#itemlist > li > a"); 
        for (let i=0; i<itemlinks.length; i++) {        
            itemlinks[i].onclick = display(games[i]);
        }
    }

    function displaySketches() {
        //Checking the item list links
        let itemlinks = document.querySelectorAll("#itemlist > li > a"); 
        for (let i=0; i<itemlinks.length; i++) {        
            itemlinks[i].onclick = display(sketches[i]);
        }
    }

    function display(link) {
        //Showing the container and hiding the list
        document.getElementsByClassName("hidden")[0].style.display = "block";
        document.getElementById("itemlist").style.display = "none";

        //Displaying the game or sketch
        let hid = document.getElementsByClassName("hidden")[0];
        let container = document.createElement("section");
        container.className = "sketch";
        
        //Header
        let heading = document.createElement("h2");
        heading.style.margin = "0px 0px 20px";
        heading.style.textAlign = "center";

        //iframe
        let frame = document.createElement("iframe");
        frame.src = link;
        frame.className = "script";

        //Add to parent
        container.appendChild(heading);
        container.appendChild(frame);
        hid.appendChild(container);
    }

}) ();