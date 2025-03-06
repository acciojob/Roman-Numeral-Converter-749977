    function convertToRoman() {
    let num = parseInt(document.getElementById("number").value);
    
    if (isNaN(num) || num < 0 || num > 100000) {
        document.getElementById("result").innerText = "Please enter a valid number between 0 and 100000.";
        return;
    }

    const romanSymbols = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], 
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], 
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];

    let romanNumeral = "";

    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    }

    document.getElementById("result").innerText = "Roman Numeral: " + romanNumeral;
}
