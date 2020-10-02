const tab4 = document.querySelector('.horizontal-scroll-content-4');
const tab3 = document.querySelector('.horizontal-scroll-sticky-3');
const tab2 = document.querySelector('.horizontal-scroll-container-2');


console.log(tab4.scrollWidth)
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(tab4Width + window.innerWidth + window.innerHeight)

function calcDynamicHeight(e) {
    const tab4Width = tab4.scrollWidth;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    const widwid = tab4Width - vw + vh + 150;
    tab2.style.height = `${widwid}px`;
    console.log(`this is width ${widwid}`)
    // return (tab4Width + vw + vh + 150);
};  
console.log(calcDynamicHeight())

function slide(e) {
    const toptop = tab3.offsetTop;
    tab4.style.transform = `translateX(-${toptop}px)`;
    console.log(toptop)
}

function stickydiv(e) {
    const toptop = tab3.offsetTop;
    tab3.style.width = `${toptop}px`
}
window.addEventListener('scroll', slide)
window.addEventListener('load', calcDynamicHeight)
// window.addEventListener('resize', stickydiv)
