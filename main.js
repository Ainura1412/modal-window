














/* fetch('https://vehicles-emplosoft.herokuapp.com/vehicles')
  .then(response => response.json())
   .then(data => console.log(data)); */
  /* 

   fetch('https://vehicles-emplosoft.herokuapp.com/vehicles')
   .then((res) => toJson(res))
   .then((data) => console.log(data))
   .catch((error) => console.log('here is my error:', error));
 
 const toJson = (res) => {
   return res.json();
 };
 
 console.log('hey guys I am here first');
 console.log('hey guys I am here first 1');
 
 const age = 16;
 
 const myPromise = new Promise((resolve, reject) => {
   if (age > 16) {
     setTimeout(() => {
       resolve('you can drive');
     }, 5000);
   }
 
   setTimeout(() => {
     reject('you cannot drive');
   }, 5000);
 });
 
 myPromise
   .then((decision) => console.log(decision))
   .catch((reject) => console.log(reject));
  */
 // const password = 'testpassword'; // JWT
 
 // localStorage.setItem('password', password);
 
 // console.log('extracting from local storage', localStorage.getItem('password'));
 
 // const myObj = {
 //   name: 'Tom',
 // };
 
 // localStorage.setItem('myObj', JSON.stringify(myObj));
 
 // const myNewObj = localStorage.getItem('myObj');
 // console.log(JSON.parse(myNewObj));


/* const password = 'testpasword';
localStorage.setItem('password', password);
console.log('extracting from local storage', localStorage.getItem('password'));
const myObj = {
    name: 'Tom',
};
localStorage.setItem('myObj', JSON.stringify(myObj));
const newObj = localStorage.getItem('myObj')
console.log(JSON.parse(newObj)); */