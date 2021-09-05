 # 정규표현식(RegExp)

 정규식, Regular Expression

 ## 역활

 -문자 검색(search)
 -문자 대체(replace)
 -문자 추출(extract)

 ## 테스트 사이트

 https://regexr.com/


## 정규식 생성

```js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```



## 예제 문자

```js
const str = `
010-2636-1234
tpgns123@naver.com
https://www.omdbapi.con/?apikey=7035c60&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test |` 정규식.test(문자열)` | 일치여부 (Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체 


## 플레그(옵션)
플레그 | 설명
--|--
g | 모든 문자 일치 (global)
i | 영어 대소문자를 구분하지 않고 일치(ignore case)
m | 여러줄 일치(multi line) 
\ | 특정기능이 있는 문자를 일반 문자로 사용하게 해주는 기호 이스케이프 문자
$ |  ~ 으로 끝나는것 



## 패턴 | 설명 1

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | a는 있는데 b가 없거나 b와 일치
{3} | 3개의 연속 일치 
{3,} | 3개이상 연속 일치 
{3,5} | 3개이상 5개 이하(3~5개) 연속 일치 


## 패턴 | 설명 2

패턴 | 설명
--|--
[abc] | a 또는 b 또는 c
[a-z] | a 부터 z 사이의 문자 구간에 일치(소문자)
[A-Z] | a 부터 z 사이의 문자 구간에 일치(대문자)
[0-9] | 0 부터 9 사이의 문자 구간의 일치(숫자)
[가-힣] | 가 부터 힣 사이의 문자 구간에 일치(한글)


## 패턴 | 설명 3

패턴 | 설명
--|--
\w | 63개 문자(Word, 대소영문52개, 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary) 사이사이 경계
\d | 숫자(Digit)에 일치
\s | 공백 (Spae, Tab 등) 에 일치



## 패턴 | 설명 4

패턴 | 설명
--|--
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)