// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function findPrimeNumbers(x) {
    let numberArray = [...Array(x).keys()]
    let primeNumbers = []
    numberArray.map(sayi=>{
        if(sayi!=1){
            if(primeCheck(sayi)){
                primeNumbers.push(sayi)
            }
        }
    })
    console.log(primeNumbers.slice(1))//baştaki sıfırı çıkartmak için.
}

function primeCheck(sayi) {
    for(let i = 2; i<sayi; i++){
        if(sayi%i==0){
            return false
        }
    }
    return true
}

findPrimeNumbers(1000)