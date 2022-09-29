import '../styles/TheSog.css'
import { Line } from './icons/Line'

export const TheSog = () => {
    return(
        <section className='theSog'>
            <div className='theSogContainer'>
                <div className='theSogHeader'>
                    <div className='theSogHeaderTitle'>
                        <h4>COMPARTIR <Line /></h4>
                        <h3>#TheSog</h3>
                    </div>
                    <p>Comparte tu experiencia usando<br/>nuestro hashtag</p>
                </div>
                <div className='theSogGallery'>
                    <img src='/assets/images/thesog1.png' alt='thesog' />
                    <img src='/assets/images/thesog2.png' alt='thesog' />
                    <img src='/assets/images/thesog3.png' alt='thesog' />
                    <img src='/assets/images/thesog4.png' alt='thesog' />
                    <img src='/assets/images/thesog5.png' alt='thesog' />
                    <img src='/assets/images/thesog6.png' alt='thesog' />
                </div>
            </div>
        </section>
    )
}