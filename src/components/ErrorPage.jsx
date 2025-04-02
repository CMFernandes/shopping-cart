import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div>
        <h1>Oh no, this route doesn&apos;t exist!</h1>
        <Link to="/home">
            Click here to go to the home page
        </Link>
      </div>
    );
  };
  
  export default ErrorPage;