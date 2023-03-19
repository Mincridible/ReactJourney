const panels = document.querySelectorAll('.panel')

panels.forEach((min) =>{
   min.addEventListener('click', ()=> {
      removeActiveClasses()
      min.classList.add('active')
   })
})

function removeActiveClasses(){
   panels.forEach((min) => {
      min.classList.remove('active')
   })
}