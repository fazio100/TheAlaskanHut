const searchBar = document.querySelector(".search-bar");

const input = searchBar.querySelector("input");

const filterList = searchBar.querySelector(".filter-list");

const searchBtn = searchBar.querySelector("img");

function updateFilters(){
    let value = input.value.toLowerCase();
    for (let filter of filterList.children){

        let text = filter.querySelector("a").textContent.toLowerCase();

        if (text.startsWith(value) && value != "") {
            filter.style.display = "block";
        } else {
            filter.style.display = "none";
        }
    }
}


function search(){
    for (let filter of filterList.children){
        if (filter.style.display != "none"){
            window.location = filter.querySelector("a").href;
        }
    }

}