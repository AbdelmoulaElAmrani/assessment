let districtsTotalCount = 0;

const district1 = 112;
const district2 = 98;
const district3 = 119;
const district4 = 126;
const district5 = 129;
const district6 = 44;
const district7 = 118;
const district8 = 125;
const district9 = 101;
const district10 = 27;

const pledgeNum = 1423 ;


let percent = 0.0;
let width = 0;
let id = 1;

const districts = [district1, district2, district3, district4, district5, district6, district7, district8, district9, district10];

for ( let i = 0; i < districts.length; i++ ) {
    document.getElementById("dist" + (i + 1)).innerHTML = districts[i] + " Pledges";
	districtsTotalCount += districts[i];
}

const pInterval = setInterval(pledgeCount);
let pledgeTotal = 0;
function pledgeCount() {
    document.getElementById("count").innerHTML = pledgeTotal;
    pledgeTotal++;
    if ( pledgeTotal === pledgeNum ) {
        clearInterval(pInterval);
    }
}

let dInterval = setInterval(progress, 20);
function progress() {
	width++;
	let elem = document.getElementById("bar" + id);
	let percent = ((districts[id-1] / districtsTotalCount) * 200) ; 
	elem.style.width = width + '%';
	if ( width >= percent ) {
		width = 0;
		id++;
	}
	if ( id > districts.length ) {
		clearInterval(dInterval);
	}
}

