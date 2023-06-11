import './Model5.css';
import Member1 from '../Assets/Member1.jpg';
import Member2 from '../Assets/Member2.jpg';
import Member3 from '../Assets/Member3.jpg';
import Member4 from '../Assets/Member4.jpg';
import Member5 from '../Assets/Member5.jpg';
import Member6 from '../Assets/Member6.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/YouTube';
import Logo from '../Assets/Logo.jpg';

export default function Model5() {
  return (
    <div id='model5'>
      <header>
        <div className="logo-container">
          <img src={Logo} alt="FitStop Logo" />
        </div>
        <nav>
  <ul className="nav-links">
    <li><a href="https://fitstop.myshopify.com" className="nav-link">Home</a></li>
    <li><a href="https://fitstop.myshopify.com/collections/all" className="nav-link">Shop All</a></li>
    <li><a href="https://fitstop.myshopify.com/collections/men" className="nav-link">Men</a></li>
    <li><a href="https://fitstop.myshopify.com/collections/women" className="nav-link">Women</a></li>
    <li><a href="https://fitstop.myshopify.com/collections/accessories" className="nav-link">Accessories</a></li>
    <li><a href="https://fitstop.myshopify.com/pages/contact-us" className="nav-link">Contact Us</a></li>
  </ul>
</nav>
      </header>
    <h1 className='model-title'>FitStop Ambassadors</h1>
        <div className="divider"></div>
        <div className="members">
          <div className="member-row">
            {/* Existing Members */}
            <div className="member">
      <img className="member-img" src={Member1}/>
              <div className="description">
                  <h1>Matthew DiBiaso</h1>
                  <h2>Athlete</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                  </div>
              </div>
            </div>
            <div className="member">
              <img width={400} src={Member2}/>
              <div className="description">
                  <h1>Omar Nadir</h1>
                  <h2>Athlete</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                  </div>
              </div>
            </div>
            <div className="member">
              <img width={400} src={Member3}/>
              <div className="description">
                  <h1>Jared Nunnually</h1>
                  <h2>Athlete</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                  </div>
              </div>
            </div>
          </div>

          <div className="member-row">
            {/* New Members */}
            <div className="member">
              <img width={400} src={Member4}/>
              <div className="description">
                  <h1>Sarah Jennings</h1>
                  <h2>Athlete</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                  </div>
              </div>
            </div>
            <div className="member">
              <img width={400} src={Member5}/>
              <div className="description">
                  <h1>Jacob Howard</h1>
                  <h2>Athlete</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                  </div>
              </div>
            </div>
            <div className="member">
              <img width={400} src={Member6}/>
              <div className="description">
                  <h1>Emily Watson</h1>
                  <h2>Athlete</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
