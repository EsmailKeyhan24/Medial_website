const btnsearch=document.getElementById('btnsearch')
const search=document.querySelector('.search')

btnsearch.addEventListener('click' , ()=>{
    search.classList.toggle('show')
})