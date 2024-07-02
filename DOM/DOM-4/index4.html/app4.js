//promise chaining


function savetoDb(data,success,failure){
    return new Promise((resolve,reject)=>{
        let internetspeed=Math.floor(Math.random() *10)+1;
        if(internetspeed>4){
            resolve("sucess: data was saved");
       }
        else{
            reject("failure: weak connection");
       }
    });
     
        
}

savetoDb("kishan gupta")
    .then(()=>{
        console.log("data 1 saved");
        // console.log(request);
        return savetoDb("hello world");
    })
    .then(()=>{
        console.log("data 2 saved")
        return savetoDb("Engineer");
    })
    .then(()=>{
        console.log("data 3 saved");
    })
    .catch(()=>{
        console.log("promise was rejected");
        //console.log(request);
    })
