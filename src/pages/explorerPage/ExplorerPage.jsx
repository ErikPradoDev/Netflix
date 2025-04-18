import { NavLink } from "react-router";
import './ExplorerPageModule.css';
import * as Icon from 'react-bootstrap-icons';

export default function ExplorerPage(){
    return(
        <>
        <div className="container">
        <div className="contentSize">
          <div className="header">
            <div className="fPart">
              <div className="logoNSize logoN">
              </div>
            </div>
          </div>
          <div className="principalMovie casamento">
            <div className="gradient">
                <div className="info">
                    <p className="mainTitle"> Viagem ao Casamento  </p>
                    <p className="studio gray"> Estúdios Ghibli </p>
                    <span className="rotule gray"> Romance <span className="circle"></span> Comédia <span className="circle"></span> Baseado em Fatos Reais</span>
                    <div className="lineBtn">
                    <div className="details">
                      <Icon.Plus className="iconPlus"> </Icon.Plus> 
                      <p className="pDetails gray"> Minha Lista </p>
                    </div>
                      <button className="watch">
                      <Icon.PlayFill className="play"></Icon.PlayFill>
                         <span className="mrgnRight"> Assistir </span>
                      </button>
                      <div className="details">
                      <span> <Icon.InfoCircle className="iconInfo"></Icon.InfoCircle> </span>
                      <p className="pDetails gray"> Saiba Mais </p>
                    </div>
                    </div>
                </div>

            </div>


                
        </div>
          <div className="mainContainer ">
          <h2> Populares na Netflix </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h2> Populares na Netflix </h2>
            <div className="lineCard">
              <div className="cardMovie pic5">
                <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic3">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic1">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic9">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic7">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic2">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic6">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic8">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic10">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>
              <div className="cardMovie pic4">
              <div className="cardMovieDct">
                  <p className="movieDct">TOP <br/> 10</p>
                </div>
              </div>


            </div>

                    
          </div>

        </div>


      </div>
        </>
    )
}