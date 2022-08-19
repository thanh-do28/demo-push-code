// let weight = Number(prompt('nhập vào cân nặng của bạn'));
// let height = Number(prompt('nhập vào chiều cao của bạn'));
// let BMI = weight/(height*height);
// if ( BMI <= 18.5) {
//     console.log('bạn hơi gầy');
//  } else if (BMI > 18.5 && BMI <= 24.9) {
//      console.log('bạn bình thường');}
//  else if (BMI <= 29.9) {
//     console.log('bạn hơi béo');
// } else if (BMI <= 34.9) {
//     console.log('bạn béo phì cấp độ 1');
// } else if (BMI <= 39.9) {
//     console.log('bạn béo phì cấp độ 2');
// } else {
//     console.log('bạn béo phì cấp độ 3');
// }





// bài 2 : chương trình tính số nghiệm của phương trình bậc 
//
// let a = Number(prompt('nhập số a'));
// let b = Number(prompt('nhập số b'));
// let c = Number(prompt('nhập số c'));
// let delta = b**2 - (4*a*c);
// if (delta > 0) {
//     console.log('phương trình có 2 nghiệm phân biệt');
// } else if (delta < 0) {
//     console.log('phương trình vô nghiệm');
// } else if (delta = 0) {
//     console.log('phương trình có 1 nghiệm');
// }


// bài for
// bài 1
// for (let i = 0; i <= 100; i++) {
//     document.write(i+'\n');
// }
// for (let i = 100; i >=0; i--) {
//     document.write(i + '\n');
// }
// for (let i = 5; i <= 70; i++) {
//     if (i % 5 === 0) {
//         document.write(i + '-')
//     }
// }

// cách2
// let F = 0 , F0= 0, F1=0, tong=0;
// let fibonacci = "";
// for (let i=0; i<20;i++){
//     if(i==0){
//         F=1;
//         F1=1;
//         fibonacci += F+ " ";
//         tong +=F;
//     }else{
//         F= F0+F1;
//         F0 = F1;
//         F1 = F;
//         fibonacci += F+ " ";
//         tong +=F;
//     }
// }
// console.log("Tổng của các số = "+tong);

//cách 2
// let F = 0 , F0= 0, F1=0
// let chia5 = ""
// let fibonacci = "";
// for (let i=0; i<20;i++){
//     if(i==0){
//         F=1
//         F1=1
//         fibonacci += F+ " "
//     }else{

//         F= F0+F1
//         F0 = F1
//         F1 = F
//         fibonacci += F+ " "
//         if(F%5==0){
//             chia5 = F
//             break
//         }
//     }
// }
// console.log(chia5);




// let day = prompt('nhập ngày tháng năm (dd/mm/yy)').split('/');
// let a =[];
// for(let i = 0; i <day.length; i++) {
//     a.push(Number(day[i]));
// }console.log(a);
// if ((a[0] >= 1 && a[0] <= 30) && (a[1] == 4 || a[1] == 6 || a[1] == 9 || a[1] == 11)){
//     console.log(`${a.join('/')}  hợp lệ`);
//     if (a[0] < 30 ) {
//         a[0] = a[0] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//     }else if (a[0] == 30) {
//         a[0] = 1;
//         a[1] = a[1] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//     }
// }else if ((a[0] >= 1 && a[0] <= 31) && (a[1] == 1 || a[1] == 3 || a[1] == 5 || a[1] == 7 || a[1] == 10 || a[1] == 12)) {
//     console.log(`${a.join('/')}  hợp lệ`);
//      if (a[0] == 31 && a[1] == 12) {
//         a[0] = 1;
//         a[1] = 1;
//         a[2] = a[2] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//      }else if (a[0] < 31){
//         a[0] = a[0] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//     }else if (a[0] == 31) {
//         a[0] = 1;
//         a[1] = a[1] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//     }
// } else if ((a[0] >= 0 && a[0] <=29) && a[1] == 2) {
//     if(a[0]==29){
//         if((a[2] % 4 == 0 && a[2] % 100 == 0) || a[2] % 400 == 0) {
//             console.log(`${a.join('/')}  hợp lệ`);
//                 a[0] = 1;
//                 a[1] = a[1] + 1;
//                 console.log(`ngày tiếp theo là : ${a.join("/")}`); 
//         }else {
//             console.log(`${a.join('/')}  không hợp lệ`);
//         }
//     }else{
//         console.log(`${a.join('/')}  hợp lệ`);
//          if (a[0] < 28){
//             a[0] = a[0] + 1;
//             console.log(`ngày tiếp theo là : ${a.join("/")}`);
//         }else if (a[0] == 28) {
//             a[0] = 1;
//             a[1] = a[1] + 1;
//             console.log(`ngày tiếp theo là : ${a.join("/")}`);
//         }
//     }
// }else {
//     console.log(`${a.join('/')}  không hợp lệ`);
// }

let arr=[5, 2, 3, 3, 4, 1,3];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[i]== arr[j]){
            arr.splice(j,1);
        }
        if (arr[j] < arr[i]) {
            let a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;
            }
        }
    }console.log(arr);