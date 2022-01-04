
import { useState, useEffect } from 'react';

import { useNavigate,Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import MyNavbar from '../layout/MyNavbar';
import { NavLink } from 'react-router-dom';


function PassChange() {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [otp, setOtp] = useState("");
    const [disbl, setdisbl] = useState("disable")
    const [hid, setHid] = useState("hidden")
    const [showpass, setShowpass] = useState("hidden")
    const [emailHide, setEmailHide] = useState("")
    const [otpHide, setOtpHide] = useState("hedden")
    const [condown, setCondown] = useState("hidden")
    const [resDis, setResDis] = useState("disable")
    const[otpForm,setOtpForm]=useState(true)
    const navigate = useNavigate()

    const [tCont, setTcont] = useState(20);

    useEffect(() => {
        if (tCont > 0) {
            const timer = tCont > 0 && setInterval(() => setTcont(tCont - 1), 1000);
            clearInterval(timer);
        }

    })



    // function call on GetOTP button
    const getOTP = async (e) => {
        e.preventDefault();
        let data = { email }

        if (email) {
            fetch("/email-send", {
                method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then((result) => {
                    console.log(result.otp)
                    if (getOTP) {
                        toast.success("OTP Send sucessfully...",
                            {
                                position: "top-center"
                            });

                            setOtpForm(false)
                        setdisbl("")
                        setHid("")
                        setEmailHide("hidden")
                        setOtpHide("")
                        setCondown("")
                        setCounter(10)
                        setResDis("disable")
                    }
                    else {
                        toast.error("User Not Found",
                            {
                                position: "top-center"
                            });
                    }
                }
                )
        }
        else {
            toast.error("kindly enter email Id...",
                {
                    position: "top-center"
                });
        }
    }


    // Fuction on Submit

    const resetPass = (e) => {

        e.preventDefault();
        let data = { email, otp, password }
        //  if(!data.password){
        //     toast.error("Password Can't be blank...",
        //     {
        //         position:"top-center"
        //     });

        //  }

        if (data.otp) {
            const otpData = fetch(`/change-password`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((result) => {

                console.log("result", result)
                const resStatus = result.status
                if (resStatus === 202) {
                    toast.success("Password Updated.",
                        {
                            position: "top-center"
                        });
                    navigate("/login")
                }
                else {
                    toast.error("Error Found.",
                        {
                            position: "top-center"
                        });
                }



                console.log(result.message)
            })
            console.log("Datatatata massage", otpData)
        }
        else {
            toast.warning("OTP Not Found...",
                {
                    position: "top-center"
                });
        }

    }


    function showfull(e) {
        e.preventDefault();
        setHid("hidden")
        setOtpHide("hidden")
        setCondown("hidden")
        setShowpass("")
        setdisbl("disable")


    }



    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timer = (counter > 0 && setInterval(() => setCounter(counter - 1), 1000));
        if (counter === 1) {
            setCondown("hidden")
            setResDis("")

        }

        return () => clearInterval(timer);
    }, [counter]);






    return (
        <>

            <div className='container'>
                <div className='row login'>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-6'></div>
                    <center > <h1>Reset Password</h1></center >
                    {otpForm ? <form autoComplete='off' id="otpform" method='post'>
                        <div className='mb-3'>
                            <label className='form-label' style={{ marginLeft: '-11rem', marginTop: '1rem', marginRight: '119px' }}  > Email:-</label>
                            <input type='email' className='form-control' hidden={emailHide} placeholder="Email address" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }}
                                autoComplete='off' style={{ marginLeft: '4rem', marginTop: '-35px', width: '16rem' }} />
                        </div>

                        <div>
                            <Link to='/other'> <button type='button' className='btn btn-primary' hidden={emailHide} onClick={getOTP} style={{ marginRight: '8rem' }}> send otp </button> </Link>
                            {/* nbsp; */}
                            <Link to='/'> <button type='button' className='btn btn-danger' style={{ marginTop: '-76px', marginLeft: '12rem' }}>  back </button></Link>
                        </div>

                        

                    </form>

                        : <form autoComplete='off' id="otpform" method='post'>
                            
                            <label className='form-label' style={{ marginLeft: '-11rem', marginTop: '1rem', marginRight: '119px' }}  > Otp:-</label>
                            <input type="text" className='form-control' placeholder="Otp" hidden={otpHide} disabled={disbl} name="OTP" onChange={(e) => { setOtp(e.target.value) }} style={{ marginLeft: '70px', marginTop: '-36px', width: '15rem' }} />

                            <h3 hidden={condown} style={{ color: "red", marginLeft: "-2rem", marginTop: '1rem' }}>Resend Otp In:: <span style={{ color: "green", fontWeight: "bold" }}> 00:{counter}</span></h3>

                            {/* <br/><button onClick={getOTP} disabled={resDis} hidden={otpHide}>Resend Otp</button> */}
                            <div >
                                <button className='btn btn-primary' onClick={getOTP} disabled={resDis} hidden={otpHide} style={{ marginLeft: '-11rem', marginTop: '1rem' }}> Resend Otp </button>
                            </div>
                            <br /><input type="password" className='form-control' hidden={showpass} placeholder=" Enter New Password" name="newPassword" onChange={(e) => { setPass(e.target.value) }} style={{ marginLeft: '6rem', marginTop: '-3rem', width: '13rem' }} />
                            {/* <br /><input type="cpassword" className='form-control' hidden={showpass} placeholder=" Enter confrm Password" name="newPassword" onChange={(e) => { setPass(e.target.value) }} style={{marginLeft:'6rem', marginTop:'0rem', width:'13rem'}} /> */}
                            <br />

                            <center> <button className="btn btn-success btn-block" hidden={hid} onClick={showfull} style={{ marginLeft: '14rem', marginTop: '-170px' }} >Next</button></center>
                            <center> <button className="btn btn-primary btn-block" hidden={showpass} onClick={resetPass} >Submit</button></center>
                            {/* <p ><NavLink to="/">GoBack</NavLink></p> */}

                        </form>
                    }
                </div>
            </div>
        </>
    );

};
export default PassChange