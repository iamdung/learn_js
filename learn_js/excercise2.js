//1.Tự nghĩ ra 1 mảng trong thực tế.
var sports = ['football','basketball','golf','tennis','volleyball'];

//2.In ra các phần tử trong mảng theo đúng thứ tự bằng 2 cách và ngược thứ tự bằng cách 1
//Cách 1
var sports = ['football','basketball','golf','tennis','volleyball'];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

//Cách 2 
var sports = ['football','basketball','golf','tennis','volleyball'];
for (sport of sports) {
    console.log(sport)
}

//Ngược thứ tự
var sports = ['football','basketball','golf','tennis','volleyball'];
for (var i = 4;i>=0;i--){
    console.log(sports[i]);
}

//3.Thêm 1 phần tử mới vào mảng. (mới)
var players = ['Messi','Ronaldo','Mbappe','Neymar','Haaland'];

//4.Xóa 1 phần tử trong mảng ở vị trí đầu tiên.
var players = ['Messi','Ronaldo','Mbappe','Neymar','Haaland'];
for (var i = 1;i<players.length;i++){
    console.log(players[i]);
}

//5.Xóa 1 phần tử trong mảng ở vịt trí cuối cùng.
var players = ['Messi','Ronaldo','Mbappe','Neymar','Haaland'];
for (var i = 0;i<players.length-1;i++){
    console.log(players[i]);
}

//6.Nghĩ thêm 1 mảng khác
var phones = ['Iphone','Samsung','Vsmart','Xiaomi','Oppo'];

//7.Hợp nhất (merge) 2 mảng lại với nhau. In ra tất cả các phần tử ở mảng hợp nhất.
var players = ['Messi','Ronaldo','Mbappe','Neymar','Haaland'];
var phones = ['Iphone','Samsung','Vsmart','Xiaomi','Oppo'];
var a = players.concat(phones);
console.log(a);



