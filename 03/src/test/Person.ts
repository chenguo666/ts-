class Person {
  protected name: string | undefined; // typescript4.0之前没有赋值的解决方案
  public age: number = 6;
  public phone: string = "1111";
  //   function 错误 类定义方法不能用function
  public doEat(): number {
    // 方法默认返回值未void
    return 3;
  }
}
const zhangsan = new Person();
zhangsan.doEat();
// 创建对象三件事
// 1.在堆中为类的某个对象 实例 分配一个空间
// 2.调用对应的构造函数【构造器】
// 3.把对象赋值给对象变量 【把实例赋值给实例变量】
// 通过构造器赋值
class Person2 {
  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_;
    this.age = name_;
    this.phone = name_;
  }
}
const my = new Person2("asdf", 20, "138");
