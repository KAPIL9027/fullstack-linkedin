import {useState} from 'react'
import { useDispatch } from 'react-redux';
import './Login.css'
import { auth } from '../firebase';
import { login } from '../features/userSlice';
function Login() {

    const [fullname,setFullName] = useState('');
    const [photourl,setPhotoUrl] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const loginToApp = (e)=>{
     e.preventDefault();
    };
    const registerToApp = ()=>{
            if(!fullname)
            {
                alert("Enter the full name to register!!!");
            }

            auth.createUserWithEmailAndPassword(email,password).
            then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: fullname,
                    photoURL: photourl
    
                })
            }).then((userAuth)=>{
                dispatch(
                    login(
                        {
                            email: userAuth.user.email,
                            uid:userAuth.user.uid,
                            displayName:fullname,
                            photoUrl:photourl,
                        }
                    )
                )
            }).catch((e)=>{
                alert(e.message);
            })
    };

  return (
    <div className="login">
    <img src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png" 
    alt="linkedin"/>
    <form className="login-form" onSubmit={loginToApp}>
     <input value={fullname} onChange={(e)=>{setFullName(e.target.value)}} className="login-input" placeholder="Full Name
     (required if registering)"/>
     <input value={photourl} onChange={(e)=>{setPhotoUrl(e.target.value)}} className="login-input" placeholder="Photo url (optional)"/>
     <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="login-input credentials-input" placeholder="Email"/>
     <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="login-input credentials-input" placeholder="Password"/>
     <button type="submit" className="sign-in-btn">Sign in</button>
    </form>
    <div className="register">
        Not a member? <span className="register-now" onClick={registerToApp}>Register Now</span>
     </div>
    </div>
  )
}

export default Login