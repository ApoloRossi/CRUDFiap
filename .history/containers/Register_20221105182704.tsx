/* eslint-disable @next/next/no-img-element */
import type {NextPage} from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { executeRequest } from '../services/api';


export const Register : NextPage = () =>{

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const doRegister = async() => {
        try{
            if(!email || !password || !name){
                return setError('Favor preencher os campos.');
            }

            setLoading(true);

            const body = {
                name,
                email,
                password
            };

            await executeRequest('user', 'POST', body);

            useRouter().push("index")
            
        }catch(e : any){
            console.log('Ocorreu erro ao efetuar cadastro:', e);
            if(e?.response?.data?.error){
                setError(e?.response?.data?.error);
            }else{
                setError('Ocorreu erro ao efetuar cadastro, tente novamente.');
            }
        }

        setLoading(false);
    }

    return (
        <div className='container-login'>
            <img src='/logo.svg' alt='Logo Fiap' className='logo'/>
            <div className="form">
                {error && <p>{error}</p>}
                <div>
                    <img src='/mail.svg' alt='Login'/> 
                    <input type="text" placeholder="Name" 
                        value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <img src='/mail.svg' alt='Login'/> 
                    <input type="text" placeholder="Login" 
                        value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <img src='/lock.svg' alt='Senha'/> 
                    <input type="password" placeholder="Senha" 
                        value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type='button' onClick={doRegister} disabled={loading}>{loading ? '...Salvando' : 'Cadastrar'}</button>
               
            </div>
        </div>
    );
}