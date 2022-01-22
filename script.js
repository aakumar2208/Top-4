const data = {
    mainTitle: "Random 4 things I want in Life!",
    cardContents: [
      {
        name: "#A beautiful Sunrise",
        imageLink:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "#An Aesthetic Bedroom",
        imageLink:
          "https://i.pinimg.com/originals/f2/62/e4/f262e42b82df99211aa4362d606bbcb0.jpg",
      },
      {
        name: "#A nice Job",
        imageLink:
          "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWljcm9zb2Z0JTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "#Time to focus",
        imageLink:
          "https://i.pinimg.com/originals/31/24/1d/31241dcd1a590862929d45d7fbcef270.jpg",
      },
    ],
    userData: { name: "Ashna A Kumar", tagLine: "Baby steps into the world of web!" },
  };
  
  
  // Plug in title data to HTML
  let mainTitleElement = document.getElementById("main-title");
  mainTitleElement.innerHTML += data.mainTitle;
  
  
  // Create template for card content
  let getCardStructure = (name, imageLink) => {
    return `<div class="col-12 col-sm-6 mb-4">
    <div class="tile">
      <div class="tile-text text-center">
        <h5>${name}</h5>
      </div>
      <img 
        src="${imageLink}" />
    </div>
  </div>`;
  };
  
  let cardRow = document.getElementById("card-row");
  
  // Plug in card data to HTML
  data.cardContents.forEach((cardContent) => {
    let { name, imageLink } = cardContent;
    cardRow.innerHTML += getCardStructure(name, imageLink);
  });
  
  // Create template for footer content
  let getFooterStructure = (name, tagLine) => {
    return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
      <p>${tagLine}</p>`;
  };
  
  let footerContent = document.getElementById("footer");
  let { name, tagLine } = data.userData;
  
  // Plug in footer data to HTML
  footerContent.innerHTML += getFooterStructure(name, tagLine);
  