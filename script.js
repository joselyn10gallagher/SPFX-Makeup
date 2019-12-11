// Variables for Images 
var a = document.getElementById("finger-can");
var b = document.getElementById("demon-monster");
var c = document.getElementById("face-foot");
var d = document.getElementById("jason-slappy");

var e = document.getElementById("finger");
var f = document.getElementById("can");
var g = document.getElementById("demon");
var h = document.getElementById("monster");
var i = document.getElementById("face");
var j = document.getElementById("foot");
var k = document.getElementById("jason");
var l = document.getElementById("slappy");
var n = document.getElementById("finalsHolder");
var m = document.getElementById("finalsHolderTwo");
var o = document.getElementById("winner");


// Variables for If-Statements 
var finger = false;
var can = false;
var demon = false;
var monster = false;
var face = false;
var foot = false;
var jason = false;
var slappy = false;

var semifinal1 = false;
var semifinal2 = false;
var semifinal3 = false;
var semifinal4 = false;

var final1 = false;
var final2 = false;

var winner1 = false;
var winner2 = false;

var stress1 = false;
var stress2 = false;


// First Section
function optionFinger(){
	a.innerHTML= '<img src="images/finger.jpg" />';
	f.classList.add("grayscale");
	e.classList.remove("grayscale");
	a.classList.add("maroonboarder");
	finger = true;
	checkLock();
}

function optionCan(){
	a.innerHTML= '<img src="images/can.jpg" />';
	e.classList.add("grayscale");
	f.classList.remove("grayscale");
	a.classList.add("maroonboarder");
	can = true;
	checkLock();
}


// Second Section
function optionDemon(){
	b.innerHTML= '<img src="images/demon.jpg" />';
	h.classList.add("grayscale");
	g.classList.remove("grayscale");
	b.classList.add("maroonboarder");
	demon = true;
	checkLock();
}

function optionMonster(){
	b.innerHTML= '<img src="images/monster.jpg" />';
	g.classList.add("grayscale");
	h.classList.remove("grayscale");
	b.classList.add("maroonboarder");
	monster = true;
	checkLock();
}


// Third Section
function optionFace(){
	c.innerHTML= '<img src="images/face.jpg" />';
	j.classList.add("grayscale");
	i.classList.remove("grayscale");
	c.classList.add("maroonboarder");
	face = true;
	checkLock();
}

function optionFoot(){
	c.innerHTML= '<img src="images/foot.jpg" />';
	i.classList.add("grayscale");
	j.classList.remove("grayscale");
	c.classList.add("maroonboarder");
	foot = true;
	checkLock();
}


//Fourth Section
function optionJason(){
	d.innerHTML= '<img src="images/jason.jpg" />';
	l.classList.add("grayscale");
	k.classList.remove("grayscale");
	d.classList.add("maroonboarder");
	jason = true;
	checkLock();
}

function optionSlappy(){
	d.innerHTML= '<img src="images/slappy.jpg" />';
	k.classList.add("grayscale");
	l.classList.remove("grayscale");
	d.classList.add("maroonboarder");
	slappy = true;
	checkLock();
}


