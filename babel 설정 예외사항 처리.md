# Mocha test내에서 es6 arrow function의 this를 사용하지 못한 이유
    
1. babel 옵션 중 target을 설정하지 않으면 ES5 코드를 모두 Transfile 함
2. jsdom은 event를 호출 할 시 call 메소드를 통해 this 값을 element 객체로 변환함
3. Arrow 함수가 일반 함수로 변했기 때문에 jsdom에서 입력한 element가 this의 값으로 변경됨
* https://babeljs.io/docs/en/babel-preset-env#targets
* Sidenote, if no targets are specified, @babel/preset-env will transform all ECMAScript 2015+ code by default.


# babel에서 target 설정하지 않고 .browserslistrc 파일을 사용하는 이유

1. 추후 autoprefix 및 csslint등의 라이브러리를 적용할 때 .browserslistrc 파일을 사용하여 공통 브라우저 설정을 하기 위함


# Mocha에서 babel.config.json 옵션을 못 읽는것 같음

###  원인
1. .babelrc 사용 시 babel/register 에서 babel 적용하여 test  가능

2. babel.config.json 적용 시 babel transfile이 안되서 import에서 오류 발생
