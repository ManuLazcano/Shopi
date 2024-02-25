import React from 'react';
import { Layout } from '../../components/Layout';
import { AuthContext } from '../../Contexts/AuthContext';

function SingIn() {    
  const userString = localStorage.getItem('user');
  const userParse = JSON.parse(userString);

  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  return (    
    <Layout>
        <section className="hidden w-96">
          <h1 className="font-medium text-center mb-6">Sing in</h1>
          <form>
            <div className="flex flex-col">
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="email" placeholder="example@gmail.com" 
                value={userParse?.email} 
              />
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="password" placeholder="Password" 
                value={userParse?.password} 
              />
              <button className="border h-10 rounded-md bg-blue-300 font-medium" type="submit"  
                onClick={() => setIsAuth(true)}>
                Log in
              </button>
            </div>
            <div className="my-3 text-center">
              <p className="text-gray-500 text-sm">Forgot my password</p>
              <button className="w-full mt-5 border h-10 rounded-md bg-gray-200 font-medium" type="button">Sing up</button>
            </div>
          </form>
        </section>
        <section className="w-96">
          <h1 className="font-medium text-center mb-6">Sing up</h1>
          <form>
            <div className="flex flex-col">
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="text" placeholder="Name"/>
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="email" placeholder="example@gmail.com"/>
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="password" placeholder="Password"/>
            <button className="border h-10 rounded-md bg-blue-300 font-medium" type="submit">Register</button>            
            </div>
          </form>
        </section>      
    </Layout>
  )
}
  
export {SingIn};