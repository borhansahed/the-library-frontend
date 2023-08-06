import { Link } from "react-router-dom";

interface IProps {
  title: string;
  isLogin: boolean;
}
export default function FormFooter({ title, isLogin }: IProps) {
  return (
    <>
      <small className="text-center mt-1">
        {title}
        <span className="pl-1 font-bold text-blue-700">
          <Link to={`/${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Signup" : "Login"}
          </Link>
        </span>
      </small>
    </>
  );
}
