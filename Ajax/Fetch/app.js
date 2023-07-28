// Fetch request
fetch('https://api.rainviewer.com/public/weather-maps.json').then((res)=>{
    // console.log(Response); // we don't get complete response hence we have to use json method it will parse the complete response into js object and then it also returns a callback.
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
    console.log('something went wrong');
})