import React, { useEffect, useState } from "react";
import taskdata from "./data/commondata.json";
export default function ProgressBar() {
  const [data, setData] = useState(taskdata);
  const [taskpercent, setTaskpercent] = useState("");

  const handleChecked = (user) => {
    const userdata = data.map((task) => {
      if (user.id == task.id) {
        return { ...task, status: !task.status };
      } else {
        return { ...task };
      }
    });

    setData(userdata);
    let percent =
      (data.filter((taskdata) => taskdata.status && taskdata.status).length /
        data.length) *
      100;
    console.log("percent", percent, userdata);
    setTaskpercent(percent);
  };

  return (
    <>
      <div class="progress">
        <div
          class="progress-bar progress-bar-success"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${taskpercent}%` }}
        >
          {taskpercent}%
        </div>
      </div>
      {/* <progress value={taskpercent} max="100" /> */}
      <ul>
        {data.map((user) => {
          return (
            <div>
              <li>
                <input
                  checked={user.status}
                  type="checkbox"
                  onChange={() => handleChecked(user)}
                />
                {user.title}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
