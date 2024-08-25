import { useState } from "react"
import { Header } from "../../components/Header"

export const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    const addTodo = () => {
        if(inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo();
    };

    return(
        <>
            <Header user={null} title={"Tools"} />
            <section className="pl-12 mt-20 sm:ml-64">
                <div id="path">
                    <p className="font-bold text-gray-600">
                        Tools <span className="text-[#ff002c]">&gt;</span> To-Do
                    </p>
                </div>
                <div className="mt-10">
                <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
                </div>
            </section>
        </>
    )
}