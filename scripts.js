const bioIndex = 0;
const projectsIndex = 1;
const profIndex = 2;

const items = ["bioLink", "projectsLink", "profLink"]

var bio;
var projects;
var prof;

var sections;

document.addEventListener("DOMContentLoaded", function() {
    bio = document.getElementById("Biography");
    projects = document.getElementById("Projects");
    prof = document.getElementById("Professional");

    sections = [bio, projects, prof];

    showSection(bioIndex)

    document.getElementById("bioLink").addEventListener("click", function() {
        showSection(bioIndex);
    });
    
    document.getElementById("projectsLink").addEventListener("click", function() {
        showSection(projectsIndex);
    });
    
    document.getElementById("profLink").addEventListener("click", function() {
        showSection(profIndex);
    });
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
        icon.style.transform = "rotate(0deg)";  // Reset arrow
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; // Expand
        content.classList.add("open");
        icon.style.transform = "rotate(180deg)";  // Rotate arrow
    }
}