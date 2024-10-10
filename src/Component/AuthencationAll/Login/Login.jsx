import { useState } from 'react';
import "./Login.css"

const Login = () => {

    const [CheckType, setCheckType] = useState("password");
    const togglePasswordVisibility = () => {
        setCheckType((prevType) => (prevType === "password" ? "text" : "password"));
    };

    //   =======================================

    const [isInvalid, setIsInvalid] = useState({ username: false, password: false });

    const handleBlur = (e) => {
        const { name, value } = e.target;
        // Check if the input is empty on blur
        if (value.trim() === '') {
            setIsInvalid((prevState) => ({ ...prevState, [name]: true }));
        } else {
            setIsInvalid((prevState) => ({ ...prevState, [name]: false }));
        }
    };


    const [focus, setFocus] = useState({ username: false, password: false });
    const handleFocus = (e) => {
        const { name } = e.target;
        setFocus((prevState) => ({ ...prevState, [name]: true }));
    };
    return (
        <div className=" bg-white">
            <div className="LoginParent pt-[48px] pb-[116px] ">
                <div className="Login w-full md:w-[494px] mx-auto ">

                    <div className="Head">
                        <h2>Login</h2>
                    </div>
                    {/* ============ */}

                    <form className="p-2">

                        <div className={`Text_Field ${isInvalid.username ? 'error' : ''}`}>
                            <input
                                type="text"
                                name="username"
                                required
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <span></span>
                            <label>Username</label>

                        </div>
                        <h6 className={`required ${isInvalid.username ? 'error' : focus.username ? 'focus' : ''}`}>
                            {isInvalid.username ? 'required' : 'usernames are case-sensitive'}
                        </h6>

                        <div className={`Text_Field ${isInvalid.password ? 'error' : ''}`}>
                            <input
                                type={CheckType}
                                name="password"
                                required
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <span></span>
                            <label>Password</label>

                            <i
                                onClick={togglePasswordVisibility}
                                className={`fa ${CheckType === 'password' ? 'fa-eye' : 'fa-eye-slash'}  ${isInvalid.password ? 'eye' : ''}`}
                                aria-hidden="true"
                            ></i>

                        </div>
                        <h6 className={`required ${isInvalid.password ? 'error' : focus.password ? 'focus' : ''}`}>
                            {isInvalid.password ? 'required' : 'passwords are case-sensitive'}
                        </h6>

                    </form>

                    <button className='Login'>Login</button>

                    <div className="Others flex items-center justify-between">
                        <h3>Set New Password</h3>
                        <h3>Sign Up</h3>
                        <h3>Help</h3>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;