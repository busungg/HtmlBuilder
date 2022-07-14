# Mocha test내에서 es6 arrow function의 this를 사용하지 못한 이유

```
1. babel 옵션 중 target을 설정하지 않으면 ES5 코드를 모두 Transfile 함
2. jsdom은 event를 호출 할 시 call 메소드를 통해 this 값을 element 객체로 변환함
3. Arrow 함수가 일반 함수로 변했기 때문에 jsdom에서 입력한 element가 this의 값으로 변경됨
* https://babeljs.io/docs/en/babel-preset-env#targets
* Sidenote, if no targets are specified, @babel/preset-env will transform all ECMAScript 2015+ code by default.
```

1. 상단의 문제가 아니였고 관련 function 버그였음
2. babel을 통해 es6 문법으로 모두 변경되고 그 코드를 통해 mocha가 동작함
3. 하지만 visual studio code의 코드는 transfile 된 코드를 볼수 없기 때문에 착각함 \*\*
4. scope를 보게 되면 상단 closure에 \_this 값이 있는데 그것이 babel에서 transfile한 this 값

# babel에서 target 설정하지 않고 .browserslistrc 파일을 사용하는 이유

1. 추후 autoprefix 및 csslint등의 라이브러리를 적용할 때 .browserslistrc 파일을 사용하여 공통 브라우저 설정을 하기 위함

# Mocha에서 babel.config.json 옵션을 못 읽는것 같음

### 원인

1. .babelrc 사용 시 babel/register 에서 babel 적용하여 test 가능

2. babel.config.json 적용 시 babel transfile이 안되서 import에서 오류 발생
