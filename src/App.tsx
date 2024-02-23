import { Card } from './components/card/card';
import './App.css'
import { useFoodData } from './hooks/useFoodData';
import { useState } from 'react';
import { CreateModal } from './components/create-modal/create-modal';
import cardapio from './assets/cardapio.png'

function App() {

  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <>
      <nav className='nav'>
        <img src={cardapio} alt="" />
        <h1>Cardápio digital</h1>
      </nav>
    <div className="container">

      <div className="card-grid">
        {data?.map(foodData=> 
        <Card 
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
            />
          )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>+</button>
    </div>
    </>

  )
}

export default App
