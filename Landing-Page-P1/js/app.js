

//Add section in main body.
function addSections() {
    /*Select all section in main tag to count it by lenght,
    Note: if (sectionLength.length++) & (sectionLength.length) like that will start print Section 0 not Section 1*/
    let sectionLength = document.querySelectorAll("section");
    let sectionCounter = sectionLength.length + 1;

    // Add section tag with attribute in main.
    let addSection = document.createElement("section");
    addSection.setAttribute("id", `section${sectionCounter}`);
    addSection.setAttribute("data-nav-link", `section ${sectionCounter}`);
    //Print section in main tag.
    document.querySelector("main").appendChild(addSection);

    //Add div tag with atrribute in section.
    let divSection = document.createElement("div");
    divSection.setAttribute("class", "landing__container");
    addSection.appendChild(divSection);

    //Add h2 in div.
    let h2Section = document.createElement("h2");
    h2Section.innerHTML = `Section ${sectionCounter}`;
    divSection.appendChild(h2Section);

    //Add p1 in div.
    let p1Section = document.createElement("p");
    p1Section.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
    divSection.appendChild(p1Section);

    //Add p2 in div.
    let p2Section = document.createElement("p");
    p2Section.innerHTML = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
    divSection.appendChild(p2Section);

    //Add li in ul navbar.
    let addLiNav = document.createElement("li");
    document.getElementById("navbar__list").appendChild(addLiNav);

    //Add a tag in li ull navbar with attributes.
    let aLiNav = document.createElement("a");
    aLiNav.setAttribute("class", "menu__link");
    aLiNav.setAttribute("href", `#section${sectionCounter}`);
    aLiNav.setAttribute("data-nav-link", `section ${sectionCounter}`);
    aLiNav.innerHTML = `section ${sectionCounter}`;
    addLiNav.appendChild(aLiNav);
}

//On load page prent 4 Sections & 4 buttons for sections in navBar.
document.addEventListener("DOMContentLoaded", function () {
    for (let onLoad = 1; onLoad <= 4; onLoad++) {
        addSections();
    }
});

//Onclick add new section.
let addSection = document.getElementById("addSection");
addSection.addEventListener("click", function () {
    addSections();
});

//Dynamically add active class & remove.
function viewSection(){
    let getSections = document.querySelectorAll("section");
    for (let viewSectionLen = 0; viewSectionLen < getSections.length; viewSectionLen++){
        let getViewSection = getSections[viewSectionLen];
        let viewPortLength = getViewSection.getBoundingClientRect().top;
        if (viewPortLength <= 100 && viewPortLength >= -200){
            getViewSection.setAttribute("class", "your-active-class");
        }
        else{
            getViewSection.removeAttribute("class", "your-active-class");
        };
    };
};
//Dynamically add active class & remove in scroll.
document.addEventListener('scroll', function(){
    viewSection();
});

//Show go tob button when scroll dowen.
let goTop = document.querySelector(".up");
window.addEventListener("scroll", function () {
    if (this.scrollY > 450) {
        goTop.classList.add("show");
    }
    else {
        goTop.classList.remove("show");
    }
});
//Go top button on click.
goTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
