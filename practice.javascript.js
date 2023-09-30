let url="http://universities.hipolabs.com/search?name=";


let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
  let country=document.querySelector("input").value;
console.log(country);
 let colleges=await getCollege(country);
 
 show(colleges);
});
function show(colleges){
  let list=document.querySelector("#list");
  list.innerText="";
  for(col of colleges) {
    console.log(col.name);
  let li=document.createElement("li");
  li.innerText=col.name;
  list.appendChild(li);
}
}

async function getCollege(country){
  try{
    let res=await axios.get(url+country);
  return res.data;} //(college)
 
  catch(error){console.log("error:",error);
return "No result found";}
}

// fetch(url)
// .then((response)=>{
   
//      return response.json();
// })
// .then((data)=>{
//     console.log("data 1=",data.fact)
//     return fetch(url) ;
// })
// .then((response)=>{
   
//     return response.json();
// })
// .then((data)=>{
//     console.log("data 2=",data.fact)
// })
// .catch((error)=>{
//     console.log("ERROR-",error);});

// async function facts(){
//     try{let res= await fetch(url);
//     let data= await res.json();
//     console.log(data.fact);

//     let res2=await fetch(url)
//     let data2=await res2.json()
//     console.log(data2.fact)
// }catch(error){
//     console.log(error)
// } console.log("chipkali");
// }


// let btn=document.querySelector("button")

// btn.addEventListener("click",async()=>{
//    let fact= await getFacts();
//    console.log(fact);
//    let p=document.querySelector("#result");
//    p.innerText=fact;
// });


// async function getFacts(){
//     try  {
//        let res=await axios.get(url);
//    return res.data.fact;
//       }
//    catch(err){
//    console.log("error=",err);
//    return "no result found";}
//    }
// let url="https://catfact.ninja/fact";











// let btn=document.querySelector("button");


// btn.addEventListener("click",async()=>{
//   let country=document.querySelector("input").value;
// console.log(country);


//   let colleges= await getColleges(country);

//   Show(colleges)
// });




// function Show(colleges){
//   let list=document.querySelector("#list")
//   list.innerText=""
//   for(col of colleges)
//     let li=document.createElement("li")
//      li.innerText=col.name;
//      list.appendChild(li)
    

//   }
// }

// async function getColleges(country){
//   try{
//     let res= await axios.get(url+country);
//     return res.data;
//   }
//   catch(error){console.log(
//     "error:",error
//   );
//   return [];

//   }
// }


