import Image from 'next/image'
/*import styles from './style.module.css'*/
import styles from './page.module.css'
import Header from './common/header/header'
import Footer from './common/footer'
import bodyImage from './images/body.jpg'
import clock from './images/clock.png'
import cartImage from './images/cart.svg'
import navBar from './images/navbar.svg'
import aklogo from './images/logo.png'
import facebook from './images/facebook.svg'
import google from './images/google-plus.svg'
import insta from './images/instagram.svg'
import twit from './images/twitter.svg'
import phone from './images/phone.png'
import video from './videos/youTube'



export default function Home() {
  return (
    <><main className={styles.main}>
     
      <div className={styles.supp}>
      <nav>
        <div className={styles.navb}>
          <Image
          src={navBar}
          alt="navbar"
          width={20}
          height={20}
          priority
          />
          <Image
          className={styles.phone}
          src={phone}
          alt="phone"
          width={20}
          height={10}
          priority
          />
          <Image
          className={styles.clock1}
          src={clock}
          alt="clock"
          width={20}
          height={20}
          priority
          />
        </div>
        <div className={styles.cart}>
          <Image
          src={cartImage}
          alt="cart"
          width={30}
          height={30}
          priority
          />
        </div>
      <div className={styles.clock}>
            <p>Call support:080-123456</p>
        </div>
      </nav>
    </div>

        <div className={styles.abc}>
          <Header/>
        </div>

        <div className={styles.description}>
        </div>
        


        <div className={styles.center}>
          <Image
            className={styles.logo}
            src={bodyImage}
            alt="Shopping"
            width={1700}
            height={900}
            
            priority />

          <Image
          className={styles.aklogo}
          src={aklogo}
          alt="logo"
          width={200}
          height={50}
          priority
          />
            <div>
          
        </div>
        </div>
        <div>
          <footer>
            <div className={styles.foll}>
              <p>Follow us on <span>-&gt;</span></p>
            </div>
          <Image
          className={styles.logof}
          src={facebook}
          alt="face"
          width={80}
          height={30}
          priority
          />
          <Image
          className={styles.logog}
          src={google}
          alt="google"
          width={80}
          height={30}
          priority
          />
          <Image
          className={styles.logoi}
          src={insta}
          alt="insta"
          width={80}
          height={30}
          priority
          />
          <Image
          className={styles.logot}
          src={twit}
          alt="twitter"
          width={80}
          height={30}
          priority
          />
          <Footer/>
          <div className={styles.video}>
          <h3>Look out our new video</h3>
          <iframe 
          width={80} height={80}
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
          </div>
          </footer>
        </div>
      </main></>
  )
}
