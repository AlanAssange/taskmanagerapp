import { Task } from "../interfaces/Task.interface";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export const TaskCard = ({ task, deleteATask }: Props) => {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{task.title}</h2>
      <hr />
      <p>{task.description}</p>
      <button
        className="btn btn-dark"
        onClick={() => task.id && deleteATask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};
