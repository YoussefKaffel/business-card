import './App.scss';
import Image from './assets/DSC_3213.jpg';
function App() {
  return (
    <div className="App">
      <div className="bgtint"></div>
      <section className="bussinesscard">
        <div className="flip">
          <div className="front">
            <div className="top">
              <div className="logo"><img src={Image}/></div>
            </div>
            <div className="nametroduction">
              <div className="name">Youssef Kaffel</div>
              <div className="introduction">Junior Developer</div>



            </div>
            <div className="contact">
              <div className="website">
                <span className="ion-earth"></span>
                <a href="https://youssefkaffel.github.io/portfolio/">https://youssefkaffel.github.io/portfolio</a>
              </div>
              <div className="twitter">
                <span className="ion-social-linkedin"></span>
                <a href="https://www.linkedin.com/in/youssefkaffel/">youssefkaffel</a>
              </div>
              <div className="phone ">
                <span className="ion-ios7-telephone"></span>
                <a href="tel:23911695">(+216) 23 911 695</a>
              </div>
              <div className="phone ">
                <span className="ion-social-github"></span>
                <a href="https://github.com/YoussefKaffel">YoussefKaffel</a>
              </div>
              <div className="email ">
                <span className="ion-paper-airplane"></span>
                <a href="mailto:youssef.kaffel99@gmail.com">youssef.kaffel99@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="back"></div>
        </div>
      </section>
      <section className="tooltip-web">
        <p>
          Hover over the card to see more.
        </p>
      </section>
      <section className="tooltip-mobile">
        <p>
          Click on the card to see more & Click outside to close.
        </p>
      </section>
    </div>
  );
}

export default App;
