const onLoad = function() {
    createCells()
}
window.onload = onLoad 

// Creating the cell numbers

const createCells = function (){

    let numberOfCells = 76

    let cellContainerNode = document.getElementById('cells-container')   

    for (let cellNumbers = 1; cellNumbers <= numberOfCells; cellNumbers++){

// creating a new div for the cell numbers
    let cellDivNode = document.createElement('div')
// About to customize and add a class

    cellDivNode.innerText = cellNumbers
    cellDivNode.classList.add("cell")

// attaching it to the DOM
    cellContainerNode.appendChild(cellDivNode)
}
    


}

const bingoRandomNumbers = () => {
    let myRandomNumber = []
    for(let i=0; i<24; i++) {
        let randomNum = Math.floor(Math.random() * 77) 
        myRandomNumber.push(randomNum)
        let randomNumberNode = document.createElement('div')
        randomNumberNode.classList.add('randomNumber')
        randomNumberNode.innerText = myRandomNumber[i]
        document.getElementById('randomNumber').appendChild(randomNumberNode)
    }

    console.log(myRandomNumber)
}