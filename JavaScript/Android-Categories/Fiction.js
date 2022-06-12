//JavaScript

getMobileOperatingSystem();

function getMobileOperatingSystem() {
    let UserAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(UserAgent)) {
        document.getElementById("1984").setAttribute("href", "https://drive.google.com/file/d/12xPWzn2ctLUAY_a8ZivagmDsdc7rWo1V/view?usp=sharing");
        document.getElementById("The-Invisible-Man").setAttribute("href", "https://drive.google.com/file/d/1kc8EnMKMEQQ8ARE74NHl3USDGOkVTLj6/view?usp=sharing");
        document.getElementById("The-Book-Thief").setAttribute("href", "https://drive.google.com/file/d/1oL3aueaLefJoKf1LL6gH0cOOs0AarM9i/view?usp=sharing");
        document.getElementById("Fahrenheit-451").setAttribute("href", "https://drive.google.com/file/d/1kBUnFc-CTxgHODZMZ3f6C__PUVczpWxC/view?usp=sharing");
        document.getElementById("The-Martian").setAttribute("href", "https://drive.google.com/file/d/17XaVB09_uyvTF4NmQqBXKENJXpc9E9fm/view?usp=sharing");
        document.getElementById("Pride-and-Prejudice").setAttribute("href", "https://drive.google.com/file/d/1K5j4om7pMKors0komr9rsx9feo_FFuAg/view?usp=sharing");
    }
}
