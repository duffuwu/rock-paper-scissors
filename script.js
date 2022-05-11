function ComputerPlay() {
    let randomNumber = Math.floor(
        Math.random() * 3
        )
    let wordsArray = ['Rock','Paper','Scissors']
    return wordsArray[randomNumber]
}