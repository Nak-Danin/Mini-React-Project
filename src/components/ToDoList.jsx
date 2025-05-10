import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Wake up early",
    "Self Study",
    "Daily Exercise",
  ]);
  const [newTask, setNewTask] = useState("");
  const [completionStatus, setCompletionStatus] = useState(
    // new Array(tasks.length).fill(false)
    () => tasks.map((_,i) => i === 0) //first index true others false because i = [0,1,2]
  );
  function handleChange(e) {
    setNewTask(e.target.value);
  }
  function Addtasks() {
    if (newTask !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
      setCompletionStatus((prevStatus) => [...prevStatus, false]);
    }
  }
  function Removetasks(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index));
    setCompletionStatus((prev) => prev.filter((_, i) => i !== index));
  }
  function moveUp(index) {
    const updateTask = [...tasks];
    const updateStatus = [...completionStatus];
    if (index > 0) {
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      [updateStatus[index], updateStatus[index - 1]] = [
        updateStatus[index - 1],
        updateStatus[index],
      ];
      setTasks(updateTask);
      setCompletionStatus(updateStatus);
    }
  }
  function moveDown(index) {
    const updateTask = [...tasks];
    const updateStatus = [...completionStatus];
    if (index < tasks.length - 1) {
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      [updateStatus[index], updateStatus[index + 1]] = [
        updateStatus[index + 1],
        updateStatus[index],
      ];
      setTasks(updateTask);
      setCompletionStatus(updateStatus);
    }
  }
  function complete(index) {
    const newStatus = [...completionStatus];
    newStatus[index] = !newStatus[index];
    setCompletionStatus(newStatus);
    console.log(newStatus);
  }
  const allTaskDone =
    tasks.length > 0 && completionStatus.every((status) => status);
  return (
    <div className="h-screen bg-blue-200 flex items-center justify-center">
      <div className="flex flex-col lg:w-[800px] md:w-[700px] w-[350px] bg-purple-500 py-5 rounded-[20px] items-center justify-center border-2 border-black">
        <h1 className="lg:text-[40px] md:text-[40px] text-[30px] text-white font-serif">
          To-Do List
        </h1>
        <div className="flex justify-center gap-2">
          <input
            value={newTask}
            placeholder="Add new tasks"
            onChange={handleChange}
            className="bg-white border-2 border-black ps-2 lg:w-[380px] md:w-[350px] w-[200px] lg:text-[20px] md:text-[20px] py-1"
            type="text"
          />
          <button
            onClick={Addtasks}
            className="btn bg-green-500 text-white text-[15px] font-semibold px-4 lg:text-[18px] md:text-[18px]"
          >
            Add
          </button>
        </div>
        <div>
          {tasks.length > 0 ? (
            <ul className="mt-2">
              {tasks.map((task, index) => (
                <li
                  className="flex items-center justify-center gap-x-2 space-y-2 lg:w-[800px] md:w-[700px] w-[330px]"
                  key={index}
                >
                  <span className="bg-blue-500 text-white px-3 py-1 border-2 border-white lg:w-[380px] md:w-[350px] w-[150px] text-[15px] lg:text-[20px] md:text-[20px] rounded-[10px]">
                    {task}
                  </span>
                  <button
                    onClick={() => Removetasks(index)}
                    className="btn bg-red-500 text-white lg:px-2 md:px-2 px-1 text-[13px] lg:text-[18px] md:text-[18px]"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => moveUp(index)}
                    className="btn bg-white lg:px-2 md:px-2 px-1 text-[13px] lg:text-[18px] md:text-[18px]"
                  >
                    ⬆️
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    className="btn bg-white lg:px-2 md:px-2 px-1 text-[13px] lg:text-[18px] md:text-[18px]"
                  >
                    ⬇️
                  </button>
                  <FontAwesomeIcon
                    onClick={() => complete(index)}
                    className="text-white lg:text-[38px] md:text-[38px] text-[30px] pb-2 hover:cursor-pointer"
                    icon={!completionStatus[index] ? faSquare : faSquareCheck}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <h1 className="lg:text-[25px] md:text-[25px] text-[20px] text-black font-semibold">No task found</h1>
          )}
          {allTaskDone && (
            <h1 className="lg:text-[30px] md:text-[25px] text-white text-center">
              Congratulation! all tasks are completed🎊
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
