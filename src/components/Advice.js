import '../css/Advice.scss';
import icon from '../assets/images/icon-dice.svg'
import dividerDesktop from '../assets/images/divider-desktop.svg'
import dividerMobile from '../assets/images/divider-mobile.svg'
import { useState } from 'react';



const  Advice = () => {
    const [image, setImage] = useState([dividerDesktop])
     const [ advice, setAdvice ] = useState('')
     const [ id, setId ] = useState('')


     fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data => {setAdvice(data.slip.advice); setId(data.slip.id)})




     const getData = async () => {
          const response = await fetch('https://api.adviceslip.com/advice')
          const data = await response.json()
          setAdvice(data.slip.advice)
          setId(data.slip.id)

     }

     
    return ( 
       <div className='Advice'>
            <h1>Advice #{id}</h1>
            <p className='advice'>{advice}</p>
            <img 
            className='divider'
            src={dividerDesktop} />
            <button type='button'>
            <img 
            onClick={getData}
            className='icon'
            src={icon} />
            </button>
       </div>
     );
}

export default Advice;
