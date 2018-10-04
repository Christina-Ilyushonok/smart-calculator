class SmartCalculator {
  constructor(initialValue) {
      this.value = [initialValue];
  }

  add(number) {
    this.value.push('+');
    this.value.push(number);
       console.log(this.value);
    return this;
  }
  
  subtract(number) {
      this.value.push('-');
      this.value.push(number);
       console.log(this.value);
      return this;
  }

  multiply(number) {
      this.value.push('*');
      this.value.push(number);
       console.log(this.value);
      return this;
  }

  devide(number) {
      this.value.push('/');
      this.value.push(number);
       console.log(this.value);
      return this;
  }

  pow(number) {
      this.value.push('**');
      this.value.push(number);
      return this;
  }

  valueOf() {
    return this._calcValue();
  }

  toString() {
    return this._calcValue();
  }

  _calcValue() {
      let expression = this.value.reduce((previousValue, currentValue) => previousValue + currentValue, '');
      console.log(expression);
      return (Function(`return ${expression};`))();
  }
}

module.exports = SmartCalculator;
