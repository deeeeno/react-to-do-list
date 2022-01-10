# REACT TUTORIAL 1. To Do List


Nomad coder의 React 첫번째 튜토리얼입니다.   

### 주요 내용
* list 성분을 JSX로 표현   
list.map method를 이용. 나는 for loop를 어떻게 쓸까 기대하고 있었는데 예상과 다르게 map method를 통해 JSX를 나타냈다. React에선 삼항연산자도 자주 쓰던데 코드를 간단하게 쓰는걸 습관 들여야 겠다.   
중요한건 list로 만들어진 태그는 key props가 필수로 있어야 한다는 것.   
```
{toDos.map((ele,idx)=><li key={idx}>{ele}</li>)}
```   
