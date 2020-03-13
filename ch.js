function drawCH(){
	var ch = JSON.parse(localStorage.getItem("ch"));
	console.log(ch)
	var st = ch.age + ch.role;
	document.write("<img src = 'images/" + st + ".PNG'>")
}
drawCH();