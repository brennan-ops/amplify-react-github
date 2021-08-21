// import logo from './Baby-Funny-Smile-Face-Image.jpeg';
import '../App.css';
import './c-body.css';

import React,{Component} from 'react';

import { readInitialCoverage } from 'istanbul-lib-instrument';



// import bodyPanel from './bodyPanel.js';

var elementPadding = "40px 20px 10px 40px";

export class HomeComponent extends Component {
  

  

  render(){

  

    return (


      <div className="App">
       
        <div className="bodyBackground">
  

          <div class="nav-bar">
            <div class="nav-element">Logo</div>
            
            <div class="nav-element">Sign Out</div>
          </div>

         
        
          <div class="panel">

            <div class="panel-wrapper">
              
              <div class="panelMenu">

                <h2 style={{ color: 'black', padding: elementPadding }}>Menu</h2>

                <ul class = "ulList">

                  <li class = "panelElement lineAbove selectedElement">
                    <a class = "panelButton">
                      <span class = "selectedSpan">Account</span>
                    </a>
                  </li>

                  <li class = "panelElement">Preferences</li>
                  <li class = "panelElement">Billing</li>
                </ul>

              </div>

              <div class = "c-wrapper">
                <div class = "c-body">
                  Test
                </div>

              </div>


            </div>

          </div>
        </div>


          
      </div>
   
    

    )
  }
}



