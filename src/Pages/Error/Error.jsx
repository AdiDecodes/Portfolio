import "../../App.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="Error-main">
        <div className="Heading">404</div>
        <div className="subheading">Page Not Found</div>
        <Link to="/">
          <div className="back-to-home">Back To Home</div>
        </Link>
      </div>
    </>
  );
};

export default Error;
