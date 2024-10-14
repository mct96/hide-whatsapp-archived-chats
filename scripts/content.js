function hideArchivedChats() {
    let paneSide = document.getElementById("pane-side");
    
    if (paneSide) {
        const buttons = paneSide.getElementsByTagName("button");
        for (button of buttons) {
            let attribute = button.getAttribute("aria-label");
            if (attribute && attribute.startsWith("Archived")) {
                button.style.display = "none";
                console.log(button);
            }
        }
    }
}
    
intervalLoop = setInterval(hideArchivedChats, 250);

setTimeout(() => {
    console.log("Interval Stopped");
    clearInterval(intervalLoop);
    setInterval(hideArchivedChats, 1000);
}, 10000);
