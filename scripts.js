const bioIndex = 0;
const hobbyIndex = 1;
const projectsIndex = 2;
const profIndex = 3;

const items = ["bioLink", "hobbyLink", "projectsLink", "profLink"]
var years;
var currentYear = 0;

var bio;
var hobbies;
var projects;
var prof;

var sections;

document.addEventListener("DOMContentLoaded", function() {
    bio = document.getElementById("Biography");
    hobbies = document.getElementById("Hobbies");
    projects = document.getElementById("Projects");
    prof = document.getElementById("Professional");

    first = document.getElementById("1st");
    second = document.getElementById("2nd");
    third = document.getElementById("3rd");

    sections = [bio, hobbies, projects, prof];
    years = [first, second, third];

    DisplayYear(currentYear);

    showSection(bioIndex)

    document.getElementById("bioLink").addEventListener("click", function() {
        showSection(bioIndex);
    });

    document.getElementById("hobbyLink").addEventListener("click", function() {
        showSection(hobbyIndex);
    });
    
    document.getElementById("projectsLink").addEventListener("click", function() {
        showSection(projectsIndex);
    });
    
    document.getElementById("profLink").addEventListener("click", function() {
        showSection(profIndex);
    });


    //Skills Carousel Section
    const skillsContainer = document.querySelector(".skills-container");

    let isDragging = false;
    let startX;
    let scrollLeft;

    skillsContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        scrollLeft = skillsContainer.scrollLeft;
        skillsContainer.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const x = e.clientX - startX;
        skillsContainer.scrollLeft = scrollLeft - x;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        skillsContainer.style.cursor = "grab";
    });

//------------------------------------------------------------------------------------
});



// Function to show the selected section and hide others
function showSection(index) {
     for(let i = 0; i < sections.length; i++){
        let currentTab = document.getElementById(items[i]);

        if (i === index) {
            sections[i].classList.remove("hidden"); // Show the section
            
            currentTab.classList.add("nav-item-selected");

            let iframe = sections[i].querySelector("iframe");
            if (iframe) iframe.style.display = "block";
        } else {
            sections[i].classList.add("hidden"); // Hide the section
            currentTab.classList.remove("nav-item-selected");
            
            let iframe = sections[i].querySelector("iframe");
            if (iframe) iframe.style.display = "none"; // Ensure the iframe is also hidden
        }
    }
}

function toggleAccordion(element) {
    let content = element.nextElementSibling;
    let icon = element.querySelector(".toggle-icon");

    if (content.classList.contains("open")) {
        content.style.maxHeight = "0px";  // Collapse
        content.classList.remove("open");
        icon.style.transform = "rotate(360deg)";  // Reset arrow
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand
        content.classList.add("open");
        icon.style.transform = "rotate(180deg)";  // Rotate arrow
    }
}

function DisplayYear(num){
    years.forEach((year, i) => {
        console.log(year);
        console.log((i === num));
        if(i === num){
            year.classList.add("table-section-selected");
            year.classList.remove("table-section");
        }else{
            year.classList.add("table-section");
            year.classList.remove("table-section-selected");
        }
    });
}

function NextSection(){
    if(currentYear < 2) currentYear++;
    else currentYear = 0;

    DisplayYear(currentYear);
}

function PrevSection(){
    if(currentYear > 0) currentYear--;
    else currentYear = 2;

    DisplayYear(currentYear);
}