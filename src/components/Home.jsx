import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div className="w-screen h-screen m-auto flex flex-col justify-center items-center gap-3 bg-[#0D1717] text-white">
      <div className="lg:text-[2rem] md:text-[1.5rem] text-[20px] font-mono">
        <span style={{ color: "white" }}>
          <Typewriter
            words={["Welcome to my Mini Projects"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
      <Link
        className="btn bg-blue-500 py-3 px-4 font-serif font-medium"
        to="/ColorPicker"
      >
        ColorPicker
      </Link>
      <Link
        className="btn bg-green-500 py-3 px-6 font-serif font-medium"
        to="/toDoList"
      >
        ToDoList
      </Link>
    </div>
  );
};

export default Home;
