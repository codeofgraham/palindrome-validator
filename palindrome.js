//JavaScript document
//Developed by Graham O'Mahony; copyright 2020
//Palindrome validator
const palindromeEntry = document.getElementById("palindrome"), result1 = document.querySelectorAll(".result")[1];
palindromeEntry.addEventListener("change", palindrome, false);
function palindrome(x){
	"use strict";
	let pVal = palindromeEntry.value;//pVal is the inputted text.
	//console.log(pVal);
	let newPval = pVal.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");//pVal is converted to lower-case text and special characters are replaced with an empty string.
	//console.log(newPval);
	x = newPval.split("");//Split into an array of each letter as a substring.
	//console.log(x);
	x = x.reverse();//Reverse each letter of the substring.
	//console.log(x);
	x = x.join("");//Joins the separated letters of the substring.
	if(newPval === "" || newPval === " "){
		result1.innerHTML = "Enter a word, phrase or sentence above to check if it's a palindrome."
		return false;
	}
	if(newPval === x){//If the inputted text is exactly equal to the split, reversed and joined string, it's a palindrome.
		result1.innerHTML = '"' + pVal + '"' + " is a palindrome.";
		console.log(pVal, ": this is a palindrome.");
		return true;
	} else{
		result1.innerHTML = '"' + pVal + '"' + " is not a palindrome.";
		console.log(pVal, ": this is not a palindrome.")
		return false;
	}
}