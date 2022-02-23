// This file allow to dynamically fetch the books from API and display in webpage.

var portfolioRowContainer = document.getElementById("books-collections");
getNewBooks();

function getNewBooks(){
    
    var request = new XMLHttpRequest();
    request.open("POST", "https://api.itbook.store/1.0/new");
    request.send();
    request.addEventListener("load", function(event){
        var newBooksCollection = JSON.parse(event.target.responseText);
        console.log(newBooksCollection.books)
        books = newBooksCollection.books;
        for(var i = 0; i < books.length; i++){   
            createBookPortfolio(books[i]["title"], books[i]["image"], books[i]["isbn13"], books[i]["price"], books[i]["url"]);
        }
            
    });
}

function createBookPortfolio(bookTitle, bookImage, bookISBN, bookPrice, bookURL){
    var parent = portfolioRowContainer;
    var portfolio_col = document.createElement("div");
    portfolio_col.setAttribute("class", "portfolio-col");
    portfolio_col.setAttribute("id", "city-crawle");
    portfolio_col.setAttribute("onclick", bookURL);
    portfolio_col.style.pointerEvents = "None";
    
    var imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "project-img");
    imageDiv.style.pointerEvents = "None";

    var image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("id", "imageId");
    image.style.width = "40%";
    image.style.marginTop = "20px";
    image.setAttribute("src", bookImage);
    image.setAttribute("alt", "image");
    imageDiv.appendChild(image);
    portfolio_col.appendChild(imageDiv)
    
    var title = document.createElement("p");
    title.setAttribute("id", "title");
    title.style.fontSize = "15px";
    title.innerHTML = bookTitle
    portfolio_col.appendChild(title);

    var isbn13 = document.createElement("p");
    isbn13.setAttribute("id", "description");
    isbn13.style.fontSize = "10px";
    isbn13.innerHTML = "ISBN13 : " + bookISBN;
    portfolio_col.appendChild(isbn13);

    var price = document.createElement("p");
    price.setAttribute("id", "price");
    price.style.fontSize = "15px";
    price.style.paddingTop = "0px"
    price.innerHTML = bookPrice
    portfolio_col.appendChild(price);
    
    parent.appendChild(portfolio_col);
}
