window.addEventListener('load',() =>
{
    const loader=document.querySelector('.loader');
    loader.classList.add("loader--hidden");
});
window.addEventListener('offline',() =>
{
    alert("Sorry!Your internet connection has droped out..");
});
window.addEventListener('online', () =>
{
    alert("Back Online");
});


document.addEventListener("click",function (e)
{
    if(e.target.classList.contains("gallery-item"))
    {
        const src= e.target.getAttribute("src");
        document.querySelector(".modal-img").src=src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})