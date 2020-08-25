let getweather=()=>{
    let cityName=document.querySelector("#inputtext").value;
    console.log(cityName)
    let url ="https://api.openweathermap.org/data/2.5/weather?appid=bf74f3e5fa959df6e129bfa1cbd11b8e&units=metric&q="+cityName;
    console.log(url)
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url);

  xhr.onload=()=>{
        const refjson=JSON.parse(xhr.responseText);
        domOperationHere(refjson);
    }
    xhr.send();
};
let domOperationHere = (refjson) => {
    let json=refjson;
    console.log(json.main);
    
    let maxTemp = json.main.temp_max;
    let parent=document.querySelector("#parent");
    parent.children[0].style.display='flex'
    parent.children[0].children[0].children[0].innerHTML=maxTemp;
    // let newElement=parent.children[0].cloneNode(true);
   // newElement.children[0].innerHTML=maxTemp;
   // parent.insertBefore(newElement,parent.firstChild)
};
