import lacteosIcon from '../assets/home/lacteos.jpg';
import panificadosIcon from '../assets/home/panificados.jpg';
import embutidosIcon from '../assets/home/embutidos.jpg';
import ezequielIcon from '../assets/home/Ezequiel.jpg';
import limpiezaIcon from '../assets/home/limpieza.jpg';
import girosTigoIcon from '../assets/home/girostigo.png';
import visionBancoIcion from '../assets/home/visionbanco.jpg';
import girosClaroIcon from '../assets/home/girosclaro.jpg';
import pagoExpressIcon from '../assets/home/pagoexpress.jpg';
import facebookIcon from '../assets/home/facebook.png';
import twitterIcon from '../assets/home/twitter.jpg';


const Home = () => {
    return(<div>
    <nav className="site-nav grid">
    <h1>Despensa Ezequiel</h1>
    <ul>
      <li><a href="#portfolio">Promociones</a></li>
      <li><a href="#skills">Operaciones</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
  <section id="welcome" className="grid">
    <div className="welcome-text">
      <h2>Le esperamos<br />En nuestra sucursal</h2>
      <p className="leading">San Juan Nepomuceno, Barrio San José</p>
      <a href="#portfolio" className="button">Hacer un pedido</a>
    </div>
    <div className="welcome-img">
      <img src={ezequielIcon} alt="ezequiel"/>
    </div>
  </section>
  <section id="portfolio">
    <h3>Nuevas Promociones</h3>
    <div className="projects grid">
      <a href="#">
        <img src={panificadosIcon} alt="Panificados"/>
        <h4>Panificados</h4>
      </a>
      <a href="#">
        <img src={lacteosIcon} alt="Lacteos"/>
        <h4>Lacteos</h4>
      </a>
      <a href="#">
        <img src={embutidosIcon} alt="embutidos"/>
        <h4>Embutidos</h4>
      </a>
       <a href="#">
        <img src={limpiezaIcon} alt="limpieza"/>
        <h4>Lmpieza</h4>
      </a>
    </div>
  </section>
  <section id="skills">
    <h3>Servicios</h3>
    <ul className="grid">
      <li>
        <img src={girosTigoIcon} alt="giros Tigo"/>
        <h4>Giros Tigo</h4>
      </li>
      <li>
        <img src={visionBancoIcion} alt="vision Banco"/>
        <h4>Pagos Bancarios</h4>
      </li>
      <li>
        <img src={girosClaroIcon} alt="giros claro"/>
        <h4>Giros Claro</h4>
      </li>
      <li>
        <img src={pagoExpressIcon} alt="Pago Express"/>
        <h4>Pago Express</h4>
      </li>
    </ul>
    <p className="leading">Todo tipo de servicios mobiles y pagos. Activación, portabilidad, vos tenes que pasar nomas y te atendemos con mil gusto.</p>
  </section>
 
         <section id="contact">
            <h3>Deja tu mensaje</h3>
            <p className="leading">Le respondemos lo antes posible.</p>
            <form>
            <input type="text" placeholder='Nombre'/>
            <input type="email" placeholder='Email'/>
            <textarea placeholder='Mensaje'></textarea>
            <button className="button">enviar al chat</button>
            </form>
        </section>
       

  <footer>
    <div className="grid">
      <p className="copyright">Actualizado 2023 Despensa Ezequiel</p>
      <ul className="social">
        <li><a href="#"><img src={facebookIcon} alt="facebook"/></a></li>
        <li><a href="#"><img src={twitterIcon} alt="twitter"/></a></li>
      </ul>
    </div>
  </footer>


           </div>);
};

export default Home;