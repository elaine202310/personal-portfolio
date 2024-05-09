import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import p1 from "../assets/img/p1.png";
import GBIcon from '../assets/img/github.svg';

export const Skills = () => {


  return (
    <section className="skill" id="skills">
        <div className="container">
                    <div className="skill-bx wow zoomIn">
                        <h2>Projects</h2>
                        <p>Developed full-stack projects</p>

                        <div class="row row-cols-1 row-cols-md-3 g-4">
                          <div class="col">
                            <div className="skill-card" >
                              <h5 class="card-title">smart job web app</h5>
                                  <img src={p1} alt="Image" />
                                <div class="card-body"> 
                                  <p class="card-text">Some quick example text to build,project1 is big data smart analyse job match and salary forecast</p>
                                  <h6>• machine learning <br/>python</h6>
                                  <div className="GBIcon">
                                    <a href="https://github.com/dianping/cat">
                                      <img src={GBIcon} alt="" />
                                      </a>
                                    </div>
                                </div>
                            </div> 
                          </div>     

                            <div class="col">
                              <div className="skill-card" >
                              <h5 class="card-title"></h5>
                                  <img src={p1} alt="Image" />
                                <div class="card-body"> 
                                  <p class="card-text">Some quick example text to build,project1 is big data smart analyse job match and salary forecast</p>
                                  <h6>• next.js <br/> react</h6>
                                 
                                  <div className="GBIcon">
                                    <a href="https://github.com/dianping/cat">
                                      <img src={GBIcon} alt="" />
                                      </a>
                                    </div>
                                
                                </div>
                              </div>    
                            </div>

                            <div class="col">
                              <div className="skill-card" >
                              <h5 class="card-title">full-stack Threads App </h5>
                                  <img src={p1} alt="Image" />
                                <div class="card-body"> 
                                  <p class="card-text">Some quick example text to build,project1 is big data smart analyse job match and salary forecast</p>
                                  <h6>• next.js<br/> react</h6>
                                  
                                    <div className="GBIcon">
                                    <a href="https://github.com/dianping/cat">
                                      <img src={GBIcon} alt="" />
                                      </a>
                                    </div>
                               
                                </div>
                              </div>    
                            </div>
                           
                        </div>

                </div>
       </div>

        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
