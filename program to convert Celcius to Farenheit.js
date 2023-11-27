function celciusToFarenheit(celTemp) {
    if (typeof (celTemp) !== Number) {
        return console.log("give input of number type")
    }
    return 1.8 * celTemp
}

console.log(celciusToFarenheit(20))
