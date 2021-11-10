//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function isPrime(...args) {
    args.map(sayi=>{
        if(sayi==1){
            console.log("1 asal değildir.")
        }else{
            if(primeCheck(sayi)){
                console.log(sayi+" asaldır.")
            }else{
                console.log(sayi+" asal değildir.")
            }
        }
    })
}

function primeCheck(sayi) {
    for(let i = 2; i<sayi; i++){
        if(sayi%i==0){
            return false
        }
    }
    return true
}

isPrime(2,3,4,5,8,9,7,1)