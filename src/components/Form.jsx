import React, { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import './Form.css';

const Form = () => {
     const [email, setEmail] = useState(''); 
     const [password, setPassword] = useState('');

     const handleSubmit = (event) => {
          event.preventDefault();
          alert("Enviando os dados:" + email + " - " + password)
     };

     return (
          <div className='container'>
               <form action="" onSubmit={handleSubmit}>
                    <h1>Acesse o sistema</h1>
                    <div className="input-field">
                         <input
                         type="text"
                         placeholder='Nome'
                         onChange={(e) => setEmail(e.target.value)} />  
                         <FaUser className='icon' />
                    </div>
                    <div className="input-field">
                         <input
                         type="password"
                         placeholder='Senha'
                         onChange={(e) => setPassword(e.target.value)} />
                         <FaLock className='icon' />
                    </div>
                    <div className="recall-forget">
                         <label>
                              <input type="checkbox" /> Lembre de mim
                         </label>
                         <a href="#">Esqueceu sua senha?</a>
                    </div>

                    <button type="submit">Entrar</button> 

                    <div className="signup-link">
                         <p>Não tem uma conta? <a href="#">Registar</a>{" "}</p>
                    </div>
               </form>
          </div>
     );
};
export default Form
