// создать массив с 20 числами.
let numbers=[5,8,9,41,22,47,3,45,88,61,52,73,24,38,4,1,10,14,12];
// -- при помощи метода sort и колбека  отсортировать массив.
let sortNumbers=numbers.sort((a,b)=>a-b);
console.log(sortNumbers);
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let sortNumbers2=numbers.sort((a,b)=> b-a);
console.log(sortNumbers2);
// -- при помощи filter получить числа кратные 3
let multiples3=numbers.filter((value)=>value%3===0);
console.log(multiples3);  
// -- при помощи filter получить числа кратные 10
let multiples10=numbers.filter((value)=> value%10===0);
console.log((multiples10));
// -- перебрать (проитерировать) массив при помощи foreach()
let foreachArray=numbers.forEach(value=>{
    console.log(value);
})
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let newMapNumbers=numbers.map((value)=>value*3);
console.log(newMapNumbers);
// - создать массив со словами на 15-20 элементов.
let textArray=['people','man','woman','child','boy','girl','guy','friend','acquaintance','neighbor','guest','chief','boss','competitor','client','colleague','family','parents','dad','mum','husband','wife','son','daughter'];

// -- отсортировать его по алфавиту в восходящем порядке.
let sort1=textArray.sort((a,b)=>a-b);
console.log(sort1);
// -- отсортировать его по алфавиту  в нисходящем порядке.
let sort2=textArray.sort((a,b)=>{
     if(a<b){
        return 1;
    }else{
        return -1;
    }
});
console.log(sort2);
// -- отфильтровать слова длиной менее 4х символов
let symbols4=textArray.filter((value)=>value.length<4);
console.log(symbols4);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let mapTextarray=textArray.map((value)=>(value+'!'))
console.log(mapTextarray);
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, 
            {name: 'petya', age: 30, status: true}, 
            {name: 'kolya', age: 29, status: true},
            {name: 'olya', age: 28, status: false}, 
            {name: 'max', age: 30, status: true},
            {name: 'anya', age: 31, status: false},
            {name: 'oleg', age: 28, status: false},
            {name: 'andrey', age: 29, status: true}, 
            {name: 'masha', age: 30, status: true}, 
            {name: 'olya', age: 31, status: false}, 
            {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
let usersSortAge1=users.sort((user1,user2)=>user1.age-user2.age);
console.log(usersSortAge1);

let usersSortAge2=users.sort((user1,user2)=>user2.age-user1.age);
console.log(usersSortAge2);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let usersSortName1=users.sort((user1,user2)=>user1.name.length-user2.name.length);
console.log(usersSortName1);

let usersSortName2=users.sort((user1,user2)=>user2.name.length-user1.name.length);
console.log(usersSortName2);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
//  (первинний масив залишиться без змін)
let usersWithId=JSON.parse(JSON.stringify(users))

let usersWithId1=usersWithId.map((user,index)=>{
    user.id=index;
    return user;
});
console.log(usersWithId1);

// - відсортувати його за індентифікатором
let usersWithId2=usersWithId1.sort((a,b)=>a.id-b.id);
console.log(usersWithId2);

// -- наисать функцию калькулятора с 2мя числами и колбеком
function calculator1(a,b,callback){
    console.log(callback(a,b));
};
calculator1(15,25,function(a,b){
    return a+ b
})
// -- наисать функцию калькулятора с 3мя числами и колбеком
function calculator2(a,b,c,action){
    return action(a,b,c)
};
let result= calculator2(20,30,40,function (a,b,c) {
    return a+b+c;  
})
console.log(result);

// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================

let cars = [ 
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let carsVolume3=cars.filter((car)=> {return car.volume>3});
console.log(carsVolume3);
// - двигун = 2л
let carsVolume2=cars.filter((car)=> {return car.volume===2});
console.log(carsVolume2);
// - виробник мерс
let carsMers=cars.filter((car)=> {return car.producer ==="mercedes"});
console.log(carsMers);
// - двигун більше 3х літрів + виробник мерседес
let carsMers3=cars.filter((car)=> {return car.producer ==="mercedes" && car.volume>=3});
console.log(carsMers3);
// - двигун більше 3х літрів + виробник субару
let carsSubaru3=cars.filter((car)=> {return car.producer ==="subaru" && car.volume>=3});
console.log(carsSubaru3);
// - сили більше ніж 300
let carPower300=cars.filter((car)=>{return car.power>=300});
console.log(carPower300);
// - сили більше ніж 300 + виробник субару
let carSubaruPower300=cars.filter((car)=>{return car.power>=300 && car.producer ==="subaru"});
console.log(carSubaruPower300);
// - мотор серіі ej
let carsEj=cars.filter((car)=>{return car.engine.startsWith('ej')});
console.log(carsEj);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
let carsSubaruEj300=cars.filter((car)=>{return car.engine.startsWith('ej') && car.power>300 && car.producer==='subaru'});
console.log(carsSubaruEj300);
// - двигун меньше 3х літрів + виробник мерседес
let carMersLow=cars.filter((car)=>{return car.producer==='mercedes' && car.volume<3})
console.log(carMersLow);
// - двигун більше 2л + сили більше 250
let carVolume2=cars.filter((car)=>{return car.volume>2 && car.power>250});
console.log(carVolume2);
// - сили більше 250  + виробник бмв
let carBmw=cars.filter((car)=>{return car.producer==='bmw' && car.power>250});
console.log(carBmw);

// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

// -- отсортировать его по id пользователей
let usersId=usersWithAddress.sort((user1,user2)=> user1.id-user2.id);
console.log(usersId);
// -- отсортировать его по id пользователей в обратном опрядке
let usersIdLow=usersWithAddress.sort((user1,user2)=> user2.id-user1.id);
console.log(usersIdLow);
// -- отсортировать его по возрасту пользователей
let usersAgeUp=usersWithAddress.sort((user1,user2)=>user1.age-user2.age);
console.log(usersAgeUp);
// -- отсортировать его по возрасту пользователей в обратном порядке
let usersAgeDown=usersWithAddress.sort((user1,user2)=>user2.age-user1.age);
console.log(usersAgeDown);
// -- отсортировать его по имени пользователей
let userNameUp=usersWithAddress.sort((user1,user2)=>{
    if(user1.name<user2.name){
        return -1
    }
    return 1
})
console.log(userNameUp);
// -- отсортировать его по имени пользователей в обратном порядке
let userNameDown=usersWithAddress.sort((user1,user2)=>{
    if(user1.name<user2.name){
        return 1
    }
    return -1
})
console.log(userNameDown);
// -- отсортировать его по названию улицы  в алфавитном порядке
let userStreet=usersWithAddress.sort((user1,user2)=>{
    if(user1.address.street<user2.address.street){
        return -1
    }
    return 1
});
console.log(userStreet);
// -- отсортировать его по номеру дома по возрастанию
let userHomeNumber=usersWithAddress.sort((user1,user2)=>user1.address.number-user2.address.number);
console.log(userHomeNumber);

// -- отфильтровать (оставить) тех кто младше 30
let user30=usersWithAddress.filter((user)=>user.age<30);
console.log(user30);

// -- отфильтровать (оставить) тех у кого отрицательный статус
let userStatus=usersWithAddress.filter((user)=>user.status===false);
console.log(userStatus);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let userStatus30=usersWithAddress.filter((user)=>user.status===false && user.age<30);
console.log(userStatus30);
// -- отфильтровать (оставить) тех у кого номер дома четный
let userHouseNumber=usersWithAddress.filter((user)=>user.address.number%2===0);
console.log(userHouseNumber);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
car1={model:'mazda',year:2006,power:150,price:8000,driver:{name:'Vasya',age:25,experience:5}},
car2={model:'honda',year:2010,power:170,price:10000,driver:{name:'Petya',age:27,experience:7}},
car3={model:'wv',year:2002,power:100,price:4000,driver:{name:'Olya',age:23,experience:3}},
car4={model:'toyota',year:2007,power:180,price:8500,driver:{name:'Ivan',age:45,experience:15}},
car5={model:'yaguar',year:2017,power:200,price:18000,driver:{name:'Katya',age:36,experience:6}},
car6={model:'ford',year:2008,power:165,price:7000,driver:{name:'Vova',age:34,experience:12}},
car7={model:'seat',year:2012,power:185,price:9000,driver:{name:'Lena',age:29,experience:2}},
car8={model:'bmw',year:2015,power:195,price:15000,driver:{name:'Sasha',age:37,experience:8}},
car9={model:'nissan',year:2005,power:190,price:6000,driver:{name:'ira',age:39,experience:1}},
car10={model:'mersedes',year:2004,power:155,price:6500,driver:{name:'Stas',age:26,experience:9}}

// let carsWithDriver=[car1,car2,car3,car4,car5,car6,car7,car8,car9,car10];
// // console.log(carsWithDriver);
// let halfOfCars=[];
// let newDrivers=[
//     {name:'Dima',age:36,experience:9},
//     {name:'Sveta',age:28,experience:5},
//     {name:'Lyuba',age:23,experience:2},
//     {name:'Galya',age:27,experience:4},
//     {name:'Vadim',age:21,experience:3}
// ]
// for (let i = 0; i < carsWithDriver.length;i=i+2){
//     carsWithDriver[i].power*= 1.1
//     carsWithDriver[i].driver=newDrivers[i]
//     console.log(carsWithDriver[i]);
// }


// Для початку вкладіть всі наші створені автомобілі в масив cars.
let carsArray=[car1,car2,car3,car4,car5,car6,car7,car8,car9,car10];
// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), 
// та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// / Після того зробити перевірку досвіду ВСІХ наших водіїв.
//  Якщо досвід водія менший за 5 років, але його вік більший за 25, 
//  то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
for(i=0;i<carsArray.length;i=i+2){
    carsArray[i].power*=1.1
    carsArray[i].price*=1.05
    if(carsArray[i].driver.experience<5 && carsArray[i].driver.age>25){
        carsArray[i].driver.experience+=1;
        console.log(carsArray[i]); 
    }
    
}
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let sum =0
for (let i = 0; i < carsArray.length; i++) {
     sum += carsArray[i].price
}
 console.log(sum);



// Задача: дан отсортированный по возрастанию массив целых чисел.
//  Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
//  Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента.
//  Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
// // 