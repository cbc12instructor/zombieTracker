
function loadData() {
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		let states = JSON.parse(this.responseText);

		// #infectionTable
		let tableData = '';
		for ( let i = 0; i < states.length; i++ ) {
			let population = Math.floor(Math.random() * 3000000);
			let infected = Math.floor(Math.random() * 75000);
			tableData = tableData + `<tr><td>${states[i].name}</td><td>${population}</td><td>${infected}</td>`;
		}
		document.getElementById('infectionTable').innerHTML = tableData;
	};
	xhr.open('GET', '/census');
	xhr.send();
}

loadData();

document.getElementById('refreshData').addEventListener('click', function() {
	loadData();
});