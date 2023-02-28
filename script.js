

const menu_items = document.querySelectorAll(".menu_item")
const slider_wrapper = document.querySelector(".slider_wrapper")

const products = [
    {
      id: 1,
      title: "Adidas",
      price: 1000 ,
      colors: [
        {
          name: "black",
          img: "./img/air.png",
        },
        {
          name: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Puma",
      price: 1300,
      colors: [
        {
          name: "lightgray",
          img: "./img/blazer.png",
        },
        {
          name: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Nike",
      price: 2500,
      colors: [
        {
          name: "black",
          img: "./img/crater.png",
        },
        {
          name: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Jordan",
      price: 5000,
      colors: [
        {
          name: "lightgray",         
          img: "./img/jordan.png",
        },
        {
          name: "green",        
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Air",
      price: 3000,
      colors: [
        {
          name: "gray",
          img: "./img/hippie.png",
        },
        {
          name: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];


let chosenProduct = products[0]
const currentProductName = document.querySelector(".product_name")
const currentProductImage = document.querySelector(".product_image")
const currentProductPrice = document.querySelector(".product_price")
const currentProductColor = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")


menu_items.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        slider_wrapper.style.transform = `translateX(${-100*i}vw)`

        chosenProduct = products[i]
        currentProductName.textContent = chosenProduct.title
        currentProductPrice.textContent = "Rs" + chosenProduct.price
        currentProductImage.src = chosenProduct.colors[0].img
        
        currentProductColor.forEach((color,i)=>{
          color.style.backgroundColor = chosenProduct.colors[i].name
        })

    })
})

currentProductColor.forEach((color,i)=>{
  color.addEventListener("click",()=>{

    currentProductImage.src = chosenProduct.colors[i].img
  })
})

currentProductSizes.forEach((size)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor = "white"
      size.style.color = "black"
    })
    size.style.backgroundColor = "black"
      size.style.color = "white"
  })
})

const productBuyButton = document.querySelector(".product_buy-button")
const paymentPage = document.querySelector(".payment")
const paymentCloseButton = document.querySelector(".payment_close-button")

productBuyButton.addEventListener("click",()=>{
  paymentPage.style.display = "flex"
})

paymentCloseButton.addEventListener("click",()=>{
  paymentPage.style.display = "none"
})

const year = document.querySelector("#copyright_year")

year.innerHTML = new Date().getFullYear()