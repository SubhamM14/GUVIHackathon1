
// Describing the first container


const container = document.createElement("div");
container.className = "container";
container.innerHTML = `

<h1 class="header"> The MakeUp Store </h1>
<h6 class="sub-head">(Using Makeup API)</h6>
<p class="para1">Here at The MakUp Store, we offer the widdest range of cosmetics and makeup products using the MakeUp API. Thus, you find everything under one roof.</p>
<p class="para2">So, come and be a part of the best shopping experience!</p>

<div class="search-box">
  <input  class="search-text" type="text" name="" placeholder="Search Products">
  <a onclick ="searchData()" class="search-btn" href="#">
  <i class="fas fa-search"></i>
  </a>
</div>
<div class="all-image">
<div class="img-container1">
<img src="https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png" >
</div>
<div class="img-container2">
<img src="https://makeup-api.herokuapp.com/assets/lips-c35ec4a3350ec779c6bf6a785981ad9ef2e21bd9fe26a2be1c766d56edb2e11f.png" >

 </div> 
 <div class="img-container1"> 

  <img src="https://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png" >
  
</div>

<div class="img-container1">

<img src="https://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png" >
  
</div>
  <div class="img-container1">
<img src="https://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png" >
</div>
  </div>
  
`;

// Describing the Second container

const container2 = document.createElement("div");
container2.className = "container";
container2.innerHTML = `

<h2 class="product-head">Product Types</h2>
<ul class="product-list">
    <div class="items-list">
        <li class="product-list"><img class="icon-img" src="blush.svg" alt="Blush" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=blush">Blush</a></li>
        <li class="product-list"><img class="icon-img" src="bronzer.svg" alt="Bronzer" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=bronzer">Bronzer</a></li>
        <li class="product-list"><img class="icon-img" src="eyebrow.svg" alt="Eyebrow" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=eyebrow">Eyebrow</a></li>
        <li class="product-list"><img class="icon-img" src="eyeliner.svg" alt="Eyeliner" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=eyeliner">Eyeliner</a></li>
        <li class="product-list"><img class="icon-img" src="eyeshadow.svg" alt="Eyeshadow" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=eyeshadow">Eyeshadow</a></li>
        <li class="product-list"><img class="icon-img" src="foundation.svg" alt="Foundation" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=foundation">Foundation</a></li>
        <li class="product-list"><img class="icon-img" src="lip_liner.svg" alt="lip_liner" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=lip_liner">Lip Liner</a></li>
        <li class="product-list"><img class="icon-img" src="lipstick.svg" alt="Lipstick" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=lipstick">Lipstick</a></li>
        <li class="product-list"><img class="icon-img" src="mascara.svg" alt="Mascara" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=mascara">Mascara</a></li>
        <li class="product-list"><img class="icon-img" src="nail_polish.svg" alt="nail_polish" />	<a class="product-category" href="http://makeup-api.herokuapp.com/api/v1/products?product_type=nail_polish">Nail Polish</a></li>



    </div>
    <h2 class="product-head">All Our Products are Right Here!</h2>
</ul>


`;

// Describing the Third container

// if(searchData()){
//     const container3 = document.createElement("div");
//     container3.className = "container-product";
//     container3.innerHTML = `

// <div id="cards">
//     <div class = "container1">
//         <img src="" alt="img" class="makeUp-products">
//         <div class = "info">
//             <h2>Brand</h2>
//             <p><span class = "side-heading">Description </span>- productType</p>
//             <p><span class = "side-heading">Category:</span> category</p>
//             <p><span class = "side-heading">priceSign</span>price</p>
//         </div>
//     </div>
// </div>
// <br>
// `;
// }

const container3 = document.createElement("div");
    container3.className = "container-product";
    container3.innerHTML = `

<div id="cards">
    <div class = "container1">
        <img src="" alt="img" class="makeUp-products">
        <div class = "info">
            <h2>Brand</h2>
            <p><span class = "side-heading">Description </span>- productType</p>
            <p><span class = "side-heading">Category:</span> category</p>
            <p><span class = "side-heading">priceSign</span>price</p>
        </div>
    </div>
</div>
<br>
`;



// Describing the Footer container

const footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = `

<div class = "footer-main">
<p class="fp1"><i class="fa-solid fa-copyright"></i>Developed by Subham Mukherjee</p>
<p class="fp2"><i class="fa-brands fa-github">&nbsp</i><i class="fa-brands fa-linkedin">&nbsp</i><i class="fa-brands fa-instagram"> </i></p>
</div>

`;


document.body.append(container,container2,container3,footer);

// async function allData() {
//   try {
//     const getData = await fetch(
//       "http://makeup-api.herokuapp.com/api/v1/products.json"
//     );
//     const products = await getData.json();
//     console.log(products);
//   } catch (err) {
//     console.log("Error");
//   }
// }
// allData();

// Defining the async function

async function allData() {
  try {
    const getData = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const products = await getData.json();
    //console.log(products);

        let data1 = "";
        products.map((values) => {
         data1+= `<div class = "container1">
         <img class = "makeUp-products"
         src=${values.image_link} >
         <div class = "info">
         <h2>${values.brand}</h2>
         <p><span class = "side-heading">${values.name} </span>${values.product_type} </p>
         <p><span class = "side-heading">Category:</span> ${values.category}</p>
         <p><span class = "side-heading">${values.price_sign}</span>${values.price}</p>
         </div>
    </div>`
        });

        document.getElementById("cards").innerHTML = data1;
        
  } catch (err) {
    console.log("Error");
  }
}
allData();


function searchData() {
  console.log("searching...");
  const search = document.querySelector(".search-text").value;
  const theData = search;
  console.log(theData);

  async function allData() {
      try {
          const getData = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
          const products = await getData.json();
          console.log(products);
          console.log(theData);
          const filteredInfo = products.filter((value) =>{
              if(value.brand === theData){
                  return value.brand;
                }
              else if(value.name === theData){
                    return value.name;
              }
              else if(value.category === theData){
                  return value.category;
                }
              else if(value.product_type === theData){
                  return value.product_type;
                }
              else if(value.product_colors[1] === theData){
                  return value.product_colors;
                }
              else if(value.tag_list[1] === theData){
                  return value.tag_list;
                }
            })
        console.log(filteredInfo);
    } catch (err) {
        console.log("Error");
    }
}
allData();

}

function notify(){
    alert("Please wait for the API to load for full experience.");
}
notify();