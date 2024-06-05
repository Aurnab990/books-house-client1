import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';


const Userprofile = () => {
  const { user } = useAuth();
  // console.log(user);
  const [userInfo, setUserInfo] = useState([]);
  const [specificData, setSpecificData] = useState(null);

  useEffect(() => {
      fetch("https://books-house-server1.onrender.com/user")
          .then(res => res.json())
          .then(data => setUserInfo(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);

  // console.log(userInfo);

  useEffect(() => {
    const matchingUser = userInfo.find(info => info.email === user?.email);
    // console.log(matchingUser)
    if (matchingUser) {
      setSpecificData(matchingUser);
      console.log(specificData);
    }
  }, [userInfo, user]);


    // console.log(userInfo)

    return (
        <div>
            <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
  <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full">
    <div className="flex justify-center mb-4">
      <div className="avatar online">
        <div className="w-24 rounded-full border-4 border-primary">
          <img src={user.photoURL} alt="User avatar" />
        </div>
      </div>
    </div>
    <div className="text-center mb-6">
      {
        specificData ? (
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{specificData.name}</h1>
            <p className="text-gray-600">{specificData.email}</p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-gray-800">No name</h1>
            <p className="text-gray-600">No email</p>
          </div>
        )
      }
    </div>
    <div className="stats shadow rounded-lg">
      
      
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div className="stat-title">Email</div>
        <div className="stat-value text-secondary">{specificData ? specificData.email : 'No email'}</div>
        
      </div>
      
      <div className="stat">
        
        <div className="stat-title">Profile</div>
        <div className="stat-value">
          {
            specificData?(
              <Link to={`/profile/${specificData._id}`}><button className="btn btn-secondary">EDIT</button></Link>
            )
            :
             <button className="btn btn-secondary">EDIT</button> 
          }
            
          
            
          
        </div>
        <div className="stat-desc text-secondary"></div>
      </div>
    </div>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-4">Open drawer</label>
  </div>
</div>

                <Sidebar></Sidebar>
            </div>
        </div>
        </div>
    );
};

export default Userprofile;