// function savetoDb(data,success,failure){
//     let internetspeed=Math.floor(Math.random() *10)+1;
//     if(internetspeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDb("kishan gupta",() =>{
//     console.log("your data was saved");
//     savetoDb(
//         "hello world",()=>{
//             console.log("success2: data2 saved");
//             savetoDb("B.tach",()=>{
//                 console.log("success3 : data saved");
//             },
//         ()=>{
//             console.log("failure3: weak connection");
//         })
//         },
//         ()=>{
//             console.log("failure2 : weak connection");
//         }
//     );
// },
// () =>{
//     console.log(" weak connection . data was not saved");
// });


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