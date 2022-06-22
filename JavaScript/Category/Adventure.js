//JavaScript

let UserAgent = navigator.userAgent || navigator.vendor || window.opera;

let BookDescription = document.getElementById("Book-Description");
let BookTitle = document.getElementById("Book-Title");
let BookCover = document.getElementById("Book-Cover");
let Author = document.getElementById("Author");
let publicationDate = document.getElementById("Publication-Date");
let Pages = document.getElementById("Pages");
let Genre = document.getElementById("Genre");
let ReadButton = document.getElementById("Read-Button");

//Treasure Island
function openTreasureIsland() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "Treasure Island";
    BookCover.setAttribute("src", "/Book-Cover/Treasure-Island-Book-Cover.jpg");
    Author.innerHTML = "Robert Louis Stevenson";
    publicationDate.innerHTML = "1883";
    Pages.innerHTML = "266";
    Genre.innerHTML = "Adventure, Fiction";
    ReadButton.setAttribute("href", "Books/Adventure/Treasure Island.pdf");
    
    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1wNzji0R7rSPdVp-v-_D81xvcNX_TSfNC/view?usp=sharing");
    }
}

//20000 Leagues Under the Sea
function open20000LeaguesUndertheSea() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "20000 Leagues Under <br>the Sea";
    BookCover.setAttribute("src", "/Book-Cover/20000-Leagues-Under-the-Sea-Book-Cover.jpg");
    Author.innerHTML = "Jules Verne";
    publicationDate.innerHTML = "1870";
    Pages.innerHTML = "297";
    Genre.innerHTML = "Science Fiction, Adventure";
    ReadButton.setAttribute("href", "/Books/Adventure/20000 Leagues Under the Sea.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/14-1JckltR7_iewDNl1RLoc1ON-VMezPM/view?usp=sharing");
    }
}

//The War of the Worlds
function openTheWarofTheWorlds() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "The War of the Worlds";
    BookCover.setAttribute("src", "/Book-Cover/The-War-of-the-Worlds-Book-Cover.jpg");
    Author.innerHTML = "H.G. Wells";
    publicationDate.innerHTML = "1897";
    Pages.innerHTML = "157";
    Genre.innerHTML = "Adventure, Science Fiction, Classics";
    ReadButton.setAttribute("href", "/Books/Adventure/The War of the Worlds.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1kPvnnYvoz4CSoZ9KomdQuHvTILw5hg3e/view?usp=sharing");
    }
}

//Around the World in Eighty Days
function openAroundtheWorldinEightyDays() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "Around the World in <br>Eighty Days";
    BookCover.setAttribute("src", "/Book-Cover/Around-the-World-in-Eighty-Days-Book-Cover.jpg");
    Author.innerHTML = "Jules Verne";
    publicationDate.innerHTML = "1872";
    Pages.innerHTML = "201";
    Genre.innerHTML = "Adventure";
    ReadButton.setAttribute("href", "/Books/Adventure/Around the World in 80 Days.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1xhrKhcNQ7zNcRHb0wWKtLwdQFmXMN15W/view?usp=sharing");
    }
}

//The Alchemist
function openTheAlchemist() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "The Alchemist";
    BookCover.setAttribute("src", "/Book-Cover/The-Alchemist-Book-Cover.jpg");
    Author.innerHTML = "Paulo Coelho";
    publicationDate.innerHTML = "1988";
    Pages.innerHTML = "125";
    Genre.innerHTML = "Quest, Adventure, Fantasy";
    ReadButton.setAttribute("href", "Books/Adventure/The Alchemist.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/1jbHTVur345RfHEPjEB7HoygPhbcM_upW/view?usp=sharing");
    }
}

//The Martian
function openTheMartian() {
    BookDescription.style.width = "100%";
    BookTitle.innerHTML = "The Martian";
    BookCover.setAttribute("src", "/Book-Cover/The-Martian-Book-Cover.jpg");
    Author.innerHTML = "Andy Weir";
    publicationDate.innerHTML = "2011";
    Pages.innerHTML = "318";
    Genre.innerHTML = "Science Fiction, Adventure";
    ReadButton.setAttribute("href", "/Books/Adventure/The Martian.pdf");

    if (/android/i.test(UserAgent)) {
        ReadButton.setAttribute("href", "https://drive.google.com/file/d/17XaVB09_uyvTF4NmQqBXKENJXpc9E9fm/view?usp=sharing");
    }
}

//Close Description
function closeDescription() {
    BookDescription.style.width = "0%";
}
