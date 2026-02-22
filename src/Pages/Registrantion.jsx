import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import AuthContext from '../Context/AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const Registrantion = () => {
    const nevigate = useNavigate();
    const {SingInWithGoogleFunction, setUser, setLoading} =useContext(AuthContext);


    const handlesubmit = (e) => {
        e.preventDefault();
    
        const name= e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

         const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must be at least 8 characters and include uppercase, lowercase, number & special character"
            );
            return;
        }

          
        

        

        const user = {name, email, photo, password};
        console.log(user);

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            setLoading(false);
            toast.success("Registration successful");
            nevigate('/');
        })
        .catch(error => {
            console.error("Registration error:", error);
            toast.error("Registration failed");
        });

       
    }

  

    const handlegoogleLogin = () => {
        SingInWithGoogleFunction()
        .then(result => {
            const user = result.user;
            setUser(user);
            setLoading(false);
            toast.success("Google login successful");
            nevigate('/');
        })
        .catch(error => {
            console.error("Google login error:", error);
            toast.error("Google login failed");
        });
    }
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      
      <div className="w-full max-w-md rounded-2xl shadow-2xl p-8">
        
        <h2 className="text-3xl font-bold text-center  mb-6">
          Create Account
        </h2>

        <form onSubmit={handlesubmit} className="space-y-4">
          
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600  py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="my-4 flex items-center">
          <hr className="flex-grow border border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button onClick={handlegoogleLogin}
          className="w-full btn-secondary  flex items-center justify-center border-gray-300 py-2 cursor-pointer rounded-lg font-medium hover: transition duration-300"
        >
         <FaGoogle className="mr-2"/> Login with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>

      </div>
    </div>
  );
};

export default Registrantion;
