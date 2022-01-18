export default class ModelCards {
  // URL = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10";
    URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcESKRYVExtFTOPQsh3oZflgb4jVqS2yvf3MnWzwweiz-gmnLZWnpZ20tul3-3Z0o1ioIasliMJgbp/pub?output=tsv";

  getData() {
    return fetch(this.URL)
            .then(resp => resp.text())
            .then(d => this.parseData(d));
  }
  parseData(tsv){
    const d = tsv.split('\r\n').map(line => line.split('\t'));
    const keys = d.shift();
    const data = d.map(arr => arr.reduce((obj, prop, i) => {
      obj[keys[i]] = prop;
      return obj;
    }, {}));
    return data;
  }
}


    // return fetch(this.URL, {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
    //     "x-rapidapi-key": "21163bb187msh6bac3a7395635dfp12b64cjsnda168da6ef00"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(body => {
    //     console.log(body);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });