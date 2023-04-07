// ----- COMPONENTE JS DI INTERAZIONE CON L'UTENTE -----


// Codici Sconto per un 25% di sconto sul prezzo finale
let arrayDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


// FUNZIONI DEL FORM
function calculateMyPrice(event){
    event.preventDefault();

    // Dati richiesti
    let typeOfWork = document.getElementById("exampleFormControlInput5").value;
    let price;

    if (typeOfWork == "backend"){
        price = 20.50;
    } 
    else if (typeOfWork == "frontend"){
        price = 15.30;
    } 
    else if (typeOfWork == "analysis"){
        price = 33.60;
    }
 

    // Ore richieste
    let hoursRequested = document.getElementById("exampleFormControlInput4").value;
    if (isNaN(hoursRequested) || hoursRequested = ""){
        document.getElementById("errorHours").innerHTML = "ERROR: Enter a correct number!";
    }

    let inputDiscount = document.getElementById("exampleFormControlInput6").value;
    let codeInArray = false;

    // Codice sconto nell'array
    for (let i = 0; i < arrayDiscountCodes.length; i++){
        if (inputDiscount == arrayDiscountCodes[i]){
            codeInArray = true;
            break;
        } else {
            codeInArray = false;
        } 
    }

    if (!codeInArray){
        document.getElementById("msg-1").innerHTML = "Invalid Discount Code!";
        document.getElementById("msg-2").innerHTML = "Price without discount: " + priceWithoutDiscount(hoursRequested, price) + "&euro;";
    } else {
        document.getElementById("msg-1").innerHTML = "Discount Code = 25%";
        document.getElementById("msg-2").innerHTML = "Price with a discount: " + priceWithDiscount(arrayDiscountCodes, inputDiscount, (priceWithoutDiscount(hoursRequested, price))) + "&euro;";
    }
}


// ALTRE FUNZIONI

function priceWithDiscount(arrayDiscount, discountInserted, result){
    for (let i = 0; i < arrayDiscount.length; i++){
        if (discountInserted == arrayDiscount[i]){
            let percent = result * 0.25;
            let discount = result - percent;
            return discount.toFixed(2);
        }       
    }
}

function priceWithoutDiscount (hoursRequested, price){
    let result = hoursRequested * price;
    return result.toFixed(2);
}

