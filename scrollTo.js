const nav = document.querySelector("nav");
const mainBlock = document.querySelector(".main-block");
const aboutMe = document.querySelector(".about-me");
const skills = document.querySelector(".skills");
const portfolio = document.querySelector(".portfolio");

const navHeight = +getComputedStyle(nav).height.slice(0,2) + +getComputedStyle(nav).marginTop.slice(0,2);
const mainBlockHeight = +getComputedStyle(mainBlock).height.slice(0,3) + +getComputedStyle(mainBlock).marginBottom.slice(0,3);
const aboutMeHeight = +getComputedStyle(aboutMe).height.slice(0,3);
const skillsHeight = +getComputedStyle(skills).height.slice(0,3);
const portfolioHeight = +getComputedStyle(portfolio).height.slice(0,4);

const navAboutMe = nav.querySelector("#about_me");
const navSkills = nav.querySelector("#skills");
const navPortfolio = nav.querySelector("#portfolio");
const navContacts = nav.querySelector("#contacts");

const scrollAboutMe = () => {
    window.scrollTo({
        top: `${navHeight + mainBlockHeight + 2}`,
        behavior: "smooth"
    })
}
const scrollSkills = () => {
    window.scrollTo({
        top: `${navHeight + mainBlockHeight + aboutMeHeight + 4}`,
        behavior: "smooth"
    })
}
const scrollPortfolio = () => {
    window.scrollTo({
        top: `${navHeight + mainBlockHeight + aboutMeHeight + skillsHeight + 7}`,
        behavior: "smooth"
    })
}
const scrollContacts = () => {
    window.scrollTo({
        top: `${navHeight + mainBlockHeight + aboutMeHeight + skillsHeight + portfolioHeight}`,
        behavior: "smooth"
    })
}

navAboutMe.onclick = scrollAboutMe;
navSkills.onclick = scrollSkills;
navPortfolio.onclick = scrollPortfolio;
navContacts.onclick = scrollContacts;