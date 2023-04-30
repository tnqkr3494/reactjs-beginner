import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); //...array : array의 요소들을 새로운 배열에 넣어주는것
    setToDo("");
  };
  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, toDoindex) => index !== toDoindex));
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
/*   
<button onClick={deleteBtn(index)}>❌</button>
이렇게 사용하면 deleteBtn함수가아니라 deleteBtn(index) return된 결과값으로 나와서 onClick이벤트에
함수만 적어야하는데 값을 적은꼴이 되어버려서 위 주석없는 코드처럼 사용한것.
*/
export default App;
