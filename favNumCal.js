function favNumCal() {
    favNum = 0
    while (favNum != 9) {
        favNum = prompt("Guess my favorite number")
        if (favNum < 9) {
            alert("Too low")
        }
        if (favNum > 9) {
            alert("Too high")
        } 
        if (favNum == 9) {
            alert("Correct")
        }
    }
}