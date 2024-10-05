let gifts = [];  

function addGift() { 
    const giftName = document.getElementById("giftName").value;     
    const giftPrice = parseFloat(document.getElementById("giftPrice").value);     

    if (giftName && !isNaN(giftPrice) && giftPrice > 0) {     
        gifts.push({ name: giftName, price: giftPrice });        
        displayGifts();       
        document.getElementById("giftName").value = '';        
        document.getElementById("giftPrice").value = ''; 
        alert("Gift added successfully!"); 
    } else {
        alert("Please enter valid gift details."); 
    }
}

function displayGifts() { 
    const giftList = document.getElementById("giftList"); 
    giftList.innerHTML = ""; 
    gifts.forEach(gift => { 
        const listItem = document.createElement("li"); 
        listItem.textContent = `${gift.name} - $${gift.price.toFixed(2)}`; 
        giftList.appendChild(listItem); 
    });
}

function generateRecommendations() { 
    const numGifts = parseInt(document.getElementById("numGifts").value); 
    const budget = parseFloat(document.getElementById("budget").value); 

    if (isNaN(numGifts) || isNaN(budget) || numGifts <= 0 || budget <= 0) { 
        alert("Please enter valid criteria."); 
        return;  
    }

    const recommendationsList = document.getElementById("recommendationsList"); 
    recommendationsList.innerHTML = "";  
    const validCombinations = getCombinations(gifts, numGifts).filter(combo => { 
        const total = combo.reduce((sum, gift) => sum + gift.price, 0); 
        return total <= budget; 
    });

    if (validCombinations.length > 0) { 
        validCombinations.forEach(combo => {  
            const listItem = document.createElement("li"); 
            const giftNames = combo.map(gift => gift.name).join(", ");  
            const totalPrice = combo.reduce((sum, gift) => sum + gift.price, 0).toFixed(2);
            listItem.textContent = `${giftNames} - Total: $${totalPrice}`; 
            recommendationsList.appendChild(listItem);  
        });
    } else {  
        const listItem = document.createElement("li");
        listItem.textContent = "No valid gift combinations found.";
        recommendationsList.appendChild(listItem);
    }
}

function getCombinations(array, comboSize) { 
    function combine(input, comboSize, start, currentCombo) { 
        if (currentCombo.length === comboSize) {
            return [currentCombo];
        }
        let combinations = []; 
        for (let i = start; i < input.length; i++) { 
            combinations = combinations.concat(combine(input, comboSize, i + 1, currentCombo.concat(input[i]))); 
        }
        return combinations;  
    }

    return combine(array, comboSize, 0, []); 
}

document.getElementById("addGiftBtn").addEventListener("click", addGift); 
document.getElementById("recommendBtn").addEventListener("click", generateRecommendations); 
