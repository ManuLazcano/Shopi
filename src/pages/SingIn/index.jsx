import React, { useRef, useState } from 'react';
import { Layout } from '../../components/Layout';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link } from 'react-router-dom';

function SingIn() {    
  const { account } = React.useContext(AuthContext);
  const [view , setView] = useState('user-info');
  const form = useRef(null);

  const accountInLocalStorage = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountInLocalStorage);

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };

    console.log(data);
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin();
  
  const renderLogin = () => {
    return (
      <section className="w-96">
          <h1 className="font-medium text-center mb-6">Sing in</h1>
          <form>
            <div className="flex flex-col">
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="email" placeholder="example@gmail.com" value={parsedAccount?.email}/>
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="password" placeholder="Password" value={parsedAccount?.password}/>
              <button className="border h-10 rounded-md bg-blue-300 font-medium" type="submit" disabled={!hasUserAnAccount}>
                Log in
              </button>
            </div>
            <div className="my-3 text-center">
              <p className="text-gray-500 text-sm">Forgot my password</p>
              <button className="w-full mt-5 border h-10 rounded-md bg-gray-200 font-medium" type="button" disabled={hasUserAnAccount}
                onClick={() => setView('create-user-info')}>
                Sing up</button>
            </div>
          </form>
        </section>
    );
  }

  const renderCreateUserInfo = () => {
    return (
      <section className="w-96">
          <h1 className="font-medium text-center mb-6">Sing up</h1>
          <form ref={form}>
            <div className="flex flex-col">
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="text" id="name" name="name" placeholder="Name"/>
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="email"id="email" name="email" placeholder="example@gmail.com"/>
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="password" id="password" name="password" placeholder="Password"/>
            </div>
            <Link to="/">
              <button className="border h-10 rounded-md bg-blue-300 font-medium" type="submit"
                onClick={() => createAnAccount()}>
                Register</button>            
            </Link>            
          </form>
        </section>      
    );
  }

  return (    
    <Layout>
      {renderView()}
    </Layout>
  )
}
  
export {SingIn};