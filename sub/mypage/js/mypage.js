// 회원가입 페이지 목록에서 선택한 이메일 주소 자동 입력
function input_email() {
	document.frm.mailServer1.value = document.frm.mailServer2.value;
}


// 예약 페이지 달력
let today = new Date();
let thisDay = today.getDate();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDay();

function getFirstDayIndex() {
	let firstDayIndex = new Date(`${year}-${month}-01`).getDay();
	return firstDayIndex;
}

let firstDayIndex = getFirstDayIndex();
let index = 1;
const calDic = {
	1: 31,
	2: 28,
	3: 31,
	4: 30,
	5: 31,
	6: 30,
	7: 31,
	8: 31,
	9: 30,
	10: 31,
	11: 30,
	12: 31,
};

const weekDic = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

weekDic.map((dic) => {
	let container = document.querySelector("#weekDic");
	let newElement = document.createElement("div");
	newElement.id = dic;
	newElement.className = "dic";
	newElement.innerHTML = dic;
	container.appendChild(newElement);
});

var day = 1;
function makeFirstWeek() {
	day = 1;
	let firstWeek = [];
	i = 0;
	firstDayIndex = getFirstDayIndex();
	while (i < 7) {
		if (i < firstDayIndex) {
			firstWeek.unshift(".");
		} else {
			firstWeek.push(day);
			day += 1;
		}
		i += 1;
	}
	return firstWeek;
}

function makeCalendar() {
	let calendar = [];
	let container = document.querySelector("#calendar");
	container.innerHTML = "";
	calendar.push(makeFirstWeek());
	let m = calDic[month * 1];
	let week = [];
	let nDay = 1;
	while (day <= m) {
		week.push(day);
		day += 1;
		if (week.length === 6) {
			calendar.push(week);
			week = [];
		}
	}
	
	calendar.push(week);
	calendar.map((week) => {
		week.map((day) => {
			let newElement = document.createElement("div");
			newElement.className =
				day === today.getDate() && month === today.getMonth() + 1 ? "day today" : "day";
			newElement.innerHTML = day;
			container.appendChild(newElement);
		});
	});
	console.log(calendar);
	return calendar;
}

let calendar = makeCalendar();

function handleWeek(opt) {
	if (opt > 0) {
		month += 1;
		if (month > 12) {
			month = 1;
			year += 1;
		}
		index += 1;
		index > 13 ? (index = 1) : index;
	} else {
		month -= 1;
		if (month < 1) {
			month = 12;
			year -= 1;
		}
		index -= 1;
		index < 1 ? (index = 13) : index;
	}
	console.log(year, month);
	console.log(index);
	makeCalendar();
	document.getElementById("year").innerHTML = "";
	document.getElementById("month").innerHTML = "";
	document.getElementById("year").innerHTML = year + "년 ";
	document.getElementById("month").innerHTML = month + "월";
}

function hoverAction(){
	
}

document.getElementById("year").innerHTML = year + "년 ";
document.getElementById("month").innerHTML = month + "월";