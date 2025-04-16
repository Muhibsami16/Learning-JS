const nameEl = document.getElementById("name");
const btn = document.getElementById("btn");

btn.addEventListener("click", async() => {
  const city = nameEl.value.toLowerCase();
  const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=8809863335b833e5c6b4e1e2e77df25c&q=${city}`
  // fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=8809863335b833e5c6b4e1e2e77df25c&q=${city}`
  // )
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  
  try{
    const response = await fetch(URL)
    const parseresponse = await response.json(); 
    console.log(parseresponse);
    console.log("Test");
    }
    catch{
      console.log("error" , error);
      
    }
});

