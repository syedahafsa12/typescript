// console.log("45 questions")
//1 download
// //2
// //Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

// let Personname = "bushra"
// console.log("hello bushra would you like to learn some python today??")


// //3

// //Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let pername:string = "hafsa";
// console.log(pername.toUpperCase())
// console.log(pername.toLowerCase())
// let titlecase = pername
// console.log("Hafsa")

// //4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// //Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// let quote = " A person who never made a mistake never tried anything new."
// let author = "Albert Einstein"
// console.log(`${author} Once said,${quote}`)

// /* 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.*/ 
// let famous_person = "Abraham Lincoln"
// let message = "Whatever you are, be a good one."
// console.log(`${famous_person} Once Said, ${message}`)

// /* 6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//  */
// let whitespace = "\t hafsa\n"
// console.log(`whitespace ${whitespace}`)
// let clean = whitespace.trim()
// console.log(clean)

// // 7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let add = 4+4
// let sub = 16-8
// let mult = 2*4
// let div = 16/2
// console.log(add)
// console.log(div)
// console.log(mult)
// console.log(sub)

// //You should create four lines that look like this:

// //console.log(5 + 3)

// //Your output should simply be four lines with the number 8 appearing once on each line.

// // 8 SAME AS ABOVE 

// // 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

// let favnumber =12
// console.log(`my favourite number is ${favnumber}`)

// // 10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// //I AM ALREADY ADDING

// //11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// let friends = ["zunaira","eshal","maryam faheem","maryam faisal"]

// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
// console.log(friends[3])
// // 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// console.log(`${friends[0]} I miss you`)
// console.log(`${friends[1]} I miss you`)
// console.log(`${friends[2]} I miss you`)
// console.log(`${friends[3]} I miss you`)

// // 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// const favoriteTransportation: string[] = ["Honda motorcycle", "Tesla car", "kiya sportage", "Private jet"];
// console.log(`I would like to own a ${favoriteTransportation[0]} `)
// console.log(`I would like to own a ${favoriteTransportation[1]} `)
// console.log(`I would like to own a ${favoriteTransportation[2]} `)
// console.log(`I would like to own a ${favoriteTransportation[3]} `)

// // 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//let guest=["zohaib","bushra","muhammad"]
// console.log(` ${guest[0]} I am inviting you to kfc`)
// console.log(` ${guest[1]} I am inviting you to kfc`)
// console.log(` ${guest[2]} I am inviting you to kfc`)

// // 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// //• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// //• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// //• Print a second set of invitation messages, one for each person who is still in your list.

// console.log(`Unfortunately, ${guest[2]} could not make it. He cant come`)
// guest.pop()
// guest.push("abubakar")
// console.log(guest)
// console.log(` ${guest[0]} I am inviting you to kfc`)
// console.log(` ${guest[1]} I am inviting you to kfc`)
// console.log(` ${guest[2]} I am inviting you to kfc`)

// // 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// //• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// //• Add one new guest to the beginning of your array.

// //• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// console.log(`${guest} We have found a bigger dinner table`)

// guest.unshift("amina")
// guest.splice(2,0,"Musfirah")
// console.log(guest)

// // 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// //• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// //• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// //print a message to each of the two people still on your list, letting them know they’re still invited.

// //• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// console.log("Our table wont arrive at time so we can only invite 2 guests")

// guest.pop()
// guest.pop()
// guest.pop()
// console.log(guest)
// console.log(`${guest} You are sill invited!`)
// guest.pop()
// guest.pop()
//  console.log(guest)

// /* 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


//  let places =["Turkey","Makkah","Madina","Uk"]
// console.log(`orignal ${places}`)
// console.log(places.sort())
// console.log(places)
// console.log(places.reverse())
// console.log(places)
// let againalpha=["Turkey","Makkah","Madina","Uk"]
// //  againalpha.sort() 
// // console.log(againalpha)
// againalpha.reverse()
// console.log(againalpha)


//19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//   let guest=["zohaib","bushra","muhammad"]
// let lenght = console.log(`${guest.length} are invited`)

//20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

