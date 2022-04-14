
// let firstCard = 13
// let secondCard = 15
// let sum = firstCard + secondCard + 5

// console.log(sum)

// if (sum < 21) {
//  console.log("Do you want to draw a new card? ")
// } 
// else if (sum === 21) {
//  console.log("Congratulations! Blackjack:) ")
// }

// else {
//     console.log("You're out of the game:(")

// }


// let age = 21

// if (age <= 20){
//  console.log("You can not enter the club!")
// }
// else {
//     console.log("Welcome!")
//  }

/* let age = 100

if (age === 100) {
    console.log("here is your bday card from King!")
}

else if (age >= 101) {
    console.log("Not elegible, you have already got one")
}

else {
    console.log("Not elegible")
} */



let cards = []
let sum = 0
let jackblack = false
let isAlive = false 


let startms = document.getElementById("textmessage")
let sums = document.getElementById("su")
//let sums = document.querySelector("#su")
let cd = document.getElementById("cd")

function StartGame() {
    isAlive=true
    jackblack=false
    var card1 = GetRandomCard()
    var card2 = GetRandomCard()
    cards = [card1,card2]
    sum = 0
    sum += cards[0]+cards[1]
    renderGame()    
     }

function renderGame() {
let message = ""   

if (sum <= 20) {
    message = "Do you want to draw a new card?"
}

else if (sum === 21) {
    message = "You'r a winner"
    jackblack = true
}

else {
    message = "Bye,bitches"
    isAlive = false
}

startms.textContent = message
sums.textContent = "Sum: " + sum
cd.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
    cd.textContent += " " + cards[i] }

}

function GetRandomCard() {
    let ran = Math.floor(Math.random()*13 + 1)
    if (ran === 1){
        return 11
    }
    else if (ran > 10){
        return  10
    }
    else { return ran }
}



let newcard=() => {
    if(isAlive === true && jackblack === false){
    let card = GetRandomCard()
    cards.push(card)
    sum += card
    renderGame()
    }
}

var sentence = ["Hello","my","name","is","Elizaveta", "!"]
var sent = document.getElementById("hi")

for (i = 0; i < sentence.length; i++ ) {
    sent.textContent += " " + sentence[i]
}

// let playerName = document.getElementById("playerName")
// let player = ["Elizaveta", "145$"]

// for(i=0; i < player.length; i++){
// playerName.textContent += player[i] + " "}

let playerName = document.getElementById("playerName")
let player = {
    nAme: "Elizaveta " ,
    points: " 500$"
}

playerName.textContent = player.nAme + player.points

// let course = {
//     title: "Learn CSS for free",
//     lessons: 16,
//     length: "16 hours",
//     creator: "Per",
//     level: "intermediate",
//     isFree: true,
//     tags: ["#css","#js","#html"]

// }

// console.log(course["level"])


// let development = {
//     part1: "html",
//     part2: "css",
//     part3: "java script"
// }

// let variablename = development.part3 + development.part1 + development.part2


// let castlesEngland = {
//     names: ["Castle of Biden", "Castle of Ann", "Castle of Joy"],
//     freeRooms: [true, true, false],
//     numberofrooms: [12,10,25]
// }

// console.log(castlesEngland.freeRooms,castlesEngland.numberofrooms)

 let object = {
    nAme: "Elizaveta",
    chips: 7,
    //message: function m(){
    // console.log( "You murdered me,bitch!")}
 }

object.message()

let a = document.getElementById("el-Player")
a.textContent = object.nAme + " " + object.chips

// let arr = ["China","India", "US","Indonesia","Pakistan"]

// for (let i = 0; i< arr.length;i++){
//     console.log(" - " + arr[i])
// }

// let largEcountries = ["Tuvalu", "India","USA","Indonesia","Monaco"]

// largEcountries.pop()
// largEcountries.push("Pakistan")
// largEcountries.shift()
// largEcountries.unshift("China")

//  for (let i = 0; i< largEcountries.length;i++){
//     console.log(" - " + largEcountries[i])
// }

// let dayOfweek = "Friday"
// let date = 13

// if (dayOfweek === "Friday" && date === 13){
//     console.log(" 👻 ")
// }


// let hands = ["rock", "paper","scissors"]

// let getHand = () => {
//     let vr = Math.floor(Math.random()*3)
//     return hands[vr]
// }

// console.log(getHand())








// let aGe = 15

// if (aGe < 6) {
//     console.log("free")
// }
// else if ( aGe < 18){
//     console.log("child discount")
// }
// else if (aGe < 27){
//     console.log("student discount")
// }
// else if ( aGe < 67){
//     console.log("full price")
// }
// else {
//     console.log("senior citizen")
// }


// let person = {
//     name: "Elizaveta ",
//     age: 18,
//     country: "Russia "
// }

// let logData = () => console.log(person.name +"lives in: " + person.country + person.age)

// logData()

// let HasSolvedchallenge = false
// let HasHintsLeft = false

// if (HasSolvedchallenge && HasHintsLeft){
//     solution()
// }

// function solution(){
//     console.log("Show the solution....")
// }


//Certificates
// let hasCompletedCourse = true
// let giveCertificate = true

// if (hasCompletedCourse && giveCertificate) {
//     generateCertificate()
// }
// */ if (hasCompletedCourse === true) {
//     if(giveCertificate === true) {
//         generateCertificate()
//     }
// }/*

// function generateCertificate() {
//     console.log("Getting certificate .....")
// }



// function rollDice(){
//    return Math.floor(Math.random()*6 + 1)
// }

// console.log(rollDice())


// let random = Math.floor(Math.random()*21) + 1

// console.log(random)



// let dicef = Math.floor(Math.random()*6 + 1)
// console.log(dicef)




// for (let i = 0; i < 5; i += 1 ) {

//     console.log(messages[i])
// }

// for (messages=0; messages < 5 ; messages += 1) {
//     console.log(messages)
// }


// for (let k = 0; k < messages.length; k += 1) {
//     console.log(messages[k])
// }

// for (let i = 0; i < cards.length; i ++) {
//     console.log(cards[i])
// }





// let likesDocumentaries = false
// let likesStartUps = true

// if (likesDocumentaries||likesStartUps) {
//    recommendations()
// }

// function recommendations(){
//     console.log("You probably will like these epic movies,bro!")
// }


// let player1Time = 25
// let player2Time = 30
// let sUm = player1Time + player2Time

// function Fastest() {
//     if (player1Time < player2Time){
//     return player1Time
//     }
//     else if(player1Time > player2Time) {
//         return player2Time
//     }
//     else {
//         return player1Time
//     }
// }

// let fast = Fastest()

// console.log(fast)


// function total() {
//     return sUm
// }

// let stored = total()

// console.log(stored)




// for ( let i = 10; i < 101; i += 10 ) {
//     console.log(i)
// }


// /* let skills = ["html",
//     "css",
//     "js", 
//     "english",
//     "spanish"
// ] */

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])
/* console.log(skills.length) */


// let messages = ["Hi",
// "What a pleasure to see you",
// "Me too! I don't have seen you for a while! "]
// let newMessage = "Same, bro!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)


