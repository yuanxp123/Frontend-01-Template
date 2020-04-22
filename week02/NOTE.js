# 每周总结可以写在这里

//四则运算

<Number> = "0" | "1" | "2" | ... . . | "9"

<DecimalNumber> = "0" | (("1" | "2" | ... . . | "9") <Number>* )

<PrimaryExpression> = <DecimalNumber> |
    "(" <LogicalExpression> ")"

<MultiplicativeExpression> = <PrimaryExpression> | 
    <MultiplicativeExpression> "*" <PrimaryExpression>| 
    <MultiplicativeExpression> "/" <PrimaryExpression>

<AdditiveExpression> = <MultiplicativeExpression> | 
    <AdditiveExpression> "+" <MultiplicativeExpression>| 
    <AdditiveExpression> "-" <MultiplicativeExpression>

<LogicalExpression> = <AdditiveExpression> | 
    <LogicalExpression> "||" <AdditiveExpression> | 
    <LogicalExpression> "&&" <AdditiveExpression></AdditiveExpression>

//计算机语言分类
高级语言和低级语言
  常见的低级语言有：机器码、汇编语言
  高级语言常见如：c，c++，java，python，PHP，c#，Ruby，go，kotlin，swift。

动态类型和静态类型
  动态性语言是指在程序运行期间才给变量指定数据的类型，常见于python和Ruby，而静态类型语言则恰好相反，在写程序代码的时候就要指定变量的类型，这种语言有：c，c++，java
强制类型和弱类型
  我们可知C语言中，一个变量只能定义为一种类型，如float类型，那么它就只能是float类型而不能在不发生转化的情况下赋予int类型，这就是 强制类型 的具体体现。而python不是，python中的变量可以任意的复制，而没有类型的界限。这就是弱类型
编译型，解释型，半编译半解释
  编译型语言可见于c，c++等
  解释型语言可见于python，JavaScript，Perl，shell等
  而java是半编译半解释型的语言，java会将源文件在jVM中转化为字节码，即. class文件，在程序运行的时候转化为二进制文件。和C#中的. net有点区别，C#编译的成的. net目标代码，接近与二进制文件，可移植性没有java好，java是“一次编译，到处执行”，c#是“一次编码，到处编译”。
面向对象型和面向过程型
  c++是部部分面对对象的，java具有封装性是完全面对对象的，c语言是面对过程的语言

//Number
var reg = /^-?\d+$|^(-?\d+)(\. \d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/g; 

//UTF-8 Encoding 的函数
function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const arr = [];
    for (var i = 0; i < code.length; i++) {
        const codeChart = code.charAt(i);
        if (codeChart === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            arr.push(hexVal);
            i =i + 2;
        } else arr.push(codeChart.charCodeAt(0));
    }
    return arr.join(',');
}

//正则表达式，匹配所有的字符串直接量，单引号和双引号
let regText = /[\x21-\x7E]{6, 16}|[\u0021-\u007E]{6, 16}|(['"])(?:(?!\1). )*?\1/g

tips：
产生式（BNF）
用尖括号括起来的名称来表示语法结构名
语法结构分成基础结构和需要用其他语法结构定义
基础结构称终结符
复合结构称非终结符
引号和中间的字的字符表示终结符
可以有括号
*表示重复多次
| 表示或
+表示至少一次

语言按语法分类
非形式语言
中文, 英文
形式语言(乔姆斯基谱系)
0型 无限制文法
?::=?
1型 上下文相关文法
?<A>?::=?<B>?
2型 上下文无关文法
<A>::=?
3型 正则文法
<A>::=<A>?
<A>::=?<A> (不允许)

 undefined 在全局函数是无法重定义的，在自己声明的函数可以, null在那里都不行
