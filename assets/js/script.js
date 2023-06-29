
let myButton = document.querySelector(".button")
let mySelectOne = document.querySelector(".selectConvertTwo")
let mySelectTwo = document.querySelector(".selectConvert")
const valueDolar = 5.4
const valueEuro = 5.65
const valueLibra = 0.16
const valueBitcoin = 3000.00

function convertValues() {
   const myInput = document.querySelector(".input").value
   const valorTheConvert = document.querySelector(".money") // valor à ser convertido
   const valorConverted = document.querySelector(".moneyTwo") // valor já convertido


   //dola

   if (mySelectOne.value == "dolar") {
      valorConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(myInput / valueDolar)
   }

   //deuro

   if (mySelectOne.value == "dolar") {
      valorConverted.innerHTML = new Intl.NumberFormat("nl-be", {
         style: "currency",
         currency: "EUR"
      }).format(myInput * valueEuro)
   }

   //libra

   if (mySelectOne.value == "dolar") {
      valorConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(myInput * valueLibra)
   }

   //bitcoin

   if (mySelectOne.value == "dolar") {
      valorConverted.innerHTML = new Intl.NumberFormat("es-sv", {
         style: "currency",
         currency: "BTC"
      }).format(myInput * valueBitcoin)
   }


   valorTheConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(myInput)



}

function MudarImg() {
   if (mySelectOne.value == "dolar") {
      let description = document.querySelector(".currencyTwo")
      let imgDolar = document.querySelector(".imgMoneyTwo")
      imgDolar.src = "./assets/img/estados-unidos.png"
      description.innerHTML = "Dolar Americano"
   }

   if (mySelectOne.value == "euro") {
      let imgDolar = document.querySelector(".imgMoneyTwo")
      let description = document.querySelector(".currencyTwo")
      imgDolar.src = "./assets/img/euro.png"
      description.innerHTML = "Euro"
   }

   if (mySelectOne.value == "libra") {
      let description = document.querySelector(".currencyTwo")
      let imgDolar = document.querySelector(".imgMoneyTwo")
      imgDolar.src = "./assets/img/libra 1.png"
      description.innerHTML = "Libra"
   }

   if (mySelectOne.value == "bitcoin") {
      let description = document.querySelector(".currencyTwo")
      let imgDolar = document.querySelector(".imgMoneyTwo")
      imgDolar.src = "./assets/img/bitcoin 1.png"
      description.innerHTML = "Bitcoin"
   }
}

function mudarMoeda() {
   const myInput = document.querySelector(".input").value
   const valorTheConvert = document.querySelector(".money") // valor à ser convertido
   const valorConverted = document.querySelector(".moneyTwo") // valor já convertido


   // Americano

   if (mySelectOne.value == "dolar") {
      valorConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(myInput / valueDolar)

      valorTheConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(myInput)
   }

   // Euro

   if (mySelectOne.value == "euro") {
      valorConverted.innerHTML = new Intl.NumberFormat("nl-be", {
         style: "currency",
         currency: "EUR"
      }).format(myInput * valueEuro)

      valorTheConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(myInput)
   }

   // Libra

   if (mySelectOne.value == "libra") {
      valorConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(myInput * valueLibra)

      valorTheConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(myInput)
   }

   // Bitcoin

   if (mySelectOne.value == "bitcoin") {
      valorConverted.innerHTML = new Intl.NumberFormat("es-sv", {
         style: "currency",
         currency: "BTC"
      }).format(myInput * valueBitcoin)

      valorTheConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(myInput)
   }
}

mySelectOne.addEventListener("change", mudarMoeda)

mySelectOne.addEventListener("change", MudarImg)

myButton.addEventListener("click", convertValues)




