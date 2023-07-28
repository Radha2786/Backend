axios.get('https://api.rainviewer.com/public/weather-maps.json').then((res)=>{
    console.log(res.data);   // data ke andar aayega response 
}).catch((err)=>{
    console.log(err);
});

// axios is basically a library 