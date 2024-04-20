// Assignment 6
// Question #1
// var firstName = prompt("Enter your first name");
// var lasttName = prompt("Enter your last name");
// var fullName = firstName +" "+lasttName;
// document.write(`${fullName}`);

// Assignment 6
// Question #2
// var favPhoneName = prompt("Enter your favorite phone name")
// var fav = favPhoneName.length
// document.write(`My favorite phone is: ${favPhoneName}<br>`);
// document.write(`Length of string: ${fav}`);

// Assignment 6
// Question #3
// var str = 'Pakistani';
// var newStr = str.indexOf('n')
// document.write(`String:${str}<br>`)
// document.write(`Index of 'n':${newStr}`)

// Assignment 6
// Question #4
// var strr = 'Hello World';
// var newStrr = strr.lastIndexOf('l')
// document.write(`String:${strr}<br>`)
// document.write(`Last Index of 'l':${newStrr}`)

// Assignment 6
// Question #5
// var string = 'Pakistani';
// var newString = string.charAt(3)
// document.write(`String:${string}<br>`)
// document.write(`Character atindex 3:${newString}`)

// Assignment 6
// Question #6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ",lastName)
// document.write(`${fullName}`)

// Assignment 6
// Question #7
// var city = "Hyderabad"
// newCity = city.replace('Hyder','Islam')
// document.write(newCity)

// Assignment 6
// Question #8
// var message = 'Ali and Sami are best friends. They play cricket and  football together.';
// newMessage = message.replaceAll('and','&')
// document.write(newMessage);

// Assignment 6
// Question #9
// var numb = '472'
// document.write(`Value:${numb}<br>`);
// document.write(`Type: ${typeof(numb)}<br>`);
// var newNumb = Number(numb);
// document.write(`Value:${newNumb}<br>`);
// document.write(`Type: ${typeof(newNumb)}<br>`);

// Assignment 6
// Question #10
// var userInput = prompt("Enter word");
// capital = userInput.toUpperCase()
// document.write(`User Input : ${userInput}<br>`)
// document.write(`Upper Case : ${capital}<br>`)

// Assignment 6
// Question #11
// var user = prompt("Enter word");
// var first = user.slice(0,1).toUpperCase()
// var last = user.slice(1).toLowerCase()
// document.write(`User Input : ${user}<br>`)
// document.write(`Tiltle Case : ${first.concat(last)}<br>`)

// Assignment 6
// Question #12
// var num = 35.36;
// var numToStr = num.toString().replace('.',"")
// document.write(`Value: ${num}<br>`);
// document.write(`Result: ${numToStr}<br>`);

// Assignment 6
// Question #13
// Regular expression to match special symbols @, ., !, and ,
// var check = /[.@,!]/g;

// Prompt the user to enter a username
// var username = prompt("Enter your username:");

// Check if the username contains any special symbols
// if (check.test(username)) {
// alert("Please enter a valid username without special symbols like @, ., !, or ,");

// } else {
// alert("Username is valid:" + " " + username);
// }

// method#2
// var username = prompt("Enter you username")
// var match = false
// for (var i = 0; i < username.length; i++) {
//     if (username.charCodeAt(i) == 33 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 64) {
//         match = true
//         alert("Please enter a valid username without special symbols like @, ., !, or ,");
//         break;
//     }
// } if (match === false) {
//     alert("Username is valid:" + " " + username);
// }

// Assignment 6
// Question #14
// var dishes = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var userInput = prompt("Enter a Dish");
// var match = 'no';
// for (var i = 0; i < dishes.length; i++) {
//     if (userInput == dishes[i]) {
//         match = 'yes';
//         document.write(`${userInput} is <b>available</b> at index <b>${i}</b>  in our bakery`);
//         break;
//     }
// }
// if(match == 'no'){
//     document.write(`${userInput} is <b>not available</b> in our bakery`);
// }

// Assignment 6
// Question #15
// var password = prompt("Enter you Password")
// var alphabets = /[a-zA-Z]/g.test(password)
// var numeric = /[0-9]/g.test(password)
// var startsWithNonNumeric = /[^0-9]/g.test(password)
// var isAtLeastSixCharacters = password.length >= 6;

// if (alphabets && numeric && startsWithNonNumeric && isAtLeastSixCharacters ) {
//     alert("Password set successfully!")
// }
// else {
//     alert("Invalid password! Password must contain alphabets and numbers, should not start with a number, and be at least 6 characters long. Please enter a valid password:")
// }


// Assignment 6
// Question #16
// var university = "University of Karachi";
// var array = university.split(" ");

// document.write("<h2>Original String:</h2>");
// document.write(`${university}`)


// document.write("<h2>Array Elements:</h2>");
// document.write("<ul>");
// for(var i =0; i<array.length; i++){
//     document.write(`<li> ${array[i]} </li>`)
// }
// document.write("</ul>");


// Assignment 6
// Question #17
// Input string
// var str = prompt("name")
// // Getting last character using slice method
// var res = str.slice(-1);
// // Display output
// document.write(res);


// Assignment 6
// Question #18
// var wordcount = "You have a string “The quick brown fox jumps over the  lazy dog”."
// document.write(`${wordcount.length}`)