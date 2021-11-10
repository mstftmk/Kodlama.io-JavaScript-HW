//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 

function friendNumbers(x,y) {
    let toplamBolenlerX = bolenBul(x)
    let toplamBolenlerY = bolenBul(y)
    
    if((toplamBolenlerX == y)&&(toplamBolenlerY==x)){
        console.log(x+" ve "+y+" arkadaş sayılardır.")
    }else{
        console.log(x+" ve "+y+" arkadaş sayı değillerdir.")
    }
}

function bolenBul(sayi) {
    let toplamBolenler = 0 
    for(let i = 1; i<sayi; i++){
        if(sayi%i==0){
            toplamBolenler+=i
        }
    }
    return toplamBolenler
}

friendNumbers(220,284)
friendNumbers(90,57)
friendNumbers(5020,5564)
