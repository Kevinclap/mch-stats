// COD test

// console.log("test")

// const API = require('call-of-duty-api')();

// console.log(API)

// API.login("kevinclap@live.com", "Purpose5").then(
//     start,
// console.log("then after log in")
// ).catch(
//     console.log("catch after log in")
// );

// function start() {
//     API.MWwz("MCH_MrMangou", API.platforms.psn).then((output) => {
//     console.log(output);
//     const jsonInfo = JSON.stringify(output)
//     console.log(jsonInfo)
//     console.log("after then")
// }).catch((err) => {
//     console.log(err);
//     console.log("after catch")
// });
// }

import { api, platforms } from 'call-of-duty-api-es6';

function getCodData(userName) {
  // const user = "MCH_MrMangou";

  const API = new api(platforms.psn);
  console.log(API);

  API.login('kevinclap@live.com', 'Purpose5')
    .then(start)
    .catch(e => console.log(e));

  async function start() {
    API.MWwz(userName)
      .then(data => {
        console.log('inside then friendfeed');
        console.log(data);
      })
      .catch(err => {
        console.log('inside error after friends');
        console.log(err);
      });
  }
}

export default getCodData;
