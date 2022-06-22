open_runners = {};
openArray = [];
mastersArray = [];
grand_mastersArray = [];
masters_runners = {};
grand_masters_runners = {};
enteredInfo = document.querySelector('#info');
const scoresList = document.querySelector('.scores');
let ageGroup = document.getElementsByClassName('age');
let clearButton = document.querySelector('#clear')
let thirds = document.querySelectorAll('.third')
let sorted = [];
let checked = document.querySelector('#champs')

stringCheck = {
	"open": openArray,
	"masters": mastersArray,
	"grandmasters": grand_mastersArray
}

test_points = {
	points: {
		0: 10,
		1: 8,
		2: 6,
		3: 4,
		4: 2

	},
	teamChamps: {
		0: 20,
		1: 18,
		2: 16,
		3: 14,
		4: 12,
		5: 10,
		6: 8,
		7: 6,
		8: 4,
		9: 2
	}
}

coogans_open = ["Scott","Greg","Nick","Conor","Toby"];
four_miler_open = ["Jay","Nick","Conor","Greg","Stephen"];
bk_half_open = ["Jay","Scott","Nick","Toby","Keith"];
queens_open = ["Greg","Toby","Scott","Stephen","Kyle"];


function open_scores(runners,object,string) {

	runners.forEach(function(runner) {
		let score = test_points.points[runners.indexOf(runner)];
		let runObj = {
			name: runner,
			points: score,
			count: 1
		};

		if (string == "open") {
			if (object[runner]) {
				object[runner] += score;
				let index = openArray.map(obj => obj.name).indexOf(runner);
				openArray[index].count ++
				openArray[index].points += score;
			} else {
			 	object[runner] = score;
			 	console.log(object[runner]);
			 	console.log(runObj);
			 	openArray.push(runObj);
			}
		} else if (string == "masters") {
			console.log("masters")
			if (object[runner]){				
				object[runner] += score;
				let index = mastersArray.map(obj => obj.name).indexOf(runner);
				mastersArray[index].count ++
				mastersArray[index].points += score;
			} else {
				console.log("grandmasters")
			 	object[runner] = score;
			 	mastersArray.push(runObj);
			}
		} else if (string == "grandmasters") {
			if (object[runner]){				
				console.log("yes")
				object[runner] += score;
				let index = grand_mastersArray.map(obj => obj.name).indexOf(runner);
				grand_mastersArray[index].count ++
				grand_mastersArray[index].points += score;
			} else {
			 	object[runner] = score;
			 	grand_mastersArray.push(runObj);
			 	console.log(grand_mastersArray)
			}
		}
	})
	
	if (string == "open") {
		sorted = openArray.sort((a,b) => a.points <= b.points ? 1 : -1);
	} else if (string == "masters") {
		sorted = mastersArray.sort((a,b) => a.points <= b.points ? 1 : -1);
	} else {
		sorted = grand_mastersArray.sort((a,b) => a.points <= b.points ? 1 : -1);
	}
	let myText = "." + string + "_scores";
	let html = document.querySelector(myText)
	html.innerHTML = sorted.map((runner) => {
		return `
		<li>${runner.name}: ${runner.points}</li>

		`		
	}).join('');
}

function addResults(e) {
	e.preventDefault();
	let results = document.querySelector("#results")
	let newArr = results.value.split(', ');

	let cat = howOld(ageGroup);
	console.log(cat)
	if (cat == 'open') {
		console.log('next')
		open_scores(newArr,open_runners, cat);
	} 
	else if (cat == "masters") {
		newArr = newArr.slice(0,3)
		open_scores(newArr, masters_runners, cat);
	} else {
		newArr = newArr.slice(0,3)
		open_scores(newArr, grand_masters_runners, cat);
	}
}


function addRace(e) {
	e.preventDefault();
}

function howOld(collection) {
	let arr = [...collection];
	let ans
	arr.forEach(item => {
		if (item.checked == true) {
			ans = item.id;
		}
	})
	console.log(ans)
	return ans
}

function clear(e) {
	open_runners = {};
	masters_runners = {};
	grand_masters_runners = {};
	openArray = [];
	mastersArray = [];
	grand_mastersArray = [];
	let arr = [...thirds];
	console.log(arr);
	arr.forEach(item => {
		item.innerHTML = `<li>No Results</li>`
	});
}

enteredInfo.addEventListener('submit',addResults);
clearButton.addEventListener('click', clear);
