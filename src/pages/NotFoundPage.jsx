import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p> Ops! Not Found Page</p>
      <Link to="/login">Back to Login page</Link>
    </div>
  );
}
