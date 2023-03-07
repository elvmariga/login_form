import logo from './logo.svg';
import './App.css';
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Input from './components/input/Input';


function App() {
  return (
    <div className=" lg:grid grid-cols-2">
      <div className="bg-login-left bg-no-repeat bg-cover"></div>
      <div className=" h-screen flex flex-col  justify-center gap-4 px-4 mx-6  min-w-sm sm:mx-auto sm:w-1/2">
        <div className="self-center">
          <svg
            width="65"
            height="61"
            viewBox="0 0 65 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_3_185" fill="white">
              <rect width="65" height="61" rx="8" />
            </mask>
            <rect
              width="65"
              height="61"
              rx="8"
              stroke="#4361EE"
              stroke-width="32"
              mask="url(#path-1-inside-1_3_185)"
            />
          </svg>
        </div>
        <h1 className="text-secondary text-xl font-bold"> Welcome Back</h1>
        <p className="text-textColor text-xs">
          Manage your Business <br /> from a single platform sales to inventory
        </p>
        <form action="" method="post" className="grid gap-4 w-100">
          <Input
            type="mail"
            name="mail"
            id="mail"
            placeholder="Enter Your Email Address"
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />

          <div className="flex justify-between">
            <div>
              <input type="checkbox" name="remember-me" id="remember-me" />
              <label
                htmlFor="remember-me"
                className="text-xs pl-1 text-textColor"
              >
                Remember Me
              </label>
            </div>
            <div>
              <a href="#" className="text-primary text-sm">
                Forgot Password
              </a>
            </div>
          </div>
          <input
            type="submit"
            value="Log In"
            className="text-inputbg  bg-primary rounded py-2 mt-1.5"
          />
        </form>
        <div>
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-primary text-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
