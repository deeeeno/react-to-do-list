import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [toDo,setToDo] = useState('');
  const [toDos,setToDos] = useState([]);
  const onChange = (event)=>setToDo(event.target.value);
  const onSubmit = (event)=> {
    event.preventDefault();
    if(toDo.length === 0) return;

    setToDos((currentToDos => [toDo,...currentToDos]));
    setToDo("");
  }
  //리스트 JSX를 출력할땐 key props가 필수.
  //왜냐 각 jSX를 다른 Item으로 보기 때문이다.
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
      <ul>
      {toDos.map((ele,idx)=><li key={idx}>{ele}</li>)}
      </ul>
    </div>
  );
}

export default App;
