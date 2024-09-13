function myDogConst(name, show, breed, mySound, canTalk) {
	this.name = name;
	this.show = show;
	this.breed = breed;
	this.mySound = mySound;
	this.canTalk = canTalk;
	
	this.myGreeting = function() {
		return `Hello, I'm ${this.name}. ${this.mySound}. I starred in ${this.show} as a ${this.breed}. Can I talk? ${this.canTalk}.<br>`;
	};
}

var dog1 = new myDogConst("Bailey", "Clifford the Big Red Dog", "Australian Shepherd", "I'm one of Clifford's best friends", false);
var dog2 = new myDogConst("Astro", "The Jetsons", "Great Dane", "I am not scary at all", false);

var userDogPicks = prompt("Type the dog name");

if (userDogPicks === "Bailey") {
	document.write(dog1.myGreeting());
} else if (userDogPicks === "Astro") {
	document.write(dog2.myGreeting());
} else {
	document.write("Please write a dog name.");
}