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

  getFilterData(arr) {
    let filteredData = [];
    const type = arr[1];
    const value = arr[0];

    filteredData = this.data.filter(item => {
      return item[type].toLowerCase() === value;
    });
    this.filteredData = filteredData;
    return filteredData;
  }

  // Sorting logic
  getSortData(sortType){
    const sortVocabular = {
      priceUp: -1,
      priceDown: 1,
    }
    let dataTemp = this.data;
    const sortMulti = sortVocabular[sortType];

    if (this.filteredData !== []) {
      dataTemp = this.filteredData;
    }
    if (sortType.includes('price')){
      dataTemp.sort((a, b) => (a.price - b.price) * sortMulti);
    }
    if (sortType === 'brandA') {
      dataTemp.sort((a, b) => a.brand > b.brand);
    }
    if (sortType === 'brandZ') {
      dataTemp.sort((a, b) => b.brand > a.brand);
    }
    return dataTemp;
  }
  //  Method to catch event getObjForModalById
}
