import { FireworkSpinner } from "react-spinners-kit";
import "./main.css";

const Preloader = () => {
  return (
    <div className="preloader-Main">
      <FireworkSpinner size={100} />
    </div>
  );
};

export default Preloader;
