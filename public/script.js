document.addEventListener('DOMContentLoaded', function(){
    fetch("/content").then(res => res.json()).then(
        data => {
            document.getElementById("title").textContent = data.title;
            document.getElementById("body").innerHTML = data.body;
        }
    )
});
