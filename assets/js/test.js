// setTimeout(
//     () => {
//         console.log('bonjour RT3');
//     }, 2000
// );
// i = 5;
// x = setInterval(function () {
//     console.log(i--);
//     if (i === 0) clearInterval(x);
// }, 1000);

var element = document.querySelector("#test");
console.log(element);
setInterval(
    function () {
        console.log('cc');
        element.classList.toggle('lampe');
    },2000
)
