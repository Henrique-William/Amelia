import Scheduler from "../components/scheduler";
import Header from "../components/header";

function Home() {
  return (
    <>
      <Header/>
      <div className="flex justify-center mx-6">
      <Scheduler />
      </div>
      
    </>
  );
}

export default Home;
