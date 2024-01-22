// Exercise 1
console.log(60 / 5);
console.log(7 * (60 / 5));

// Exercise 2
console.log((6 / 0.5) * (2.5 / 0.5));
console.log((6 * 2.5) / (0.5 * 0.5));

// Exercise 3
const pay = 12;
const hours = 8;
const days = 21;
const tax = 0.15;
const brutto = pay * hours * days;
const netto = brutto * (1 - tax);

console.log(brutto);
console.log(netto);

// Exercise 4
const averagePrice = 6688;
const priceEURO = 80 * averagePrice;
const priceCZK = 80 * averagePrice * 25;

console.log(priceCZK);

const mortgage = priceEURO * 0.85;
const monthPay = 800;
const yearPay = 800 * 12;
const years = mortgage / yearPay;
const notice = "Your mortgage will last " + years + " years";

console.log(notice);

// Exercise 5
const classHours = 7 * 4 + 3;
const studyHours = classHours * 0.3;
const studyWeek = classHours + studyHours;
const totalStudyTime = studyWeek * 12;
const studyMessage = "otal study time: " + totalStudyTime + " hours";

console.log(studyMessage);

// Exercise 6
const wallWidth = 245;
const frameWidth = 175;
const clinchLeft = (wallWidth - frameWidth) / 2 + 10;
const clinchMiddle = (wallWidth - frameWidth) / 2 + frameWidth / 2;
const clinchRight = (wallWidth - frameWidth) / 2 + (frameWidth - 10);

console.log(clinchLeft, clinchMiddle, clinchRight);

const photoWidth = 4250;
const photoHeight = 2040;
const frameHeight = (photoHeight / photoWidth) * frameWidth;

console.log(frameHeight);

// Exercise 7
const population = 551281;
const population2100 = population * (1 - 0.014) ** 100;

console.log(population2100);

// Exercise 8
const area = 30;
const lengthOfCarpet = area ** 0.5;

console.log(lengthOfCarpet);
