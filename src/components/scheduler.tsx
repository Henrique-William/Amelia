import { useState } from "react";
import { Calendar, Badge } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { daysScheduled } from "./listScheduled";
import ScheduledTime from "./scheduledTime";

interface ScheduledItem {
  start: string;
  end: string;
  day: number;
  month: number;
  title: string;
  author: string;
}

function getTodoList(date: Date): ScheduledItem[] {
  const day = date.getDate();
  const month = date.getMonth();

  return daysScheduled.filter((schedule) => {
    return schedule.day === day && schedule.month - 1 === month;
  });
}

function Scheduler() {
  const [scheduledItems, setScheduledItems] = useState<ScheduledItem[]>(
    getTodoList(new Date())
  );

  function handleSelect(date: Date) {
    setScheduledItems(getTodoList(date));
  }

  function renderCell(date: Date) {
    const list = getTodoList(date);

    if (list.length > 0) {
      return <Badge className="calendar-todo-item-badge" />;
    }
    return null;
  }

  return (
    <div className="flex-row justify-center mx-6">
      <section className="flex justify-center">
        <Calendar
          compact
          bordered
          renderCell={renderCell}
          onSelect={handleSelect}
        />
      </section>
      <section>
        <h2 className="text-xl mx-6 mb-3.5">Agendados</h2>
        {scheduledItems.length > 0 ? (
          scheduledItems.map((item, index) => (
            <ScheduledTime key={index} item={item} />
          ))
        ) : (
          <p className="mx-6 mt-10 flex justify-center font-black text-xl text-primary">
            Nenhum agendamento encontrado.
          </p>
        )}
      </section>
    </div>
  );
}

export default Scheduler;
