
import './Login.scss'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    let history = useHistory();
    const handleCreateNewAccount = () => {
        history.push("/register");
    }
    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                       <div className="brand">
                            TonCD
                       </div>
                       <div className="detail">
                            This is my project using bootstrap 5
                       </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none" >
                            TonCD
                        </div>
                        <input type="username" className='form-control' placeholder='Email address or phone numbers'/>
                        <input type="password" className='form-control' placeholder='Password'/>
                        <button className='btn btn-outline-primary'>Login</button>
                        <span className='text-center'>
                            <a className='forgot-password' href='#'>
                                Forgot your password?
                                </a>
                        </span>
                        <hr/>
                        <div className='text-center'>
                        <button className='btn btn-outline-success' onClick={() => handleCreateNewAccount()}>
                             Create New Account 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;