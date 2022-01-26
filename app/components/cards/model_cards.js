export default class ModelCards {
    URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcESKRYVExtFTOPQsh3oZflgb4jVqS2yvf3MnWzwweiz-gmnLZWnpZ20tul3-3Z0o1ioIasliMJgbp/pub?output=tsv";
    filteredData = [];
    searchResult = [];
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
    let type;
    let value;

    if (!arr.length) {
      this.filteredData = this.data;
      return this.filteredData;
    }

    type = arr[1];
    value = arr[0];

    filteredData = this.data.filter(item => {
      return item[type].toLowerCase() === value;
    });
    this.filteredData = filteredData;
    return filteredData;
  }

  getSearchedData(str){

    if (!str && !this.filteredData.length){
      this.filteredData = this.data;
      return this.filteredData;
    }

    if (!this.filteredData.length) {
      this.filteredData = this.data;
    }

    this.searchResult = this.filteredData.filter(item => item.brand.toLowerCase().includes(str.toLowerCase())
);

    if (this.searchResult.length === 0) {
      this.searchResult = this.filteredData.filter(item => item.model.toLowerCase().includes(str.toLowerCase()));
    }

    return this.searchResult;
  }

  // Sorting logic
  getSortData(sortType){
    const sortVocabular = {
      priceUp: -1,
      priceDown: 1,
    }
    let dataTemp = this.data;
    const sortMulti = sortVocabular[sortType];

    if (this.filteredData.length) {
      dataTemp = this.filteredData;
    }
    if (sortType.includes('price')){
      dataTemp.sort((a, b) => (a.price - b.price) * sortMulti);
    }
    if (sortType === 'brandA') {
      dataTemp.sort((a, b) => a.brand.localeCompare(b.brand));
    }
    if (sortType === 'brandZ') {
      dataTemp.sort((a, b) => b.brand.localeCompare(a.brand));
    }
    return dataTemp;
  }

  //get product by id
  getProductById = id => this.data.find(item => item.id === id);

  getProductsAll = () => this.data;

}
