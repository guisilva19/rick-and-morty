import nave from '../../Assets/nave.png'
import styles  from './styles.module.scss'


const NaveRickAndMorty = () => {
return(
  <div className={styles.div}>
    <img  className={styles.navePrimary} src={nave} alt="Nave Rick and Morty"/>
    <img  className={styles.naveSecond} src={nave} alt="Nave Rick and Morty"/>

  </div>
)
}

export default NaveRickAndMorty