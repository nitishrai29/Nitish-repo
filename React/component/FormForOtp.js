import axios from 'axios';
import React ,{useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'


function FormForOtp () {
    const emailRef = useRef();
    const [otpForm,showForm] = useState(true)
    const sendOtp = async ()=>{
        try{
            let url = `/email-send`
            
            
            let options ={
                method:'POST',
                url : url,
                data : {email:emailRef.current.value}
            }

            console.log(options)


            

            let response = await axios(options)
            let record = response.data;
            console.log(record)
            if(record.statusText == 'successful'){
                toast.success(record.message);
                showForm(false)
            
            }else{
                toast.error(record.message);
            }

        }catch(e){
            toast.error("something went wrong")
        }
    }


    return (
      <>
      <div className='container'>
          <div className='row login'>
              <div className='col-md-2'>
              </div>
              <div className='col-md-6'>
                  <ToastContainer />
                  <h3 className='' style={{margintop:'25px'}}> reset password </h3>
               { otpForm ?  <form autoComplete='off' id="otpform" method='post'>
                      <div className='mb-3'>
                          <label className='form-label'> email</label>
                          <input type='email'className='form-control' name='email' 
                          ref={emailRef} autoComplete='off' />
                      </div>

                      <div>
                        <button type='button' className='btn btn-primary' onClick={sendOtp}> Generate otp </button>
                        
                        <Link to='/'> <button type='button' className='btn btn-danger'>  back </button></Link>
                      </div>

                  </form>
                  : <PasswordForm email={emailRef.current.value}/>
                }
              </div>

          </div>

      </div>
      </>
    )
}

export default FormForOtp
