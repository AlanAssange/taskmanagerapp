import { useState } from "react";
import logo from "./bonfire.gif";
import "./App.css";
import { Task } from "./interfaces/Task.interface";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

interface Props {
  title: string;
}

export function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Title example",
      description: "Description example",
      completed: false,
    },
  ]);

  const getCurrentTimeStamp = (): number => new Date().getTime();

  const deleteATask = (id: number) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const addANewTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimeStamp(), completed: false },
    ]);

  return (
    <div className="background text-white">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a
            href="https://github.com/AlanAssange"
            className="navbar-brand display"
          >
            <img className="bonfire" src={logo} alt="Bonfire" />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
