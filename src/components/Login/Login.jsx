import LogoSVG from '../../../public/svg/logoSVG'
import './Login.scss'
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  return (
    <div className='login'>
        <div className="logo">
        <LogoSVG/>
        </div>

        <div className="loginContainer">
            <button className='wGoogle'><FcGoogle />Google</button>
            <h5 className='or'>or</h5>
         {/* <div className="inputContainer"> */}
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Password'/>
         {/* </div> */}
         <h5 className='forgot'>Forgot Password?</h5>
         <button className='loginButton'>Login</button>
         <h5>Dont't have an account? <span>Register Now</span></h5>
        </div>
    </div>
  )
}

export default Login