const a = "AUA student"
const b = "CS major"
const c = (2+4)*3
const d = a + c

if (a !== "AUA student") {
	console.log ("How did you even get in here?")
} 	else if ((a === "AUA student") && (b === "CS major")) {
	console.log ("You can enjoy Intro to CS with us")
}	else if ((a === "AUA student") && (b !== "CS major")) {
	console.log ("Registrar's first!!!")
}

if  (d === a + c) {
	console.log ("You're good to sign your own contract")
}   else {
	console.log ("Did you know you need your parent's signature in your contract?")
}
