import {bindable} from 'aurelia-framework';

export class RadioIndex {
  constructor() {
    this.radioGroup1 = [];
    
    this.radioGroup1.push({ name: "gender", value: "m", label: "Male" });
    this.radioGroup1.push({ name: "gender", value: "f", label: "Female" });
    
    this.radioGroup2 = [];
    
    this.radioGroup2.push({ name: "car", value: "1", label: "Ford" });
    this.radioGroup2.push({ name: "car", value: "2", label: "Porche" });
    this.radioGroup2.push({ name: "car", value: "3", label: "Bentley"})
  }
}