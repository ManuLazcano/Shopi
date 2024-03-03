import React, { useRef, useState } from 'react';
import { Layout } from '../../components/Layout';
import { AuthContext } from '../../Contexts/AuthContext';
import { Link, Navigate } from 'react-router-dom';

function SingIn() {    
  const { account, setAccount, setSignOut } = React.useContext(AuthContext);
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

    const stringifiedAccount = JSON.stringify(data);
    localStorage.setItem('account', stringifiedAccount);
    setAccount(data);

    handleSignIn();
  }

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false);
    localStorage.setItem('sign-out', stringifiedSignOut);
    setSignOut(false);

    return <Navigate replace to={'/'} />
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin();
  
  const renderLogin = () => {
    return (
      <section className="w-96">
          <h1 className="font-medium text-center mb-6">Sing in</h1>
          <section>
            <div className="flex flex-col">
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="email" placeholder="example@gmail.com" defaultValue={parsedAccount?.email}/>
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="password" placeholder="Password" defaultValue={parsedAccount?.password}/>              
              <Link to="/"> 
                <button className="w-full border h-10 rounded-md bg-blue-300 font-medium" disabled={!hasUserAnAccount}
                  onClick={() => handleSignIn()}>
                  Log in
                </button>     
              </Link>         
            </div>
            <div className="my-3 text-center">
              <p className="text-gray-500 text-sm">Forgot my password</p>              
              <button className="w-full mt-5 border h-10 rounded-md bg-gray-200 font-medium" type="button" disabled={hasUserAnAccount}
                onClick={() => setView('create-user-info')}>
                Sing up</button>
            </div>
          </section>
        </section>
    );
  }

  const renderCreateUserInfo = () => {
    return (
      <section className="w-96">
          <h1 className="font-medium text-center mb-6">Sing up</h1>
          <form ref={form}>
            <div className="flex flex-col">
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="text" id="name" name="name" defaultValue={parsedAccount?.name} placeholder="Name"/>
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="email"id="email" name="email" defaultValue={parsedAccount?.email} placeholder="example@gmail.com"/>
              <input className="border border-slate-300 hover:border-blue-300 focus:border-red-400 rounded-lg p-2 mb-3" type="password" id="password" name="password" defaultValue={parsedAccount?.password} placeholder="Password"/>
            </div>
            <Link to="/">
              <button className="w-full border h-10 rounded-md bg-blue-300 font-medium" type="submit"
                onClick={() => createAnAccount()}>
                Create
              </button>            
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