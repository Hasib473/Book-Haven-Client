import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { FadeLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
    const {user, Loading} = useContext(AuthContext);
    const location = useLocation();

    if (Loading) {
    return <div className="text-center mt-10"><FadeLoader /></div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;