var a = 0.1;
var b = 0.2;
const memory = new Float64Array(1);
memory[0] = a;
console.log(memory)
// [0.1]

const intarr = new Uint8Array(memory.buffer);
console.log(intarr)
//[154, 153, 153, 153, 153, 153, 185, 63]