function QQUser(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_;
  this.QQAge = QQAge_;
  this.QQMark = QQMark_;
  //   引用对象类型 = 引用类型= 对象类型 = 数组   数组也是引用类型
  this.commonfriends = ["a", "b", "c", "d", "e"];
  //   函数也是引用类型
  this.show = function () {
    console.log(this.QQNo, this.QQAge, this.QQMark);
    console.log(this.commonfriends);
  };
}
// a 叫对象变量
let a = new QQUser("asd", 15, "gdsa");
let b = new QQUser("ssasd", 95, "gsdfgdsa");
let c = new QQUser("ssagfdsd", 195, "gggggsdfgdsa");
a.show();
b.show();
c.show();
console.log(QQUser.prototype);
