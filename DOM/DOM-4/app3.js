// then and catch 


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
        console.log("promise was resolved");
        // console.log(request);
    })
    .catch(()=>{
        console.log("promise was rejected");
        //console.log(request);
    })