export default class ModelCards {
    URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcESKRYVExtFTOPQsh3oZflgb4jVqS2yvf3MnWzwweiz-gmnLZWnpZ20tul3-3Z0o1ioIasliMJgbp/pub?output=tsv";

  getData() {
    return fetch(this.URL)
            .then(resp => resp.text())
            .then(this.parseData);
  }

  // Parse response from Google sheets table aka DataBase
  parseData = tsv => {
    const d = tsv.split('\r\n').map(line => line.split('\t'));
    const keys = d.shift();
    const data = d.map(arr => arr.reduce((obj, prop, i) => {
      obj[keys[i]] = prop;
      return obj;
    }, {}));
    this.data = data;
    return data;
  }


  // Sorting logic
  getSortData(sortType){
    const sortVocabular = {
      priceUp: -1,
      priceDown: 1,
    }
    const sortMulti = sortVocabular[sortType];
    if (sortType.includes('price')){
      this.data.sort((a, b) => (a.price - b.price) * sortMulti);
    }
    if (sortType === 'brandA') {
      this.data.sort((a, b) => a.brand > b.brand);
    }
    if (sortType === 'brandZ') {
      this.data.sort((a, b) => b.brand > a.brand);
    }
    return this.data;
  }
}
