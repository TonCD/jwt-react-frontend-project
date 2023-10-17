
import './Register.scss'
import { useHistory } from "react-router-dom";

const Register = (props) => {
    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }
    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">
                            TonCD
                        </div>
                        <div className="detail">
                            Register Account
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none" >
                            TonCD
                        </div>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input type="email" className='form-control' placeholder='Email address' />
                        </div>
                        <div className='form-group'>
                            <label>Phone Numbers:</label>
                            <input type="text" className='form-control' placeholder='Phone numbers' />
                        </div>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input type="username" className='form-control' placeholder='Username' />
                        </div>
                        <div className='form-group'>  
                            <label>Password: </label>
                            <input type="password" className='form-control' placeholder='Password' />
                        </div>
                        <div className='form-group'>  
                            <label>Comfirm password: </label>
                            <input type="password" className='form-control' placeholder='Comfirm password' />
                        </div>
                        <button className='btn btn-outline-primary'>Register</button>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-outline-success' onClick={() => handleLogin()}>
                                Already've have an account? Login 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;