//bai1
// const data2 = [1, 1, 3, 4, 4, 5, 6, 7, 9];
// //a
// console.log(data2.push("8"));
// //b
// console.log(data2.push("10"));
// //c
// console.log(data2.unshift("5"));
// //d
// console.log(data2.splice(5))
// console.log(data2.splice(5, 1, "11"));
// //e
// console.log(data2.splice(4))
// console.log(data2.splice(4, 1, "5", "7"));

// console.log("data:", data2);
//Bai2
//a
// const data03 = ["Cam", "Xoài", "Mít", "Bưởi", "Quýt", "Dưa gang"];

// const copiedArray = [...data03];

// console.log(copiedArray);
// console.log('data:',data03)
// // //b
// console.log(data03.splice(5))
// console.log(data03.splice(5, 1, "Dưa Hấu"));
// console.log('data:',data03)
// // //c
// console.log(data03.splice(3, 1, "Mận"));
// console.log('data:',data03)
// //d
// console.log(data03.push('Chanh'));
// console.log(data03.unshift('Dứa'));
// console.log('data:',data03)
//bai3
//a
// const persons = [
//   { firstname: "Đào", lastname: "Văn Anh" },
//   { firstname: "Trần", lastname: "Huy" },
//   { firstname: "Lê", lastname: "Hoàng" },
// ];
// const newPersons = persons.map(function (value) {
//   return value.firstname + value.lastname + " updated";
// });
// console.log("persons:", newPersons);
// const newPerson = { firstname: "Xuân", lastname: "Ca" };
// persons.push(newPerson);

// console.log(persons);
// //b
// const Updateperson = persons.find(value => value.firstname === "Trần" && value.lastname === "Huy");

// if (Updateperson) {
//     Updateperson.firstname = "Nguyễn";
//     Updateperson.lastname = "Hoàng";
// }

// console.log(persons);

// //c
// const updatedPersons = persons.map(value => ({
//     ...value,
//     address: "Hà Nội"
//   }));

//   console.log(updatedPersons);
//bai4
// var arr2 = ["4", "6", 1, 2, 3, 5, "y", "t", 5];
// const sum = arr2.reduce(function (accumulator, currentValue) {
//   const number = isNaN(currentValue) ? 0 : parseInt(currentValue);
//   return accumulator + number;
// }, 0);
// console.log("sum: ", sum);
//bai5
// var list1 = [3,6,7,9,5]
// var list2 = [3,5,7,8,6,6,7]
// function sumArrays (arr1,arr2) {
//     const sum1 = arr1.reduce((accumulator,currentValue)=>accumulator + currentValue,0)
//     const sum2 = arr2.reduce((accumulator,currentValue)=>accumulator + currentValue,0)
//     const totalSum=sum1+sum2;
//     return totalSum;
// }
// const result = sumArrays(list1,list2);
// console.log("result: ",result)
// console.log((list1.concat(list2)).sort((a, b) => a-b))
//bai6
// var data = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6];
// const newData = data.filter((value,index)=> {
//     return data.indexOf(value) !== index;
// });
// console.log(newData)
//bai7
// var array = [1, 5, 7, 8, 9, 15];
//a
// const Arr1 = array.filter((value) => value % 2 == 0);
// console.log(Arr1);
// //b
// const Arr2 = array.filter((value) => value % 2 !== 0);
// console.log(Arr2);
// //c
// const Arr3 = array.filter((value) => value >= 5);
// console.log(Arr3);
// //d
// const Arr4 = array.filter((value) => value % 5 == 0);
// console.log(Arr4);
// //e
// const Arr5 =array.filter(value=>value>5).map(value => {

//     return value > 5 ? value + 1:value
// })
// console.log(Arr5)
// //f
// console.log(array.slice(3))
// //g
// console.log(array.splice (2,1))
//h
// console.log(array.push(100))
// console.log(array)
//bai8
// const arr = [1, 8, 5, 2, 7, 6, 9, 2, 6];
// console.log(arr.sort((a,b) => b - a))
// console.log(arr.sort((a,b) => a- b ))
//bai9
// var array = [1, 3, 7, 8, 9, 0, 10, 3, 2];
// console.log(array.sort((a, b) => a - b));
// const newArr= array.map(function (value) {
//     return value*2
// })
// console.log(newArr)
// var array3= [1,2,3,5,1] ;
// // console.log(array3.concat(array))
// console.log(array.splice(0,5,array3))
// console.log(array)
// const newArr = array.filter((value)=> value % 2== 0)
// console.log(newArr)
// const newArr = array.filter((value)=> value % 2 !== 0)
// console.log(newArr)
//bai10
// var array2 = [1, 4, 2, 4, 5, 7, 8, 3, 6, 4, 9, 1, 6, 5];
// // // const newArr = array2.splice(0,13);
// // // console.log(newArr);
// // array2.unshift(12)
// // console.log(array2)
// array2.slice(2,5)
// console.log(array2)

//baitapnangcao
//bai1
// var bienLai = [
//   { ten: "an", giaTri: 300 },
//   { ten: "binh", giaTri: 180 },
//   { ten: "hoang", giaTri: 170 },
//   { ten: "van", giaTri: 100 },
//   { ten: "lam", giaTri: 200 },
//   { ten: "thinh", giaTri: 210 },
//   { ten: "diep", giaTri: 100 },
//   { ten: "huong", giaTri: 100 },
// ];
//a
//   const Lonhon200 = bienLai.filter((value)=>{
//     return value.giaTri>200
//   })
//   console.log(Lonhon200)
//b
// const TimLam = bienLai.findIndex(function(value)  {
//     return value.ten == "lam"
// });
// console.log(TimLam)
//c
// const BangNhau = bienLai.filter(function(item, index, array) {
//     return array.filter(function(innerItem) {
//         return innerItem.giaTri === item.giaTri;
//     }).length > 1;
// });
// console.log(BangNhau)
//d
// const Rank = bienLai.map((value) =>{
//   if (value.giaTri > 200) {
//     return {...value, rank:"VIP"}
//   }
//   else {
//     return {...value,rank:"normal"}
//   }
// })
// console.log(Rank)
//f
// const Thutu = bienLai.sort((a, b) => a.giaTri - b.giaTri);
// console.log(Thutu);
//bai2
// var arr2 = [2, 5, 7, 8, 3, 4, 1, 3, 6, 4, 3, 0];
//a
// console.log(arr2.slice(2, 6));
// var positions = arr2.reduce((acc, currentValue, currentIndex) => {
//   if (!acc[currentValue]) {
//     acc[currentValue] = [currentIndex];
//   } else {
//     acc[currentValue].push(currentIndex);
//   }
//   return acc;
// }, {});

// for (const key in positions) {
//   if (positions[key].length > 1) {
//     console.log("Phần tử", key, "trùng nhau ở vị trí:", positions[key]);
//   }
// }

