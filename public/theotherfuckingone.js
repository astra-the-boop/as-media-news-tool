document.addEventListener("DOMContentLoaded", function() {
    fetch("/content").then(res => res.json()).then(
        data => {
            document.getElementById("publisher").value = data.publisher;
            document.getElementById("title").value = data.title;
            document.getElementById("date").value = data.date;
            document.getElementById("body").value = data.body;
        }
    )
})