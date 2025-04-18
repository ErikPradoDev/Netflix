import './HomePageModule.css'
import { NavLink } from "react-router";

export default function HomePage(){
    return(
        <>
 <div className="container">
        <div className="contentSize">
          <div className="imgSize"></div>
          <div className="mainSize">
            
                    <form action="">
                            <div className="inputBox">
                                <input type="text" name="nome" id="nome" className="input-user" required />
                                <label className="labelForm" for="nome"> Email ou número de telefone </label>
                            </div>

                            <div className="inputBox">
                                <input type="text" name="email" id="email" className="input-user" required />
                                <label className="labelForm" for="email"> Senha </label>
                            </div>

                            <NavLink to="/ContactPage"> <button id="enter"> <b> Entrar </b> </button> </NavLink>
                            
                    </form>

            <p className='spc lp gray'> <b> OU </b>  </p>

            <button id='code'>
            <p className='lp bold'> <b> Usar um código de acesso </b>  </p>
            </button>
            
            <p className='lp gray marginBottom marginTop'> <b> Esqueceu a senha? </b>  </p>
            <p className='lp gray marginBottom'> <b> Novo por aqui? Inscreva-se agora. </b>  </p>
            <p className='lpp darkgray'> O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</p>
          </div>

        </div>


      </div>
        </>
    )
}