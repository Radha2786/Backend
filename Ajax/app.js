// const res = `{"ticker":{"base":"BTC","target":"USD","price":"54443.78504937","volume":"59595.34595152","change":"-132.90876402"},"timestamp":1633617181,"success":true,"error":""}`
// const data=JSON.parse(res); 
// JSON.parse() is a built-in JavaScript function that is used to parse JSON (JavaScript Object Notation) strings and convert them into JavaScript objects.
// console.log(data);
// console.log(data.ticker.price);

const res={
  ticker: {
    base: 'BTC',
    target: 'USD',
    price: '54443.78504937',
    volume: '59595.34595152',
    change: '-132.90876402'
  },
  timestamp: 1633617181,
  success: true,
  error: ''
}

// const data = JSON.stringify(res);   Return a JSON string corresponding to the specified value,
// console.log(data);


// ----------------------------------Request----------------------
// there are basically 3 ways by which we can make a request    
// 1 XMLHttpRequest  // see github repo for methods or google it
// 2 fetch
// 3 using third party libraries    

// --------------------------XMLHttpRequest----------------------------------------

const req = new XMLHttpRequest();

req.onload=function(){
  const res = this.responseText;

  // console.log(this);
  const data=JSON.parse(res);
  console.log(data);
  console.log('----------');
  console.log(data.radar);
}

req.onerror=function(){
  console.log(this);
  console.log('error');
}

// req.open('GET',' https://api.tvmaze.com/search/shows?q=girls');
req.open('GET','https://api.rainviewer.com/public/weather-maps.json')     

/* In the example provided, xhr.open() is a method of the XMLHttpRequest object, and it is used to configure the HTTP request before sending it to the server. The open() method sets up the parameters for the request, such as the HTTP method, the URL of the resource to request, and whether the request should be asynchronous or not.
*/
req.send();