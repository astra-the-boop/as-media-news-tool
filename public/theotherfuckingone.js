document.addEventListener("DOMContentLoaded", function() {
    fetch("/as-media/content").then(res => res.json()).then(
        data => {
            document.getElementById("publisher").value = data.publisher;
            document.getElementById("writer").value = data.writer;
            document.getElementById("subtext").value = data.subtext;
            document.getElementById("title").value = data.title;
            document.getElementById("date").value = data.date;
            document.getElementById("body").value = data.body;
            document.getElementById("location").value = data.location;
            document.getElementById("image").value = data.image;
            document.getElementById("imgAlt").value = data.imgAlt;
        }
    )
    document.getElementById("image").addEventListener("change", function() {
        document.getElementById("imgPreview").innerHTML = `<img src='${document.getElementById("image").value}'  alt="${document.getElementById("imgAlt").value}"> `
    });

    document.getElementById("imgAlt").addEventListener("change", function() {
        document.getElementById("imgPreview").innerHTML = `<img src='${document.getElementById("image").value}'  alt="${document.getElementById("imgAlt").value}"> `
    });
})