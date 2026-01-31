document.addEventListener("DOMContentLoaded", function() {
    fetch("/content").then(res => res.json()).then(
        data => {
            document.getElementById("publisher").value = data.publisher;
            document.getElementById("writer").value = data.writer;
            document.getElementById("subtext").value = data.subtext;
            document.getElementById("title").value = data.title;
            document.getElementById("date").value = data.date;
            document.getElementById("body").value = data.body;
            document.getElementById("location").value = data.location;
        }
    )
})