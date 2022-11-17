import React from "react";

const Overview = ({ tasks, handleDelete }) => {
  return (
    <div>
      {tasks.map((el) => {
        return (
          <div key="el.id" className="task-content">
            <p className="text">{el.text}</p>

            <p className="delete" onClick={(id) => handleDelete(el.id)}>
              x
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Overview;
