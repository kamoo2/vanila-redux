import { createStore } from 'redux';

const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

//첫인자값은 state이고 두번째는 action으로 dispatch를 통해서 들어오는 obj이다.
// reducer에서 return되는 것이 앱의 state가 되는 것이다.
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

//createStore(reducer)
//reducer은 함수로써 이 함수에서만 state 수정이 가능하다.
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

//subscribe는 count가 수정될때마다 함수를 호출시킨다.
countStore.subscribe(onChange);

//dispatch는 object로 reducer에 action을 전달해준다.
//단 이 object는 key로 type을 항상 가져야한다.
//{name:"ADD"} 는 불가능하다.
add.addEventListener('click', () => countStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));
