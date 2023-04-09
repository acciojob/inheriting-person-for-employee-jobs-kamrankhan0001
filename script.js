// complete this js code
function Person(name, age) {
	greet(){
		console.log('${this._name} my name is');
		console.log('${this._name} I am years old');
	}
}

function Employee(name, age, jobTitle) {
	jobGreet(){
		console.log('${this._name} my name is');
		console.log('${this._name} my job title is');
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
