/* Global Variables */

const newZip= document.getElementById('zip').Value;
const feeling=document.getElementById('feelings').value;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// to make a post request to data route
const postData= async (url='',data={})=>{
    console.log(data);
    const response= await fetch(url,{
        method:'POST', // *GET , POST , PUT , DELETE, ETC.
        credentials:'same-origin', //include , * same-origin, omit
        headers:{
            'Content-Type':'application/json',
        },
        // Body data type must 'Content-Type' header
        body:JSON.stringify(data),
    });
    try{
        const newData= await response.json();
        console.log(newData);
        return newData;
    }catch (error){
        console.log('error',error);
    }
}
postData('/data',{userResponse:{zip:'123456',feeling:'fine'},date:newDate,temperature:44.66})



// Personal API Key for OpenWeatherMap API
let baseURL= 'api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}&units={imperial}';
let personalApiKey='&appid=bfdad66ac528dc404c4fe7833e8aaa68'




// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);


/* Function called by event listener */
function performAction(e){
    const newZip= document.getElementById('zip').Value;
    getZip(baseURL,newZip,personalApiKey)
}

/* Function to GET Web API Data*/
const getZip= async(baseURL,zip,key)=>{
    const res = await fetch(baseURL+zip+key)
    //const res= await fetch (('/fakeZipData'))
    try{
        const data= await res.json();
        console.log(data)
        return data;
        //postDatas('/data',data)
    }catch (error){
        console.log('error',error);
        //appropraitely handle the error
    }
}







/* Function to GET Project Data */


