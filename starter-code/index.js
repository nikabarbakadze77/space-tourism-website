const button = document.getElementById('burger')
const nav = document.querySelector('header nav')

function toggleBurger() {
    if (nav.classList.contains('open')) {
        button.classList.remove('open')
        nav.classList.remove('open')
    } else {
        button.classList.add('open')
        nav.classList.add('open')
    }
}
 
button.addEventListener("click", toggleBurger())


let planetImg = document.getElementById("planet");
let moonName = document.getElementById("moon-name");
let moonDesc = document.getElementById("moon-desc");
let moonDistance = document.getElementById("dis-value");
let estTravel = document.getElementById("time-value");

const planets = document.querySelectorAll('.planet-navbar ul li')

const planetData = {
    moon: {
        img: 'assets/destination/image-moon.webp',
        name: 'MOON',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        estTravel: '3 DAYS'
    },
    mars: {
        img: 'assets/destination/image-mars.webp',
        name: 'MARS',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL.',
        estTravel: '9 month'
    },
    europa: {
        img: 'assets/destination/image-europa.webp',
        name: 'EUROPA',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '328 MIL KM',
        estTravel: '3 YEAR',
    },
    titan: {
        img: 'assets/destination/image-titan.webp',
        name: 'TITAN',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.7 BIL KM',
        estTravel: '7 YEARS',
    },

}


function clearActives() {
    for(let planet of planets) {
        planet.classList.remove('planet-navbar-active')
    }
}

window.addEventListener('load',desFunc);
function desFunc(){

    for( let planet of planets) {
        planet.onclick = function(){
            const type = planet.type
            const data = planetData[type]

            if (!data) {
                return false
            }

            planetImg.src = data.img;
            moonName.innerHTML = data.name;
            moonDesc.innerHTML = data.description;
            moonDistance.innerHTML = data.distance;
            estTravel.innerHTML = data.estTravel;
           
            clearActives()
            planet.classList.add('planet-navbar-active')

        }
    }

}



let circles = document.querySelectorAll('.nav-circles');

let profession = document.getElementById('profession');
let crewName = document.getElementById('name');
let biography = document.getElementById('biography');
let image = document.getElementById('person');

const crewData = {
    commander: {
        img: 'assets/crew/image-douglas-hurley.png',
        profession: 'COMMANDER',
        name: 'DOUGLAS HURLAY',
        biography: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    }

}

window.addEventListener('load',crewFunc);

function crewFunc () {
    crewNav1.classList.add("nav-circles-active");
    crewNav1.onclick = function () {
        image.src = "assets/crew/image-douglas-hurley.png";
        profession.innerHTML = "COMMANDER";
        crewName.innerHTML = "DOUGLAS HURLAY";
        biography.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
        crewNav1.classList.add("nav-circles-active");
        crewNav2.classList.remove("nav-circles-active");
        crewNav3.classList.remove("nav-circles-active");
        crewNav4.classList.remove("nav-circles-active");
    }

    crewNav2.onclick = function () {
        image.src = "assets/crew/image-anousheh-ansari.png";
        profession.innerHTML = "FLIGHT ENGINEER";
        crewName.innerHTML = "ANOUSHEG ANSARI";
        biography.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
        crewNav1.classList.remove("nav-circles-active");
        crewNav2.classList.add("nav-circles-active");
        crewNav3.classList.remove("nav-circles-active");
        crewNav4.classList.remove("nav-circles-active");
    }

    crewNav3.onclick = function () {
        image.src = "assets/crew/image-victor-glover.png";
        profession.innerHTML = "PILOT"
        crewName.innerHTML = "VICTOR GLOVER";
        biography.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
        crewNav1.classList.remove("nav-circles-active");
        crewNav2.classList.remove("nav-circles-active");
        crewNav3.classList.add("nav-circles-active");
        crewNav4.classList.remove("nav-circles-active");
    }

    crewNav4.onclick = function () {
        image.src = "assets/crew/image-mark-shuttleworth.png";
        profession.innerHTML = "Mission Specialist";
        crewName.innerHTML = "MARK SHUTTLEWORTH";
        biography.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
        crewNav1.classList.remove("nav-circles-active");
        crewNav2.classList.remove("nav-circles-active");
        crewNav3.classList.remove("nav-circles-active");
        crewNav4.classList.add("nav-circles-active");
    }
}
