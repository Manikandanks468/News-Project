const navbar = document.querySelector("#show");
const menuBtn = document.querySelector("#btn");
const cancelbtns=document.querySelector("#canbtan");








async function fetcing(categorys){
  
    		window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
    const url ="https://inshortsapi.vercel.app/news?category=";
       let resdata = await fetch(url+`${categorys}`, {method:"GET"})
      console.log(resdata)
      // if(!resdata){
      //     
      // }
      let jsdata = await resdata.json()
      const dataes=jsdata.data
      return dataes;
  
      }
    

     
  
   async function views(category){
      const datas=await fetcing(category)
  
       document.querySelector(".container").innerHTML=``
      
    
    for(let i=0; i<datas.length; i++){
        const author=datas[i].author
         const img=datas[i].imageUrl
         const content=datas[i].content
         const title=datas[i].title
         const readmore=datas[i].readMoreUrl
         console.log(content)
          
         document.querySelector(".container").innerHTML+=`
         <div class="card" >
    <img src=${img} alt="" id="image">
  
  <div class="text">
  <p class="title">${title}</p>
  <p class="content">${content}</p>
  <div class="foot">
   <p class="author">--${author}</p>
   <button><a href="${readmore}">Read More</a></button>
   </div>
  </div>
  </div>`
   }
  }
  
  
  
  //const body = document.querySelector("body");
 
 
  //const cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick= ()=>{
    document.getElementById("show").style.display="block";
   
  }
    // menuBtn.onmouseover= ()=>{
    //   document.getElementById("show").style.display="block";
    
    // }
  // menuBtn.onmouseout = ()=>{
  //   document.getElementById("show").style.display="none";
   
  // }
  
  cancelbtns.onclick = ()=>{
    document.getElementById("show").style.display="none";
   
  }
  navbar.onclick = ()=>{
    document.getElementById("show").style.display="none";
   
  }
   views('all')
 