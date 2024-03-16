import React, { useState } from 'react';
import './Food.css';

const Food = () => {
  const [rewardWon, setRewardWon] = useState(false);
  const [foodTasks, setFoodTasks] = useState([
    { id: 1, location: 'Source', task: 'Sector 93A', completed: false },
    { id: 2, location: 'Source', task: 'Sector 93B', completed: false },
    { id: 3, location: 'Source', task: 'Greater Noida', completed: false },
    { id: 4, location: 'Source', task: 'Chandini Chowk', completed: false },
    { id: 5, location: 'Source', task: 'Sector 137', completed: false },
    { id: 6, location: 'Destination', task: 'Sector 62', completed: false },
  ]);

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = foodTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setFoodTasks(updatedTasks);
    checkAllTasksCompleted(updatedTasks);
  };

  const checkAllTasksCompleted = (tasks) => {
    const allCompleted = tasks.every((task) => task.completed);
    if (allCompleted) {
      setRewardWon(true);
    }
  };

  return (
    <div className="food-container">
      <img
        src="https://media.istockphoto.com/id/1369614743/vector/cute-jack-russell-terrier-puppy-peeking-cartoon-vector-illustration.jpg?s=612x612&w=0&k=20&c=dMxM-h5iol-gGsQByphc7_RSx2sd4NtSI4tDiG_p3TE="
        alt="Jack Russell Terrier"
        className="food-image"
      />
      <div className="food-card">
        <h2 className="food-title">Food Collection & Distribution</h2>
        <div className="food-timeline">
          {foodTasks.map((task) => (
            <div
              key={task.id}
              className={`food-task ${task.completed ? 'completed' : ''}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <p className={`${task.location === 'Source' ? 'source' : 'destination'} ${task.completed ? 'checked' : ''}`}>
                {task.location} - {task.task}
              </p>
            </div>
          ))}
        </div>
        {rewardWon && <p className="reward-message">You have won a Reward!</p>}
      </div>
    </div>
  );
};

export default Food;