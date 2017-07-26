
var button = document.getElementById("generate");
console.log(button);
button.addEventListener("click", ()=>{
    console.log("Hello");
    
    var testString = document.getElementById("field").value;
    
    console.log(testString);
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
});



function reversal(testString) {
    var backwards = "";
    for (var i = testString.length - 1; i >=0; i--){
        backwards += testString[i];
    }
    console.log(backwards);
    document.getElementById('result').innerHTML = backwards + `<br>`;
}


function alphabits(testString) {
    var sorter = [];
    for (var i = 0; i < testString.length; i++){
        sorter.push(testString[i]);
    }sorter.sort();
    var finished = sorter.join('');
    document.getElementById("result").innerHTML += finished + `<br>`;
}


function palindrome(testString) {
    if (testString === testString.split('').reverse().join('')){
        alert("Your string is a palindrome!")
    }else{
        alert("Not a palindrome :/ ")
    }
}


var testString = document.getElementById("field").value;
reversal(testString);
alphabits(testString);
palindrome(testString);











