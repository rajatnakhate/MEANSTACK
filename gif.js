


let searchgif=()=>{

    let input=document.querySelector("#input").value;
let inputtext=input.toLowerCase();
    let url="https://api.giphy.com/v1/gifs/search?api_key=WFPWdZGE1N17OGpUrpvNZWM60BL7f5H2&q="+inputtext;
    console.log(url);
    let xhr=new XMLHttpRequest();
   xhr.open("GET",url);
    xhr.onload=()=>{
        const refjson=JSON.parse(xhr.responseText)
        console.log(refjson);
        domoperation(refjson);
   }
    xhr.send();
 document.querySelector("#input").innerHTML=" ";
};
let domoperation=(refjson)=>{
    let json=refjson;
    let len=json.data.length;
   for (let i = 0; i< len; i++) {
       let u=json.data[i];
      
       let m=u.images.original.url;
       let parent=document.querySelector("#parent");
       let newel=parent.children[0].cloneNode(true);
       newel.style.display="flex";
      
       
       newel.style.visibility='visible'; 
       newel.children[0].src =m;
       newel.children[0].style.height='150px';
       newel.children[0].style.width='150px';
       parent.insertBefore(newel,parent.firstChild);
   }
    
   
};