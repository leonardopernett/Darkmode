const bnt = document.getElementById('switch')
const body = document.querySelector('body')


bnt.addEventListener('click', function(){
   this.classList.toggle('active')
   body.classList.toggle('dark')

   if(body.classList.contains('dark')){
      localStorage.setItem('dark',"true")
   }else{
      localStorage.setItem('dark',"false")
   }
})

if(localStorage.getItem('dark') === "true"){
   body.classList.add('dark') 
   bnt.classList.add('active')
}else{
   body.classList.remove('dark') 
   bnt.classList.remove('active')
}