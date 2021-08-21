// import logo from './Baby-Funny-Smile-Face-Image.jpeg';
import './App.css';
import bodyPanel from '../bodyPanel';

// import bodyPanel from './bodyPanel.js';

function App() {
  return (


    <div className="App">
      {/* <bodyPanel /> */}
      <div className="bodyBackground">

        <div class="nav-bar">
          <div class="nav-element">1</div>
          <div class="nav-element">2</div>
          <div class="nav-element">3</div>
          <div class="nav-element">4</div>
        </div>


        {/* bodyPanel */}
        <div class="panel-wrapper">
          <div class="panel liteShadow">
            <div class="panelMenu">

              <h1 style={{ color: 'white', paddingLeft: '12px', }}>Menu</h1>

              <div class="panelElementWrapper">

                <div class="panelMenuElement">
                  <div class="panelMenuButton">Preferences</div>
                </div>

                <div class="panelMenuElement">
                  <div class="panelMenuButton">Subscription</div>
                </div>

                <div class="panelMenuElement">
                  <div class="panelMenuButton">Account</div>
                </div>

                <div class="panelMenuElement">
                  <div class="panelMenuButton">Billing</div>
                </div>

              </div>


            </div>

          </div>
        </div>


        {/* <header className="App-header">

      
          <h1 class="header-animation">Animation</h1>
          <p>
            Amplify Retestact App
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </div>

  );
}

export default App;
