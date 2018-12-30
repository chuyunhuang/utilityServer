const request = require('request')

const getGifs = (search, cb) => {
  // if (search === "" || search.trim() === "") {
  //     return;
  // }    
  const api_key = '6ltsNwPFmqvfXsTRyhJ39aC6p9ZDuNj0';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`;

request(url, (err, res, body)=>{
  let data = JSON.parse(body).data

  // console.log(data)
 
        const gifArray = [];
        data.forEach(currentGif => {
            const url = currentGif.images.original.url;
            gifArray.push(url);
        });

        cb(gifArray);
  
    // request.send(null);
      })
  }

module.exports ={
  getGifs
}
