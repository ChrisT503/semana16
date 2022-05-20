const fetch =require('node-fetch');
const fs = require('fs');

/*fetch('https://restcountries.com/v2/all')
.then((response) =>{
        return response.json();
})

.then((data) => {
    console.log(data);
})

.catch((error) => {
    console.error(error);
})*/

async function getCountries(){
    try{
        const response = await fetch('https://restcountries.com/v2/all');
        const data= await   response.json();
        let countrieList="";

        data.forEach(country => {
            countrieList+=`${country["name"]}\n`;
            
        });
        fs.writeFile('countries.txt',countrieList, (error) =>{
            if(error){
                console.log(error);
                return;
            }

            console.log("Se ha creado el archivo de countries.txt")
        })




    }catch(error){
        console.log(error);
    }
}

getCountries();