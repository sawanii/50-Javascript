// 変数
let unko = 'Hello World!';
// unko ='Hello World2';

// 定数
const bigUnko = 'He..He...Hello World'

console.log(unko);
console.log(bigUnko);

//配列
let inoki = ['いーち','にーい','さーん','ダーー!!'];
console.log(inoki);
console.log(inoki[0]);
console.log(inoki[1]);
console.log(inoki[2]);
console.log(inoki[3]);

//ループ文
let index = 0;
// while(index < 5){
// 	//繰り返したい処理
// 	console.log(index);
// 	index++;
// }

//配列とループ文
while(index < inoki.length){
	//繰り返したい処理
	console.log(inoki[index]);
	index++;
}

//if/else

if(inoki.length > 5){	
	console.log('ifボンバイエ')
}else{
	console.log('ifボンバ...')
}

//関数

const test = (arg) => {
	if(inoki.length > arg){	
		console.log('関数ボンバイエ')
	}else{
		console.log('関数ボンバ...')
	}
};

test(3);
test(5);

//オブジェクト

const unko2 = {
	color: 'pink',
	size: 'large',
	ourfume: 'mint',
	goToilet: () =>{
		console.log('Hello world!');
	}
}

console.log(unko2);
console.log(unko2.color);
console.log(unko2.goToilet());
console.log(unko2);

//デフォルトにあるオブジェクト
console.log(window);
console.log(window.innerHeight);
console.log(window.innerWidth);
window.alert('Hello.world');

console.log(document);

console.log(document.getElementsByTagName('button')[0].addEventListener('click', () => {
 	window.alert('click');
} ));

