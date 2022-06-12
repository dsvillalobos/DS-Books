//JavaScript

getMobileOperatingSystem();

function getMobileOperatingSystem() {
    let UserAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(UserAgent)) {
        document.getElementById("Treasure-Island").setAttribute("href", "https://drive.google.com/file/d/1wNzji0R7rSPdVp-v-_D81xvcNX_TSfNC/view?usp=sharing");
        document.getElementById("20000-Leagues-Under-the-Sea").setAttribute("href", "https://drive.google.com/file/d/14-1JckltR7_iewDNl1RLoc1ON-VMezPM/view?usp=sharing");
        document.getElementById("The-War-of-the-Worlds").setAttribute("href", "https://drive.google.com/file/d/1kPvnnYvoz4CSoZ9KomdQuHvTILw5hg3e/view?usp=sharing");
        document.getElementById("Around-the-World-in-Eighty-Days").setAttribute("href", "https://drive.google.com/file/d/1xhrKhcNQ7zNcRHb0wWKtLwdQFmXMN15W/view?usp=sharing");
        document.getElementById("The-Alchemist").setAttribute("href", "https://drive.google.com/file/d/1jbHTVur345RfHEPjEB7HoygPhbcM_upW/view?usp=sharing");
        document.getElementById("The-Martian").setAttribute("href", "https://drive.google.com/file/d/17XaVB09_uyvTF4NmQqBXKENJXpc9E9fm/view?usp=sharing");
    }
}
