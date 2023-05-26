import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import account from "../../assets/account.svg";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub, setError, error } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/recipe";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("wrong password");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found");
        } else {
          setError(error.message);
        }
      });
  };
  const googleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const gitHubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        {/* <div className='text-center lg:text-center'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
        </div> */}
        <img src={account} alt='' />
        <div className='card mx-16 flex-shrink-0 w-full  shadow-2xl bg-base-100'>
          <form onSubmit={handleLogin} className='card-body'>
            <h1 className='text-3xl text-center font-bold'>Login now!</h1>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                name='email'
                className='input input-bordered'
                required
              />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                name='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            {error && <p>{error}</p>}
            <div className='form-control mt-6'>
              <button className='btn btn-favorite border-none'>Login</button>
            </div>
          </form>
          <Link
            to='/register'
            className='text-center pb-4 text-sm text-blue-600 link link-hover'
          >
            Don't have account? Please Create account
          </Link>
          <div className='pb-4 flex flex-col w-4/6 mx-auto gap-2'>
            <button onClick={googleSignIn} className='btn social-btn btn-outline hover:border-none gap-1 '>
              <FaGoogle></FaGoogle>Signin With Google
            </button>
            <button onClick={gitHubSignIn} className='btn social-btn hover:border-none btn-outline gap-1 '>
              <FaGithub></FaGithub>Signin With Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
