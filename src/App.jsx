import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users.slice(0, 10)); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='bg-black text-white p-2 w-full'>
      <table className='w-screen'>
        <thead>
          <tr>
            <th className='px-1 py-1 bg-gray-800'>Sno</th>
            <th className='px-1 py-1 bg-gray-800'>Profile Pic</th>
            <th className='px-1 py-1 bg-gray-800'>First Name</th>
            <th className='px-1 py-1 bg-gray-800'>Last Name</th>
            <th className='px-1 py-1 bg-gray-800'>Email</th>
            <th className='px-1 py-1 bg-gray-800'>Username</th>
            <th className='px-1 py-1 bg-gray-800'>Domain</th>
            <th className='px-1 py-1 bg-gray-800'>IP</th>
            <th className='px-1 py-1 bg-gray-800'>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className='px-6 py-4 border'>{user.id}</td>
              <td className='px-6 py-4 border'>{user.image}</td>
              <td className='px-6 py-4 border'>{user.firstName}</td>
              <td className='px-6 py-4 border'>{user.lastName}</td>
              <td className='px-6 py-4 border'>{user.email}</td>
              <td className='px-6 py-4 border'>{user.username}</td>
              <td className='px-6 py-4 border'>{user.domain}</td>
              <td className='px-6 py-4 border'>{user.ip}</td>
              <td className='px-6 py-4 border'>{user.university}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
