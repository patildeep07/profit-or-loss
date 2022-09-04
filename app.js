
//// Processing

function calculateProfit(costPrice, sellingPrice, quantity){
    return (sellingPrice*quantity) - (costPrice*quantity)
}

function calculateProfitPercentage(costPrice, profit){
    return ((profit/costPrice)*100).toFixed(2)
}

function calculateLoss (costPrice, sellingPrice, quantity) {
    return (costPrice*quantity) - (sellingPrice*quantity)
}

function calculateLossPercentage(costPrice, loss){
    return ((loss/costPrice)*100).toFixed(2)
}

function showOutput(){
    outputDiv.style.display = "block"
}

function hideOutput() {
    outputDiv.style.display = "none"
}

///// Input and function calls, as well as output

const costPrice = document.querySelector("#cost-price");
const quantity = document.querySelector("#quantity");
const sellingPrice = document.querySelector("#selling-price");
const submitBtn = document.querySelector("#submit");
const outputDiv = document.querySelector(".output-div")

function clickHandler (){
    var cp = costPrice.value;
    var sp = sellingPrice.value;
    var quant = quantity.value;

    showOutput()
    if(cp&&sp&&quant){
        if (cp < sp){
            var profit = calculateProfit(cp, sp, quant)
            var profitPercent = calculateProfitPercentage(cp, profit)
            
            outputDiv.style.color = "green"
            outputDiv.innerText = `Congrats! 🥳 You're on ${profit} profit, and the profit percentage is ${profitPercent}%`
    
        }
        else if(sp < cp) {
            var loss = calculateLoss(cp, sp, quant)
            var lossPercent = calculateLossPercentage(cp, loss)
            
            outputDiv.style.color = "red"
            outputDiv.innerText = `Hard Luck! 😨 You've ${loss} loss, and the loss percentage is ${lossPercent}% `
        }
        else if (cp === sp) {
            
            outputDiv.innerText = "Seems like you haven't gone anywhere up or down. hehe."
        }
    }
    else {
        outputDiv.innerText = "Please enter all the values to proceed!!"
    }
    
}

hideOutput()
submitBtn.addEventListener("click", clickHandler)