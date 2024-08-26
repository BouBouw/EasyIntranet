import { useEffect, useState } from "react"
import { Header } from "../../components/Header"

export const ToDo = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hours = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    function getCurrentWeekRange() {
        const today = new Date();
      
        // Récupérer le jour de la semaine (0 pour dimanche, 1 pour lundi, etc.)
        const dayOfWeek = today.getDay(); 
      
        // Trouver le lundi de la semaine en cours
        const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; 
        const monday = new Date(today);
        monday.setDate(today.getDate() - diffToMonday);
      
        // Trouver le dimanche de la semaine en cours
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
      
        // Formater les dates en jj/mm/aaaa
        const formatDate = (date) => {
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
        };
      
        return `${formatDate(monday)} to ${formatDate(sunday)}`;
    }

    function getCurrentDateFormatted() {
      const today = new Date();
      
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
      const year = today.getFullYear();
    
      return `${day}/${month}/${year}`;
    }

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

    useEffect(() => {          
    })

    return(
        <>
            <Header title={"Tools"} />
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
                <div className="mt-10">
                    <div>
                        { getCurrentWeekRange() } - today : { getCurrentDateFormatted() }
                    </div>
                    <div className="flex justify-between p-5">
                        <div className="flex flex-col items-center">
                          <span>Hours</span>
                          <ul className="mt-1 space-y-14">
                            {hours.map((hour, index) => (
                              <li key={index}>
                                <span className="mx-2">{hour}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {days.map((day, dayIndex) => (
                          <div key={dayIndex} className="flex flex-col items-center">
                            <span>{day}</span>
                            <ul className="mt-2 border-l-2 border-red-500">
                              {hours.map((_, hourIndex) => (
                                <li key={hourIndex}>
                                  <button
                                    className={`p-10 border-b border-gray-300 w-40 ${
                                      day === 'Sunday'
                                        ? 'bg-gray-100/30 hover:bg-gray-200/30'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                                    id="calendarTodo"
                                    key={'test'}
                                    onClick={(e) => {
                                        console.log(`${dayIndex}.${hourIndex}`)
                                        // add to-do user
                                    }}
                                    disabled={day === 'Sunday'}
                                  ></button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}