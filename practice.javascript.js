

let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
  let country=document.querySelector("input").value;

 let colleges=await getColleges(country);
 show(colleges);

});
function show(colleges){
 
  let list=document.querySelector("#list")
  list.innerText="";
  for (col of colleges){
    console.log(col.name);

    let li=document.createElement("li");
    li.innerText=col.name;
    list.appendChild(li);
  
  }

}

async function getColleges(country){
  try{
  let res=await axios.get(url+country);
 return res.data ;
}
catch(e){console.log("error:",e);
return "no result found";}
 
}

