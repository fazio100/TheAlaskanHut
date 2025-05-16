function openTab(tagId){
    document.title = "TAH | " + tagId
    console.log("opening")
    const tabs = document.getElementsByClassName("tab");
    let tabIndex;

    for (let j = 0; j < tabs.length; j++){
        tabs[j].style.display = "none";
    }

    for (let i = 0; i < tabs.length; i++){
        if (tabs[i].id == tagId){
            tabIndex = i
            tabs[i].style.display = "block";            
        }
    }

    const tabbtns = document.getElementsByClassName("tabbtn");


    for (let i = 0; i < tabbtns.length; i++){
        tabbtns[i].style.backgroundColor = "rgb(21,21,21)";
    }


    for (let i = 0; i < tabbtns.length; i++){
        if (tabbtns[i].textContent == tagId){
            tabbtns[i].style.backgroundColor = getComputedStyle(tabs[tabIndex]).backgroundColor;
        }
    }
}


window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tabName = urlParams.get('tab');
    openTab(tabName);
};
