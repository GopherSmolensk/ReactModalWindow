import React, {   useState } from 'react';
import './App.css';
import Modal from './Modal/Modal.jsx'

function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
   <div className='app'>
    <main className='main'> 
      <button className='open__btn'>открыть модальное окно</button>
      <Modal active={modalActive} setActive={setModalActive}/>
    </main>
   </div>
  );
}

export default App;
