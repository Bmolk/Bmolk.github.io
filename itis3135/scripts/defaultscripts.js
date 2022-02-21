document.getElementById("date").innerHTML = getDate();
function getDate() {
    var d = new Date(),
        minutes = d.getMinutes();
    hours = d.getHours();
    meridiem = d.getHours() >= 12 ? 'pm' : 'am',
        hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return "It is " + hours + ':' + minutes + meridiem + " on " + days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
}

function getName() {
    let firstName = document.getElementById("firstname").value;

    let feeling = document.getElementById("feeling").value;

    let allText = "Hey there, " + firstName + "! I'm glad you're feeling " + feeling + "!";
    document.getElementById("output").innerHTML = allText;
}

function promptSides() {
    var sideCount = prompt("The Bronze Mammoth would like you to enter a number of sides (1-10).");
    sideCount = validateEntry(sideCount);


    var polygonName = getPolygonName(sideCount);
    var responsePhrase = "The polygon with " + sideCount + " side is a/an " + polygonName +".";
    document.getElementById("results").innerHTML = responsePhrase;
}

function validateEntry(_sideCount) {
    while (isNaN(_sideCount)) {
        alert("Please input a valid number");
        _sideCount = prompt("The Bronze Mammoth would like you to enter a number of sides.");
    }
    return _sideCount;
}

function getPolygonName(_sideCount) {
    var polygonList = new Array ("Monogon", "Bigon", "Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Septagon", "Octagon", "Nonagon", "Decagon");
    return polygonList[_sideCount - 1];
}