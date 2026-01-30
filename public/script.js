document.addEventListener('DOMContentLoaded', function(){
    fetch("/content").then(res => res.json()).then(
        data => {
            document.getElementById("title").textContent = data.title;
            document.getElementById("body").innerHTML = marked.parse(data.body);
            document.getElementById("date").innerHTML = Intl.DateTimeFormat("en-US", {year:"numeric", month:"long", day:"numeric"}).format(new Date(data.date));
            document.getElementById("publisher").innerHTML = data.publisher;
            document.title = data.title;
        }
    )
});
