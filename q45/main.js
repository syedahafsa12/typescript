"use strict";
// console.log("45 questions")
// //1
// //Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let Personname = "bushra"
// console.log("hello bushra would you like to learn some python today??")
// //2
// //Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let pername:string = "hafsa";
// console.log(pername.toUpperCase())
// console.log(pername.toLowerCase())
// let titlecase = pername
// console.log("Hafsa")
// //3 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// //Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// let quote = " A person who never made a mistake never tried anything new."
// let author = "Albert Einstein"
// console.log(`${author} Once said,${quote}`)
// /* 4 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.*/ 
// let famous_person = "Abraham Lincoln"
// let message = "Whatever you are, be a good one."
// console.log(`${famous_person} Once Said, ${message}`)
// /* 5 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//  */
// let whitespace = "\t hafsa\n"
// console.log(`whitespace ${whitespace}`)
// let clean = whitespace.trim()
// console.log(clean)
// // 6 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
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
// // 7 SAME AS ABOVE 
// // 8 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let favnumber =12
// console.log(`my favourite number is ${favnumber}`)
// // 9 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
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
// //• Print a message to each of the two people still on your list, letting them know they’re still invited.
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
