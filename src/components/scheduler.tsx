import { Calendar, Badge } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { daysScheduled } from "./listScheduled";

function getTodoList(date: Date) {
  const day = date.getDate();
  const month = date.getMonth();

  const dayScheduled = daysScheduled[0].day;
  const monthScheduled = daysScheduled[0].month - 1; //menos 1 por causa que o month é um array: jan = getMonth[0]

  switch (month) {
    case monthScheduled:
      switch (day) {
        case dayScheduled:
          return [
            daysScheduled[0]
          ];
        default:
          return [];
      }
    default:
      return [];
  }
}

function Scheduler() {
  function renderCell(date: Date) {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }
  return (
    <div className="flex justify-center">
      <Calendar compact bordered renderCell={renderCell} />{" "}
    </div>
  );
}

export default Scheduler;