//   let prolang:string[] = ["css","html","js"]
// prolang.map((item) => console.log(item))
//21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let items ={
// name:"hafsa",
// age:13
// }
// console.log(items)

//22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// let prolang:string[] = ["css","html","js"]
// console.log(prolang[4])
// console.log(prolang[2])

//23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//1
// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True otherwise false")

// console.log(car == 'toyota')

// console.log(car == 'kia')

// console.log(car == 'tesla')

// console.log(car == 'rikshaw')

// console.log(car == 'ki')

// let num:any = 80
// console.log("Is num == 80? I predict True otherwise false")


// console.log(num == 80)
// let n:number = 70
// console.log("Is n == 70? I predict True otherwise false")


// console.log(n == 70)
// let um:any = 90
// console.log("Is num == 90? I predict True otherwise false")


// console.log(um == 90)
// let m:any = 80
// console.log("Is num == 80? I predict True otherwise false")


// console.log(m == 80)
// let u:any = 50
// console.log("Is num == 50? I predict True otherwise false")


// console.log(u== 50)

//24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
// Tests for equality and inequality with strings
// console.log("String Comparison Tests:");

// console.log("hello" === "world" as string); // False
// console.log("apple" !== "orange" as string); // True

// // Tests using the lower case function
// console.log("\nLowercase Function Tests:");
// console.log("Hello".toLowerCase() === "hello"); // True
// console.log("WORLD".toLowerCase() === "world"); // True

// // Numerical tests
// console.log("\nNumerical Tests:");
// console.log(Number(10) === Number(5)); // False (equality)
// console.log(Number(10) !== Number(5)); // True (inequality)
// console.log(7 > 5); // True (greater than)
// console.log(3 < 5); // True (less than)
// console.log(7 >= 5); // True (greater than or equal to)
// console.log(3 <= 5); // True (less than or equal to)

// // Tests using "and" and "or" operators
// console.log("\nLogical AND and OR Tests:");
// console.log(true && false); // False (logical AND)
// console.log(true || false); // True (logical OR)

// // Test whether an item is in an array
// console.log("\nArray Inclusion Tests:");
// const fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("banana")); // True
// console.log(fruits.includes("grape")); // False

// // Test whether an item is not in an array
// console.log("\nArray Exclusion Tests:");
// console.log(!fruits.includes("kiwi")); // True
// console.log(!fruits.includes("apple")); // False
//25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// let alien_color = "green"
// if(alien_color === "green"){
//   console.log('player earned 5 points')
// }else{

// }

// 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.


// Alien Colors #2
// let alien_color: string = 'red';

// // Version that runs the if block (output: "Player earned 10 points!")
// if (alien_color === 'green') {
//     console.log("Player earned 5 points!");
// } else {
//     console.log("Player earned 10 points!");
// }

// // Version that runs the else block (output: "Player earned 10 points!")
// if (alien_color === 'yellow') {
//     console.log("Player earned 5 points!");
// } else {
//     console.log("Player earned 10 points!");
// }

//27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Alien Colors #3
// let alien_color: string = 'yellow'; // Change the color for different versions

// // Version for a green alien (output: "Player earned 5 points!")
// if (alien_color === 'green') {
//     console.log("Player earned 5 points!");
// } 
// // Version for a yellow alien (output: "Player earned 10 points!")
// else if (alien_color === 'yellow') {
//     console.log("Player earned 10 points!");
// } 
// // Version for a red alien (output: "Player earned 15 points!")
// else if (alien_color === 'red') {
//     console.log("Player earned 15 points!");
// } 
// // Default version (output: "Unknown alien color!")
// else {
//     console.log("Unknown alien color!");
// }


//28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

// Stages of Life
// let age: number = 25; // Change the age for testing different scenarios

// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }

//29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Favorite Fruits
// let favorite_fruits: string[] = ["banana", "apple", "mango"];

// // Check for specific fruits in the array
// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }

// if (favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }

// if (favorite_fruits.includes("mango")) {
//     console.log("You really like mangoes!");
// }

