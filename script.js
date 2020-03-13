function main(){
	alert("Welcome to the Star Wars Character Quiz");
	alert("Answer the following questions as if you were your character.");
	var age;
	function ageAsk(){
		var ageAnswer = prompt("Are you young or old","'young' or 'old'");
		if (ageAnswer == "young"){age = "young"}
			else if(ageAnswer == "old"){age = "old"}
				else {ageAsk()}
	}
	ageAsk()

	var role;
	function roleAsk(){
		if (prompt("Are you a Jedi?","'yes' or 'no'") == "yes"){role = "jedi"}
		else{
			if (prompt("Are you a Sith?","'yes' or 'no'") == "yes"){role = "sith"}
				else{
					if (prompt("Are you a Bounty Hunter","'yes' or 'no'") == "yes"){role = "bountyhunter"}
						else{roleAsk()}
				}
		}
	}
	roleAsk();

	var ch = {age: age, role: role};
	localStorage.setItem("ch",JSON.stringify(ch))
}
main()