document.addEventListener('DOMContentLoaded', () => {document.getElementById("editor").addEventListener("change", async function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    await fetch("/update", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({...data,
            timestamp:new Date().toISOString()})
    });

    alert("updated");
})})
