import React, { useEffect } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {

    useEffect(() => {
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');

        let carouselDom = document.querySelector('.carousel');
        let SliderDom = carouselDom.querySelector('.carousel .list');
        let timeDom = document.querySelector('.carousel .time');

        let timeRunning = 3000;
        let timeAutoNext = 5000;

        nextDom.onclick = function () {
            showSlider('next');
        };

        prevDom.onclick = function () {
            showSlider('prev');
        };

        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        function showSlider(type) {
            let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');

            if (type === 'next') {
                SliderDom.appendChild(SliderItemsDom[0]);
                carouselDom.classList.add('next');
            } else {
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        }
    }, []);

  return (
    <div>
      
      {/* <nav>
        <a href="">Home</a>
        <a href="">Contacts</a>
        <a href="">Info</a>
      </nav> */}
   
      <div className="carousel">
  
        <div className="list">
            <div className="item">
                <img src="images/pic1.jpg"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Websoc studio Mobile and Web App development company, Our services are Mobile Application Development, Web Application Development & Website Development.                   
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="images/pic2.jpg"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Websoc studio Mobile and Web App development company, Our services are Mobile Application Development, Web Application Development & Website Development. 
                    </div>
                    
                </div>
            </div>
            <div className="item">
                <img src="images/pic3.jpg"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                       Websoc studio Mobile and Web App development company, Our services are Mobile Application Development, Web Application Development & Website Development
                    </div>
                    
                </div>
            </div>
            <div className="item">
                <img src="images/pic4.jpg"/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                    Websoc studio Mobile and Web App development company, Our services are Mobile Application Development, Web Application Development & Website Development.
                    </div>
                    
                </div>
            </div>
        </div>

        {/* <div className="thumbnail">
            <div className="item">
                <img src="images/pic1.jpg"/>
                <div className="content">
                    <div className="title">
                        1
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="images/pic2.jpg"/>
                <div className="content">
                    <div className="title">
                        2
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>

            <div className="item">
                <img src="images/pic3.jpg"/>
                <div className="content">
                    <div className="title">
                        3
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="images/pic4.jpg"/>
                <div className="content">
                    <div className="title">
                        4
                    </div>
                    <div className="description">
                        Description
                    </div>
                </div>
            </div>
        </div> */}


        <div className="arrows">
            <button id="prev" style={{ opacity: 0 }}>&lt;-</button>
            <button id="next" style={{ opacity: 0 }}>-&gt;</button>
        </div>
    
        <div className="time"></div>
    </div>


    </div>
  )
}

export default Carousel