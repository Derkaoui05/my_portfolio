import React, { useState } from 'react'
import {CookiesProvider, useCookies } from 'react-cookie'
const Cookie = () => {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
 
    const handle = () => {
       setCookie('Name', name, { path: '/' });
       setCookie('Password', pwd, { path: '/' });
    };
  return (
    <CookiesProvider>
        <div className="cookies">
      <h1>Name of the user:</h1>
      <input
         placeholder="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
         type="password"
         placeholder="name"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
         <button onClick={handle}>Set Cookie</button>
      </div>
   </div>
    </CookiesProvider>
  )
}

export default Cookie