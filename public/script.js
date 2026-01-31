document.addEventListener('DOMContentLoaded', function(){
    fetch("/content").then(res => res.json()).then(
        data => {
            document.getElementById("title").textContent = data.title;
            document.getElementById("body").innerHTML = marked.parse(data.body);
            if(document.getElementById("body").querySelector("p")){
                document.getElementById("body").querySelector("p").insertAdjacentHTML("afterbegin", "<span id='location'></span>")
            }
            document.getElementById("date").innerHTML = Intl.DateTimeFormat("en-US", {year:"numeric", month:"long", day:"numeric"}).format(new Date(data.date));
            document.getElementById("publisher").innerHTML = data.publisher;
            document.getElementById("subtext").innerHTML = data.subtext;
            document.getElementById("writer").innerHTML = `${data.writer.toUpperCase()}`;
            document.title = data.title;
            document.getElementById("location").innerHTML = `${data.location.toUpperCase()} - `;
        }
    )
});
