class SmartCalculator { 
constructor(initialValue) { 
this.result = "" + initialValue; 
} 

add(number) { 
this.result = this.result + " + " + number; 
this.iteration = eval(this.result); 
return this; 
} 

subtract(number) { 
this.result=this.result + " - " + number; 
this.iteration = eval(this.result); 
return this; 
} 

multiply(number) { 
this.result=this.result + " * " + number; 
this.iteration = eval(this.result); 
return this; 
} 

devide(number) { 
this.result = this.result + " / " + number; 
this.iteration = eval(this.result); 
return this; 
} 

pow(number) { 
this.result = this.result + " ** " + number; 
this.iteration = eval(this.result); 
return this; 
} 

valueOf() { 
return this.iteration; 
} 
} 

module.exports = SmartCalculator;
