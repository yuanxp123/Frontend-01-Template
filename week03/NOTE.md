# 每周总结可以写在这里
1、JS浮点数
```js
function check(zero){

	if(1/zero === Infinity){
		return 1;
	}
	if(1/zero === -Infinity){
		return -1;
	}

}
function sign(number){

	return number / Math.abs(number);

}

2、Javascript语法

树和优先级
对象 a.b a[b] 动态获取属性，相当于反射 super.b 只能在构造函数中使用 super['b'] new.target 只能在构造函数中使用，判断一个对象是否根据new关键字创建的
Expression
对象成员
对象创建
函数调用
foo()
super()
foo()['b']
foo().b
Left Handside & Right Handside
等号左边永远是一个Reference类型
eg: foo() = 1 foo()["a"] = 1 new foo = 1
Update Expression
Unary单位运算符
delete a.b
void *
typeof null function
Reference
Boxing & Unboxing
String Number Boolean Symbol undefined null
7中基本类型 中的4种可以包装成对象
// super的使用
```js

class Parent{

	constructor(){
		this.a = 1;
	}

}
class Child extends Parent{

	constructor(){
		super();
		console.log(super.a);
	}

}

// string template

var name = "Alex"; 
function foo(){

	console.log(arguments);

}
foo `Hello ${name}` ; 

var name = "Alex"; 
function foo(){

	console.log("outer...."); 

	console.log(arguments);

	return function(){
		console.log("inner...."); 
		console.log(arguments); 
	}

}
foo() `Hello ${name}` ; 

// new的优先级考虑
function cl1(s){

	console.log("cl1:"+s)

}
function cl2(s){

	console.log("cl2:"+s);
	return cl1;

}
new cl2 //直接返回cl1哦
new (cl2)
new new cl2()

// 函数调用
class foo {

	constructor(){
		this.b = 1;
	}

}
new foo()['b']; 
foo["b"] = function(){}
new (foo["b"])

// Update Expression - LeftHandside - no LineTerminator
var a = 1, b =2, c =3; 
a
++
b
++
c

// 立即执行函数 IIFE Immediately invoked function expression
for(var i = 0; i < 10; i ++){

	var button = document.createElement("button");
	document.body.append(button);
	button.innerHTML = i;

	button.onclick = function(){
		console.log(i);
	}

}

for(var i = 0; i < 10; i ++){

	var button = document.createElement("button");
	document.body.append(button);
	button.innerHTML = i;

  + function(i){

		button.onclick = function(){
			console.log(i);
		}
	}(i)

}
for(var i = 0; i < 10; i ++){

	var button = document.createElement("button");
	document.body.append(button);
	button.innerHTML = i;

	void function(i){
		button.onclick = function(){
			console.log(i);
		}
	}(i)

}

