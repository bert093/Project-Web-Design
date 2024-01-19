// ----------- About Tabs ----------- 
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");

    }
});

// Portofolio Item Details Popup
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortofolioPopup();
        // document.querySelector(".portofolio-popup").scrollTo(0,0);
        portofolioItemDetails(e.target.parentElement);
    }
})
function togglePortofolioPopup(){
    document.querySelector(".portofolio-popup").classList.toggle("open")
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortofolioPopup);

// hide popup when click img outside of it
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortofolioPopup();
    }
});
function portofolioItemDetails(portofolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portofolioItem.querySelector(".portofolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portofolioItem.querySelector(".portofolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portofolioItem.querySelector(".portofolio-item-details").innerHTML;
}
// // Toggle Navbar