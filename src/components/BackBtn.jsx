import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const BackBtn = () => {
  return (
    <Link to="/">
      <button className="btn border-white px-3 py-2 bg-green-500 flex items-center justify-center gap-2 absolute left-[20px] top-[10%]">
        <FontAwesomeIcon
          className="text-[18px] text-white"
          icon={faBackward}
        ></FontAwesomeIcon>
        <h1 className="text-[18px] text-white font-serif">Go Back</h1>
      </button>
    </Link>
  );
};

export default BackBtn;
