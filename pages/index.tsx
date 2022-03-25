import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '../styles/scss/Homepage/Introduction.module.scss'

const Home: NextPage = () => {
  const router = useRouter()

  const buttonClick = () => {
    router.push('/creare-postare')
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '4vw', marginTop: '20vh' }}>
          <h1 className={styles.title_1}>Ajută la îmbunătățirea orașului tău printr-o singură postare</h1>
          <p className={styles.desc_1}>Cu ajutorul site-ului ROMDIG vă puteți face vocea auzită în propria comunitate. Scrie o postare, afișeaz-o, iar apoi așteaptă să fie votată de cei apropiați
            de tine, ca mai apoi, să fie și implementată. Apasă pe butonul de mai jos și începe modernizarea localității tale.
          </p>
          <button onClick={buttonClick} className={styles.create_post}>Publică o postare</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '2vw', marginTop: '7.5vh'}}>
          <div className={styles.bg_img}>
            <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1648223698/FIICODE/pexels-thisisengineering-3862365_fzupwt.jpg' layout='fill' />
          </div>
        </div>
      </div>

      <div className={styles.container_p2_bg}>
        <div className={styles.i_icon}>
          <Image src='https://res.cloudinary.com/multimediarog/image/upload/v1648228664/FIICODE/information-6255_2_ibnur9.svg' width={30} height={30} />
        </div>
        <div className={styles.cp2_inf}>
          <h2>De ce?</h2>
          <p>
            Scopul programului ROMDIG este de a a-i lăsa pe cetățeni să-și prezinte ideile față de cum ar putea fi îmbunătățită localitatea lor, într-un mod cât mai ușor,
            eliminând multe zile de așteptare până când aceasta ar fi luată la cunoștință de primărie
          </p>
        </div>
        <div className={styles.cp2_inf}>
          <h2>Cum funcționează?</h2>
          <p>
            După ce publicați postarea, aceasta va fi votată și de ceilalți cetățeni. Astfel, cu cât numărul de voturi pozitive va fi mai mare, cu atât șansa ca ideea ta
            să fie observată de primărie va fi mai mare, iar soluția ei mult mai aproape
          </p>
        </div>
        <div className={styles.cp2_inf}>
          <h2>Cum îmi fac cont?</h2>
          <p>
            Pentru crearea unui cont, apăsați pe butonul "Înregistrare" din susul paginii, care vă va trimite spre pagina de înregistrare. Acolo, trebuie să introduceți
            doar câteva date, după care să introduceți un cod. Apoi, va trebui să așteptați ca contul dumneavoastră să fie activat de unul dintre specialiștii noștrii
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
