let whatToSay = {
    greeting3() {
        console.log("Hello!")
    },
    question() {
        console.log("What's your name?")
    },
    answer() {
        console.log("My name is Fabi.")
    }
}

whatToSay.greeting3()
whatToSay.question()
whatToSay.answer()

let wildStyle = {
    goCrazy(number3, number4){
        let result = 0
        result = result + this.addition(number3, number4)
        return result
    },

    addition(number1, number2){
        let result = 0
        result = number1 + number2
        return result
    }
}

let crazyResult = wildStyle.goCrazy(1,1)
console.log(crazyResult)