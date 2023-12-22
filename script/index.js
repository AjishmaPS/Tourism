// window.addEventListener('load',() =>
// {
//     const preloaderWrapper=document.querySelector('.loader');
//     preloaderWrapper.classList.add("loader-hidden");
//     preloaderWrapper.addEventListener('onload',() =>
//     {
//         document.body.removeChild("preloaderWrapper");
//     })
// });
window.addEventListener('offline',() =>
{
    alert("Sorry!Your internet connection has droped out..");
});
window.addEventListener('online', () =>
{
    alert("Back Online");
});