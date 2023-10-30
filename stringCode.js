function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //fill in the variables
    //working on inputting first name
    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);

    //working on inoutting last name
    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);

    //working on inoutting zip code
    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code was inputted as " + zipCode);

    //working on combining first and last name with space inbetween
    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as " + fullName);
    //working on inputting full name length
    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");
    //working on inputting the zipcode as an integer
    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    //things to check for...fullNameLength is less than 20 characters, 
    //zip code has only five digits
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invaled full name";
    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invaled zip code";
    } else {
        alert("User credentials passed, welcome to the site, " + fullName);
    }
}

function checkPalin() {
    console.log("checkPalin started");
    //record the string into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is " + entStr);

    //take away any spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is " + entStrNoSpace)

    //create reverse array var and reverse string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);
    }

    //convert to a string from an array
    revStr = revArray.join("");
    console.log("reversed is " + revStr)

    //compare rev to string and write to status
    var equal = 0; 4
    equal = (entStrNoSpace === revStr);
    console.log("The ent and reversed being equal is: " + equal);

    //write to palindrome status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <i>is</i> a palindrome";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <i>not</i> a palindrome";
    }
}