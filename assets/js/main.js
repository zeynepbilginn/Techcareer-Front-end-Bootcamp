/*
Template Name: ShopGrids - Bootstrap 5 eCommerce HTML Template.
Author: GrayGrids
*/

// (function () {
//     //===== Prealoder

//     window.onload = function () {
//         window.setTimeout(fadeout, 500);
//     }

//     function fadeout() {
//         document.querySelector('.preloader').style.opacity = '0';
//         document.querySelector('.preloader').style.display = 'none';
//     } 


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });


// ----------------Benim Kodlarım Buradan Başlıyor-----------

var CategoriesOptions = ["Bestsellers", "Most Favorites","New In Sale","Best In Sale" ,"All 45% Off"];


function SetSearchCategories(){
    var select1 = document.getElementById("select1");

    CategoriesOptions.forEach((iValue,iIndex)=> {
    var ElementOption = document.createElement("option");
    ElementOption.text = iValue;
    ElementOption.value = iIndex;
    select1.add(ElementOption);
    });

};



var ArrayAllCategories = ["Televisions","Sunglass","Watch","Computers & Tablets","Electronics","Home Appliances","Home Audio & Theater","Video Games","Accessories","Digital Cameras"];

function SetAllCategories(){
    var AllCategories = document.getElementById("AllCategories");
    ArrayAllCategories.forEach((iValue)=>{
    var Elementli = document.createElement("li");
    
    Elementli.innerHTML = '<a href="product-grids.html">' + iValue + '</a>';
    AllCategories.appendChild(Elementli);


    });
};

var Product = {
    Id :0,
    Name :"",
    Price :0,
    ImgSrc :"",

};

var ProductList = [{}];

let NameList = ["Xiaomi Mi Band 5", 
                "Big Power Sound Speaker",
                "WiFi Security Camera",
                "iphone 6x plus",
                "Wireless Headphones",
                "Mini Bluetooth Speaker",
                "PX7 Wireless Headphones",
                "Apple MacBook Air"];

let PriceList = [199.99,275.99,399.99,400.00,350.00,70.00,100.00,899.99];

let ImgSrcList = ["assets/images/products/product-1.jpg",
                  "assets/images/products/product-2.jpg",
                  "assets/images/products/product-3.jpg",
                  "assets/images/products/product-4.jpg",
                  "assets/images/products/product-5.jpg",
                  "assets/images/products/product-6.jpg",
                  "assets/images/products/product-7.jpg",
                  "assets/images/products/product-8.jpg"];

var CartList = [];


for(var i=0 ; i < 8; i++){
ProductList.push(

    Product = {
        Id :i,
        Name :NameList[i],
        Price :PriceList[i],
        ImgSrc :ImgSrcList[i],
    }

);
};


var result = 0;


function AddProductToCart(iIndex) {
    
    var ShoppingList = document.getElementById("ShoppingList");
    var TotalPrice = document.getElementById("TotalPrice");
    var NumberOfItem = document.getElementById("NumberOfItem");
    
    
    NumberOfItem.innerHTML = CartList.length + 1 + " Items";
    

    ShoppingList.innerHTML +=  `<li>
    <a onclick="RemoveAtIndexCartList(${iIndex.Id}); RemoveAtCart(${iIndex});" href="javascript:void(0)" class="remove" title="Remove this item"><i
            class="lni lni-close"></i></a>
    <div class="cart-img-head">
        <div  class="cart-img" href="product-details.html"><img
                src=${ProductList[iIndex].ImgSrc} alt="#"></div>
    </div>

    <div class="content">
        <h4><a href="product-details.html">
        ${ProductList[iIndex].Name} </a></h4>
        <p class="quantity">1x - <span class="amount">$ ${ProductList[iIndex].Price} </span></p>
    </div>
</li>`;


result += ProductList[iIndex].Price;
TotalPrice.innerHTML = "$" + result;


AddCartList(iIndex);
ShowSimpleSweetAlert(iIndex);
SetTotalItems();
};

function AddCartList(iIndex){

    CartList.push(ProductList[iIndex]);
};

function ShowSimpleSweetAlert(iIndex){
    Swal.fire(
        'Success!',
        `"${ProductList[iIndex].Name}" has been added to your card.`,
        'success' );
};

function SetTotalItems(){
    var TotalItems = document.getElementById("TotalItems");
    TotalItems.innerHTML =  CartList.length;
};





function RemoveAtIndexCartList(iIndex){

    CartList.splice(iIndex, 1);
    console.log(CartList);

};

function RemoveAtCart(iIndex){
    var ShoppingList = document.getElementById("ShoppingList");
    ShoppingList.removeChild(ShoppingList.children[iIndex - 2]);

};