// if (favorite_fruits.includes("orange")) {
//     console.log("You really like oranges!");
// } else {
//     console.log("Oranges are not in your favorite fruits.");
// }

// if (favorite_fruits.includes("kiwi")) {
//     console.log("You really like kiwis!");
// } else {
//     console.log("Kiwis are not in your favorite fruits.");
// }


// //30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// Usernames array
// let usernames: string[] = ["admin", "Eric", "Alice", "John", "Jane"];

// // Loop through the array and print greetings
// for (let i = 0; i < usernames.length; i++) {
//     const username = usernames[i];
//     if (username === "admin") {
//         console.log(`Hello ${username}, would you like to see a status report?`);
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }

//31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

// Usernames array
// let usernames: string[] = []; // Empty array

// // Check if the list of users is not empty
// if (usernames.length > 0) {
//     // Loop through the array and print greetings
//     for (let i = 0; i < usernames.length; i++) {
//         const username = usernames[i];
//         if (username === "admin") {
//             console.log(`Hello ${username}, would you like to see a status report?`);
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// } else {
//     console.log("We need to find some users!");
// }

//32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Current usernames
// let usernames_current: string[] = ["admin", "Eric", "Alice", "John", "Jane"];
// let usernames_new: string[] = ["Eric", "Alice", "Hafsa"];

// // Loop through new usernames and check for uniqueness (case-insensitive)
// for (let i = 0; i < usernames_new.length; i++) {
//     const newUsername = usernames_new[i];
//     let isTaken = false;

//     // Check if the new username is already in use (case-insensitive)
//     for (let j = 0; j < usernames_current.length; j++) {
//         if (usernames_current[j].toLowerCase() === newUsername.toLowerCase()) {
//             isTaken = true;
//             break;
//         }
//     }

//     // Print messages based on whether the username is already taken or available
//     if (isTaken) {
//         console.log(`Sorry, ${newUsername} is already taken. Please enter a new username.`);
//     } else {
//         console.log(`${newUsername} is available.`);
//     }
// }

// 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// // Numbers array
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Loop through the array
// for (let i = 0; i < numbers.length; i++) {
//     let currentNumber = numbers[i];
//     let ordinalEnding: string;

//     // Determine the ordinal ending based on the current number
//     if (currentNumber === 1) {
//         ordinalEnding = "st";
//     } else if (currentNumber === 2) {
//         ordinalEnding = "nd";
//     } else if (currentNumber === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }

//     // Print the result
//     console.log(`${currentNumber}${ordinalEnding}`);
// }


//33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// // Numbers array
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Loop through the array
// for (let i = 0; i < numbers.length; i++) {
//     let currentNumber = numbers[i];
//     let ordinalEnding: string;

//     // Determine the ordinal ending based on the current number
//     if (currentNumber === 1) {
//         ordinalEnding = "st";
//     } else if (currentNumber === 2) {
//         ordinalEnding = "nd";
//     } else if (currentNumber === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }

//     // Print the result
//     console.log(`${currentNumber}${ordinalEnding}`);
// }

// //34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// let pizzas:string[]=["fajita","tikka","malaiboti"]
// for(let i=0;i<pizzas.length;i++){
//   // console.log(pizzas[i])
//   console.log(`I like ${pizzas[i]} pizza`)
// }
// // Print a line about how much you like pizza
// console.log("\nI really love pizza!");


//35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
//and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// let animals:string[] = ["cat","dog","rabbit"]

// for (let index = 0; index < animals.length; index++) {
//    console.log(`${animals[index]} is a good pet`)

// }
// console.log("\nAny of these animals would make a great pet!");

//36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// Function to create a T-shirt
// function make_shirt(size: string = "Medium", message: string = "I love TypeScript!"): void {
//   console.log(`Size: ${size}, Message: "${message}"`);
// }

// // Call the function with specific size and message
// make_shirt("Large", "Keep Coding!");

