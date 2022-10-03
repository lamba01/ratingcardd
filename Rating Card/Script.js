
let rate = document.querySelectorAll("input");
rate.forEach(input => {
    input.addEventListener('click', function rating() {
        rate.forEach(btn => btn.classList.remove('active'))
        this.classList.add('active'); 
    })
})




function rating(sender) {
        let x = sender.value;
    localStorage.setItem("value", x)
}
let y = document.getElementById("selection");
y.innerText = localStorage.getItem("value");


function submit() {
    {
        window.location.href = "Thankspage.html"
    }
                 
}