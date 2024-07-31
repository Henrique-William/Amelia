import Scheduler from "../components/scheduler";
import Header from "../components/header";
import ScheduledTime from "../components/scheduledTime";

function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center mx-6">
        <Scheduler />
      </div>
      <section>
        <h2 className="text-xl mx-6 mb-3.5">Agendados</h2>
        <ScheduledTime />
        <ScheduledTime />
      </section>
    </>
  );
}

export default Home;
