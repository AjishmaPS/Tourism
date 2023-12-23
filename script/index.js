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