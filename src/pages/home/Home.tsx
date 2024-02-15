import React from 'react'
import './Home.css'
import programer from '../../assets/programer.jpg'
import test from '../../assets/test.jpg'
import relax from '../../assets/5217056.jpg'

const Home = () => {
  return (
    <>
    <div className='mae'>
        <div className='componente'>
          <h1 className='titulo'>Programing</h1>
          <img className='img' src={programer} alt="img tela inicial" />
          <p>Um dia relaxante com front-end</p>
        </div>
        <div className='componente'>
          <h1 className='titulo'>Testing</h1>
          <img className='img' src={test} alt="img tela inicial" />
          <p>Testando applicações react</p>
        </div>
        <div className='componente'>
          <h1 className='titulo'>Relaxing</h1>
          <img className='img' src={relax} alt="img tela inicial" />
          <p>Relaxando depois de um dia cheio</p>
        </div>
       
      </div>
    </>
  )
}

export default Home