const key="XZ4KmGLgKC8PlFvJn7gvMzdLo0ngSMO6zs8C4AdxbQSgT2LQQTedqIV9";
const photo =document.querySelector('.photos');
const form = document.querySelector('.form');
const searchInput= document.querySelector('.search');
const more= document.querySelector('.more');
let searchTerm;
let page=1;
let link;
let currentSearch;

searchInput.addEventListener('input',updateValue)
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    searchPhotos(searchTerm)
    currentSearch=searchTerm
})
function updateValue(e){
searchTerm = e.target.value;
console.log(searchTerm)
}


 async function curated(){
    link= "https://api.pexels.com/v1/curated?per_page=10";
    const response = await fetch(link,{
        method:"GET",
        headers:{
            Accept:"application/json",
            Authorization:key
        }
    });
   const data =await response.json();
   console.log(data)
   data.photos.forEach(images =>{
    const image = document.createElement('div');
    image.classList.add('photos');
    image.innerHTML =`<img src=${images.src.large}</img>
    <p>${images.photographer}</p>`;
    photo.appendChild(image)
   })
   
}
async function searchPhotos(term){
    remove()
    link =`https://api.pexels.com/v1/search?query=${term}&per_page=8`
const response = await fetch(link,{
    method:"GET",
    headers:{
        Accept:"application/json",
        Authorization:key
    }
});
const data =await response.json();
console.log(data)
data.photos.forEach(images =>{
 const image = document.createElement('div');
 image.classList.add('photoss');
 image.innerHTML =`
 <div class="jsphoto">
  <p>${images.photographer}</p>
 <img src=${images.src.large}</img>
 <a href=${images.src.original}>download</a> </div>
 `;
 photo.appendChild(image)
})


}
searchPhotos();
function remove(){
    photo.innerHTML="";
}
more.addEventListener('click',load)
async function load(){
    page++
    if(currentSearch){
        link=`https://api.pexels.com/v1/search?query=${currentSearch}&per_page=8`;
    }
    else{
        link=`https://api.pexels.com/v1/curated?per_page=10&page=${page}`;
    }
    const response = await fetch(link,{
        method:"GET",
        headers:{
            Accept:"application/json",
            Authorization:key
        }
    });
   const data =await response.json();
   console.log(data)
   data.photos.forEach(images =>{
    const image = document.createElement('div');
    image.classList.add('photoss');
    image.innerHTML =`
 <div class="jsphoto"> 
 <p>${images.photographer}</p>
 <img src=${images.src.large}</img>
 <a href=${images.src.original}>download</a> </div>
 `;
    photo.appendChild(image)
   })
   
}
async function searchPhotos(term){
    remove()
    link =`https://api.pexels.com/v1/search?query=${term}&per_page=8`
const response = await fetch(link,{
    method:"GET",
    headers:{
        Accept:"application/json",
        Authorization:key
    }
});
const data =await response.json();
console.log(data)
data.photos.forEach(images =>{
 const image = document.createElement('div');
 image.classList.add('photoss');
 image.innerHTML =`
 <div class="jsphoto"> 
 <p>${images.photographer}</p>
 <img src=${images.src.large}</img>
 <a href=${images.src.original}>download</a> </div>
 `;
 photo.appendChild(image)
})

}


curated();