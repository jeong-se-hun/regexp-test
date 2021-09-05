
// 정규표현식*


const str = `
010-2636-1234
tpgns123@naver.com
https://www.omdbapi.con/?apikey=7035c60&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`


// `` < 사용시 문자 줄바꿈 가능

// 생성자 
// new RegExp('찾는대상', '옵션(플레그)')

/*

const regexp = new RegExp('the', 'gi')

console.log(str.match(regexp))

// match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환

*/

///////////////////////////////


// 리터럴 방식

/*

const regexp = /the/gi

console.log(str.match(regexp))

*/


/*

const regexp = /fox/gi

// test |` 정규식.test(문자열)` | 일치여부 (Boolean) 반환

// console.log(regexp.test(str))


////////////////////////////////////////////////


// replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체 원본 데이터 유지

console.log(str.replace(regexp, 'AAA'))
console.log(str)

//원본데이터 변경원할시 const 변수 > let 변수로 변경 활용
// let str = str.replace(regexp, 'AAA')


*/


/////////////////////////////////////////////////////////////////



// 플러그 (옵션)

/*

console.log(str.match(/\.$/gim))

// \ : 특정기능이 있는 문자를 일반 문자로 사용하게 해주는 기호 이스케이프 문자

*/


// 패턴


/*

//ex1

console.log(
  str.match(/^t/gmi)
)

// ^ t 로 시작하는 데이터 찾기




//ex2

console.log(
  str.match(/\b\w{2,3}\b/g)
)

// . : 임의의 문자 대입 
// \b \b : ex:  str.match(/\b\w{2,3}\b/g) 이경우 3글자로 이루어진 단어만 반환



//ex3 

const h = `  the hello world    !

`    

console.log(
  h.replace(/\s/g, '')
)

*/



//ex4


console.log(
  str.match(/.{1,}(?=@)/g)
)

// 앞쪽 일치 ?= 사용 하여 @ 의 앞쪽에 있는 .{1.} 1개 이상의 임의의 문자 빈환 

console.log(
  str.match(/(?<=@).{1,}/g)
)

// 뒤쪽 일치 ?<= 사용 하여 @ 의 뒤쪽에 있는 .{1.} 1개 이상의 임의의 문자 빈환