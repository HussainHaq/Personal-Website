import { useState } from 'react'
import Snorlax from '../../assets/images/snorlax.png'
import { useLogin } from '../../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        await login(email, password)
    }

    return(
        <section className='log_section'>
            <div className='snorlax'>
                <img src={Snorlax} alt='snorlax' width='200' height='200'/>
                <p>Only Master Husain can pass through here</p>
            </div>
            <form className='create_form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <h3>Email</h3>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <h3>Password</h3>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                
                <button disabled={isLoading} >Login</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </section>
    )
}

export default Login