const tuesday = moment().day(2);
const tuesdayDay = moment(tuesday).format("dddd");
const tuesdayDate = moment(tuesday).format("DD");
const tuesdayMonth = moment(tuesday).format("MMM");

const nextTuesday = moment().day(9);
const nextTuesdayDay = moment(nextTuesday).format("dddd");
const nextTuesdayDate = moment(nextTuesday).format("DD");
const nextTuesdayMonth = moment(nextTuesday).format("MMM");

const saturday = moment().day(6);
const saturdayDay = moment(saturday).format("dddd");
const saturdayDate = moment(saturday).format("DD");
const saturdayMonth = moment(saturday).format("MMM");

const nextSaturday = moment().day(13);
const nextSaturdayDay = moment(nextSaturday).format("dddd");
const nextSaturdayDate = moment(nextSaturday).format("DD");
const nextSaturdayMonth = moment(nextSaturday).format("MMM");

const t1 = document.getElementById("t1date").innerHTML = tuesdayDate
const t2 = document.getElementById("t1day").innerHTML = tuesdayDay
const t3 = document.getElementById("t1month").innerHTML = tuesdayMonth

const t4 = document.getElementById("t2date").innerHTML = nextTuesdayDate
const t5 = document.getElementById("t2day").innerHTML = nextTuesdayDay
const t6 = document.getElementById("t2month").innerHTML = nextTuesdayMonth

const s1 = document.getElementById("s1date").innerHTML = saturdayDate
const s2 = document.getElementById("s1day").innerHTML = saturdayDay
const s3 = document.getElementById("s1month").innerHTML = saturdayMonth

const s4 = document.getElementById("s2date").innerHTML = nextSaturdayDate
const s5 = document.getElementById("s2day").innerHTML = nextSaturdayDay
const s6 = document.getElementById("s2month").innerHTML = nextSaturdayMonth