//Lockout Functions
function checkLock() {
	if (finger || can) {
		if (demon || monster) {
			console.log("semifinal lock");
			
			e.removeAttribute("onclick");
			f.removeAttribute("onclick");
			g.removeAttribute("onclick");
			h.removeAttribute("onclick");

			e.classList.remove("hvr-pulse-grow");
			f.classList.remove("hvr-pulse-grow");
			g.classList.remove("hvr-pulse-grow");
			h.classList.remove("hvr-pulse-grow");
			
			
			b.classList.add("hvr-pulse-grow");
			a.classList.add("hvr-pulse-grow");
			final1 = true;
		}
	}
	
	if (face || foot) {
		if (jason || slappy) {
			
			i.removeAttribute("onclick");
			j.removeAttribute("onclick");
			k.removeAttribute("onclick");
			l.removeAttribute("onclick");
			
			i.classList.remove("hvr-pulse-grow");
			j.classList.remove("hvr-pulse-grow");
			k.classList.remove("hvr-pulse-grow");
			l.classList.remove("hvr-pulse-grow");
			
			c.classList.add("hvr-pulse-grow");
			d.classList.add("hvr-pulse-grow");
			final2 = true;
		
		}
	}
	
	if (final1) {
		//Moves Image to Final
		if (semifinal1){
			console.log("Can/finger");
			//Childnodes gets src of the image instead of parent div
			var chosenImg = document.getElementById("finger-can").childNodes[0].src;	
			document.getElementById("finalsHolder").innerHTML = '<img src='+chosenImg+' />';
			b.classList.add("grayscale");
			a.removeAttribute("onclick");
			b.removeAttribute("onclick");
			b.classList.remove("hvr-pulse-grow");
			a.classList.remove("hvr-pulse-grow");
			n.classList.add("hvr-pulse-grow");
			n.classList.add("maroonboarder");
			winner1 = true;
		}
		if (semifinal2){
			//Moves Image to Final
			console.log("demon/monster");
			var chosenImg = document.getElementById("demon-monster").childNodes[0].src;	
			document.getElementById("finalsHolder").innerHTML = '<img src='+chosenImg+' />';
			a.classList.add("grayscale");
			a.removeAttribute("onclick");
			b.removeAttribute("onclick");
			a.classList.remove("hvr-pulse-grow");
			b.classList.remove("hvr-pulse-grow");
			n.classList.add("hvr-pulse-grow");
			n.classList.add("maroonboarder");
			winner1 = true;
		}
	}
	
	if (final2) {
		//Moves Image to Final		
		if (semifinal3){
			console.log("Face/Foot");
			var chosenImgTwo = document.getElementById("face-foot").childNodes[0].src;	
			document.getElementById("finalsHolderTwo").innerHTML = '<img src='+chosenImgTwo+' />';
			d.classList.add("grayscale");
			c.removeAttribute("onclick");
			d.removeAttribute("onclick");
			c.classList.remove("hvr-pulse-grow");
			d.classList.remove("hvr-pulse-grow");
			m.classList.add("hvr-pulse-grow");
			m.classList.add("maroonboarder");
			winner2 = true;
		}
		if (semifinal4) {
			//Moves Image to Final
			console.log("Jason/Slappy");
			var chosenImgTwo = document.getElementById("jason-slappy").childNodes[0].src;	
			document.getElementById("finalsHolderTwo").innerHTML = '<img src='+chosenImgTwo+' />';
			c.classList.add("grayscale");
			c.removeAttribute("onclick");
			d.removeAttribute("onclick");
			c.classList.remove("hvr-pulse-grow");
			d.classList.remove("hvr-pulse-grow");
			m.classList.add("hvr-pulse-grow");
			m.classList.add("maroonboarder");
			winner2 = true;
		}
		
	}
	
	if (winner1) {
		//Moves Image From Finals to Winner
		if (stress1){
			var chosenImgThree = document.getElementById("finalsHolder").childNodes[0].src;	
			document.getElementById("winner").innerHTML = '<img src='+chosenImgThree+' />';
			m.classList.add("grayscale");
			m.removeAttribute("onclick");
			n.removeAttribute("onclick");
			m.classList.remove("hvr-pulse-grow");
			n.classList.remove("hvr-pulse-grow");
			o.classList.add("maroonboarder");
		}
	}
	
	if (winner2) {
		//Moves Image From Finals to Winner
		if (stress2){
			var chosenImgThree = document.getElementById("finalsHolderTwo").childNodes[0].src;	
			document.getElementById("winner").innerHTML = '<img src='+chosenImgThree+' />';
			n.classList.add("grayscale");
			m.removeAttribute("onclick");
			n.removeAttribute("onclick");
			m.classList.remove("hvr-pulse-grow");
			n.classList.remove("hvr-pulse-grow");
			o.classList.add("maroonboarder");
		}
	}
}


//When clicked, semifinal 1 in checkLock is activated
function checkSemifinal1() {
	if (final1 == true) {
		semifinal1 = true;
		console.log("test1");
	}
	checkLock();
}
//When clicked, semifinal 2 in checkLock is activated
function checkSemifinal2() {
	if (final1 == true) {
		semifinal2 = true;
		console.log("test2");
		checkLock();
	}
}
//When clicked, semifinal 3 in checkLock is activated
function checkSemifinal3() {
	if (final2 == true) {
		semifinal3 = true;
		console.log("test3");
	}
	checkLock();
}
//When clicked, semifinal 4 in checkLock is activated
function checkSemifinal4() {
	if (final2 == true) {
		semifinal4 = true;
		console.log("test4");
	}
	checkLock();
}
//When clicked, stress1 in checkLock is activated
function checkWinner1() {
	if (winner1 == true) {
		stress1 = true;
	}
	checkLock();
}
//When clicked, stress2 in checkLock is activated
function checkWinner2() {
	if (winner2 == true) {
		stress2 = true;
	}
	checkLock();
}