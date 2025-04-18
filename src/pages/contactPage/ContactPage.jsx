import './ContactPageModule.css'
import { NavLink } from "react-router";

export default function ContactPage(){
    return(
        <>
        <div className="container">
               <div className="contentSize">
                 <div className="imgSize"></div>
                 <div className="mainSize">
                   <h1 className='profile'>Quem está assistindo?</h1>

                   <div className="profileContentSize">

                   <NavLink to="/ExplorerPage">  
                    <div className="cardProfileSize">
                        <div className="cardProfileImgSize erikmari"></div>
                        <p className='cardProfileTxtSize'>
                            Erik e Mari
                        </p>
                    </div>
                    </NavLink>

                    <div className="cardProfileSize">
                        <div className="cardProfileImgSize lilique"></div>
                        <p className='cardProfileTxtSize'>
                            Lilique

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1C8.53043 1 9.03914 1.21071 9.41421 1.58579C9.78929 1.96086 10 2.46957 10 3V7H6V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1ZM11 7V3C11 2.20435 10.6839 1.44129 10.1213 0.87868C9.55871 0.31607 8.79565 0 8 0C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V7C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H11C11.5304 16 12.0391 15.7893 12.4142 15.4142C12.7893 15.0391 13 14.5304 13 14V9C13 8.46957 12.7893 7.96086 12.4142 7.58579C12.0391 7.21071 11.5304 7 11 7Z" fill="white"/>
                            </svg>
                        </p>



                    </div>



                   </div>

                   <div className="profileContentSize">
                    <div className="cardProfileSize">
                        <div className="cardProfileImgSize jabs"></div>
                        <p className='cardProfileTxtSize'>
                            Jabs

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1C8.53043 1 9.03914 1.21071 9.41421 1.58579C9.78929 1.96086 10 2.46957 10 3V7H6V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1ZM11 7V3C11 2.20435 10.6839 1.44129 10.1213 0.87868C9.55871 0.31607 8.79565 0 8 0C7.20435 0 6.44129 0.31607 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V7C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H11C11.5304 16 12.0391 15.7893 12.4142 15.4142C12.7893 15.0391 13 14.5304 13 14V9C13 8.46957 12.7893 7.96086 12.4142 7.58579C12.0391 7.21071 11.5304 7 11 7Z" fill="white"/>
                            </svg>
                        </p>
                    </div>

                    <div className="cardProfileSize">
                        <div className="cardProfileImgSize more">
                            <span id='more'> + </span>
                        </div>
                        <p className='cardProfileTxtSize'>
                            Adicionar Perfil
                        </p>
                    </div>



                   </div>


                 </div>
       
               </div>
       
       
             </div>
               </>
    )
}