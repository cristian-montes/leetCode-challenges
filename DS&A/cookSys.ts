// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


// import https from 'https';
// let https = require('https');
/*
 * Complete the 'getCapitalCity' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING country as parameter.
 * API URL: https://jsonmock.hackerrank.com/api/countries?name=<country>
 */

async function getCapitalCity(country) {
 
  let url = `https://jsonmock.hackerrank.com/api/countries?name=${country}`

 return new Promise(( resolve, reject) => {
      https.get(url, (res) => {
      let answer = ''
      res.setEncoding('utf8');
       res.on('data', function(body){
         answer +=body
      })
      
      res.on('end', () => {
          try{
             const parseData =  JSON.parse(answer)
             if(!parseData.data[0].capital){
                 reject('-1')
                 
             } else {
                 resolve(parseData.data[0].capital)
             }
             
             
          } catch(e) {
              reject(e.message)
          }
      });
    }).on('error', (e)=>{
        reject('-1')
    })
 })
 



}

