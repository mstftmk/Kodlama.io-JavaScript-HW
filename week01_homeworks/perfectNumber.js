// 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumbers(x){
    let numberArray = [...Array(x).keys()]
    let perfectNumbers = []
    numberArray.map(sayi=>{
        let total = 0
        for(let i = 1; i<sayi;i++){
            if(sayi%i==0){
                total += i
            }
        }
        if(total==sayi){
            perfectNumbers.push(sayi)
        }
    })

    console.log(perfectNumbers.slice(1)) //sıfırı dahil etmemek için.
}

perfectNumbers(50)
perfectNumbers(30)
perfectNumbers(1000)