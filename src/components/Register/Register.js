
import './Register.scss'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Register = (props) => {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidConfirmPassword: true
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);
    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }

    // test get api
    useEffect(() => {
        // axios.get("http://localhost:8080/api/v1/test-api").then(data => {
        //     console.log("Check data axios: ", data)
        // })
 
    }, []);
    const isValidInputs = () => {
        setObjCheckInput(defaultValidInput);
        if(!email) {
            toast.error("Email is required");
            setObjCheckInput({...defaultValidInput, isValidEmail:false});
            return false;
        }
        let re = /\S+@\S+\.\S+/;
        if(!re.test(email)){
            setObjCheckInput({...defaultValidInput, isValidEmail:false});
            toast.error("Please enter a valid email address");
            return false;
        }
        if(!phone) {
            toast.error("Phone is required");
            setObjCheckInput({...defaultValidInput, isValidPhone:false});

            return false;
        }
        if(!password) {
            toast.error("Password is required");
            setObjCheckInput({...defaultValidInput, isValidPassword:false});

            return false;
        }
        if(password != confirmPassword) {
            toast.error("Password confirm wrong!");
            setObjCheckInput({...defaultValidInput, isValidConfirmPassword:false});

            return false;
        }
        
        return true;
    }

    const handleRegister = () => {
        let check = isValidInputs();
        if (check ==true) {
            axios.post('http://localhost:8080/api/v1/register', {
                email, phone, username, password
            })
        }
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
                            <input type="email" className={objCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} placeholder='Email address'
                                value={email} onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Phone Numbers:</label>
                            <input type="text" className={objCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} placeholder='Phone numbers'
                                value={phone} onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Username:</label>
                            <input type="username" className='form-control' placeholder='Username'
                                value={username} onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Password: </label>
                            <input type="password" className={objCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} placeholder='Password'
                                value={password} onChange={(event) => setPassword(event.target.value)}

                            />
                        </div>
                        <div className='form-group'>
                            <label>Confirm password: </label>
                            <input type="password" className={objCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'} placeholder='Confirm password'
                                value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}

                            />
                        </div>
                        <button className='btn btn-outline-primary' onClick={() => handleRegister()}>Register</button>
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