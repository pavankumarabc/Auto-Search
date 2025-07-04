


// dataset
items={ 
  'fruits':['apple','mango','orange','pineapple','banana','grapes','kiwi','papaya'],
  'vegitable':['tomato','onion','brinjal','ginger','poptato','carrot','cabbage','spinach'],
  'fashion':['shirt','pant','chinos','hoodies','boots','t-shirt','jacket','shorts'],
  'electronic':['laptop','smart-phone','headphones','camara','monitor','mouse'], 
  'books':['fiction', 'non-fiction', 'science', 'biography', 'mystery', 'romance', 'comics'],
  'homeappliance':['fridge','watching-machine','microwave','air-conditioner'], 
   'toys':['lego', 'barbie', 'remote car', 'puzzle', 'teddy bear', 'yo-yo', 'board games'],
   'beauty':['lipstick', 'foundation', 'facewash', 'moisturizer', 'serum', 'eyeliner']
}

// dom handling 

  let display=document.getElementById('demo');
  let search=document.getElementById('search');   
  let cat=document.getElementById('mySelect'); 

  // input event and op
  search.addEventListener('input',()=>{
    const query=search.value.toLowerCase(); 
    const catval=cat.value.toLowerCase();

    let z=catval==='all' ?  

    Object.values(items).flat().filter(val=>val.toLowerCase().includes(query)) : items[catval].filter(val=>val.toLowerCase().includes(query)); 

    display.innerHTML=z.length>0 ? 
    z.map(val=>`<li>${val}</li>`).join("") : 'not found try again'; 

    if (query === "") {
  display.innerHTML = "";
}

  }); 