import './App.css';
import phone from "./Phone_iOS.png"
import mail from "./Mail.png"
import memoji from "./memoji Grégoire pr CV Apple.png"
import location from "./location emoji.png"
import apple from "./apple.svg"
function App() {
  return (
    <div className="App">
      <div className="top">
        <figure className="profilePic">
          <img height="180px" width="180px" src={memoji} alt="memoji"></img>
        </figure>
        <div className="name">
          <div>Grégoire ANSARD</div>
          <div className='function'>
            Poste recherché : 
          </div>
          <div style ={{fontWeight : "400", paddingTop : "7px"}} className='Job'>
            Spécialiste
          </div>
          <div className='time'>
            Temps Partiel
          </div>
        </div>


        <div className="infotop">
          <div className="phonediv">
            <img height="30px" width="30px" src={phone} alt="phone"></img>
            <div className="phone">07 85 34 42 25</div>
          </div>
          <div className="mailDiv">
            <img height="30px" width="30px" src={mail} alt="phone"></img>
            <div className="mail">gregoire.ansard@icloud.com</div>
          </div>
        <div className="Adress">
          <img height="30px" width="30px" src={location} alt="location"></img>
          <div className="texte">
            58 rue Jean-Baptiste Baudin <br></br>
            <strong style={{ color: "#333" }}>94800 Villejuif</strong>
          </div>
        </div>
        </div>


      </div>

      <div className="formationBigDiv">
        <div className="left">
          <div className="exp">
            <div className="titleExp">Expérience</div>
          </div>
        </div>
        <img
          className="apple"
          height="150px"
          width="150px"
          src={apple}
          alt="memoji"
        ></img>
        <div className="right">
          <div className="exps">
            <div className="expdiv">
              <div className="Job">Vendeur Polyvalent</div>
              <div className="Company">Uniqlo</div>
              <div className="Date">Novembre 2021 - Janvier 2022</div>
            </div>
            <div className="expdiv">
              <div className="Job">Préparateur de commandes</div>
              <div className="Company">Amazon</div>
              <div className="Date">Mars - Septembre 2021</div>
            </div>
            <div className="expdiv">
              <div className="Job">Livreur</div>
              <div className="Company">Frichti</div>
              <div className="Date">Novembre 2020 - Février 2021</div>
            </div>
            <div className="expdiv">
              <div className="Job">Barman</div>
              <div className="Company">Yithé</div>
              <div className="Date">Juin - Octobre 2020</div>
            </div>
            <div className="expdiv last">
              <div className="Job">Recruteur de donnateurs</div>
              <div className="Company">Direct SUD</div>
              <div className="Date">Fevrier 2019 - Janvier 2020</div>
            </div>
          </div>
        </div>
      </div>
      <div className="formations">
        <div className="left">
          <div className="formation">
            <div className="titleFor">Formation</div>
          </div>
          <div className="datesFor">
            {/* <div className='date'>2021</div>
        <div className='date'>2018</div>
        <div className='date'>2017</div> */}
          </div>
        </div>
        <div className="right">
          <div className="expdiv">
            <div className="Job">Développement web</div>
            <div className="Company">The Odin Project</div>
            <div className="Date">2021</div>
          </div>
          <div className="expdiv">
            <div className="Job">Prepa ECE</div>
            <div className="Company">Lycée Rodin</div>
            <div className="Date">2018</div>
          </div>
          <div className="expdiv last">
            <div className="Job">Bac ES</div>
            <div className="Company">Lycée Darius Milaud</div>
            <div className="Date">2017</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