//37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Function to create a T-shirt with default values
// function make_shirt(size: string = "Large", message: string = "I love TypeScript!"): void {
//   console.log(`Size: ${size}, Message: "${message}"`);
// }
// // Examples
// make_shirt(); // Large shirt with default message
// make_shirt("Medium"); // Medium shirt with default message
// make_shirt("Small", "Keep Coding!"); // Small shirt with a different message

//38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// function describe_city(country:string = "Pakistan",city:string ="Karachi"){

// console.log(`${city} is in ${country} `)

// }
// describe_city()
// describe_city("Saudia ","Riyadh")
// describe_city("Saudia ","yanbo")

//38 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


// function city_country(city:string,country:string) {
//   console.log(`"${city}, ${country}"`)
// }
// city_country("Lahore","Pakistan")
// city_country("Karachi","Pakistan")
// city_country("Islamabad","Pakistan")


//39 Album: Write a function called make_album() that builds a Object
//  describing a music album. The function should take in an artist name 
//  and an album title, and it should return a Object containing these two
//   pieces of information. Use the function to make three dictionaries 
//   representing different albums. Print each return value to show that 
//   Objects are storing the album information correctly. Add an optional
//    parameter to make_album() that allows you to store the number of tracks
//     on an album. If the calling line includes a value for the number of 
//     tracks, add that value to the album’s Object. Make at least one new 
//     function call that includes the number of tracks on an album.


// function make_album(artistname: string, albumtitle: string, tracks?: number): 
// { artistname: string; albumtitle: string; tracks?: number } {
//   let album: { artistname: string; albumtitle: string; tracks?: number } = {
//       artistname: artistname,
//       albumtitle: albumtitle,
//   };

//   if (tracks !== undefined) {
//       album.tracks = tracks;
//   }

//   return album; 
// }
// const album1 = make_album("Artist1", "Album One");
// const album2 = make_album("Artist2", "Album Two", 12);
// const album3 = make_album("Artist3", "Album Three", 8);

// // Print album information
// console.log(album1);
// console.log(album2);
// console.log(album3);

//41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// let magician_name: string[] = ["bhabi", "babi"]

// function show_magicians(magician_name: string[]) {
//   console.log(magician_name)
// }
// show_magicians(magician_name)


// //42 Great Magicians: Start with a copy of your program from Exercise 39. 
// // Write a function called make_great() that modifies the array of magicians
// //  by adding the phrase the Great to each magician’s name. Call show_magicians()
// //   to see that the list has actually been modified.
// function make_great(magician_name: string[]) {
// for(let i = 0;i<magician_name.length;i++){
//   console.log(magician_name[i]+ "The great")
// }
// return magician_name
// }
// make_great(magician_name)

// //43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// // Example for Exercise 40


// // Create a copy of the original array
// const magicianNamesCopy = [...magician_name];

// // Call make_great with the copied array and store the modified array
// const magicianNamesGreat:string[] = make_great(magicianNamesCopy);

// // Call show_magicians with the original and modified arrays
// show_magicians(magician_name);
// show_magicians(magicianNamesGreat);

//44 
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.// Function to create a sandwich summary
// function orderSandwich(...items: string[]): void {
//   console.log("Sandwich Summary:");
//   if (items.length === 0) {
//       console.log("No items selected. Please choose some ingredients.");
//   } else {
//       console.log("Items selected: " + items.join(", "));
//   }
//   console.log("\n");
// }

// // Call the function three times with different numbers of arguments
// orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
// orderSandwich("Turkey", "Swiss", "Mustard");
// orderSandwich();

// ///45 last question  Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// // Function to store information about a car
// function createCar(manufacturer: string, modelName: string, ...options: Record<string, any>[]): Record<string, any> {
//   let car: Record<string, any> = {
//       manufacturer: manufacturer,
//       modelName: modelName,
//   };

//   // Merge additional options into the car object
//   options.forEach(option => {
//       car = { ...car, ...option };
//   });

//   return car;
// }

// // Call the function with required information and additional name-value pairs
// const carInfo = createCar("Toyota", "Camry", { color: "Blue", features: ["Navigation", "Sunroof"] });

// // Print the returned object to ensure all information was stored correctly
// console.log(carInfo);
// ;





