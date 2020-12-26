import {useState} from 'react'
import './App.css';
import Header from './components/layout/Header'
import Posts from './components/Posts/Posts'
import Modal from './components/layout/Modal'
const App = () => {

  const [modalOpen, setModalOpen] = useState(0);
  const [modalType, setModalType] = useState('');

  const openAddPostModal = () => {
    setModalType('Add');
    setModalOpen(1);
  }

  const closeModal = () => {
    setModalOpen(0)
  }

  return (
      <div className="container py-3 mt-4 mb-1 bg-secondary">
        <Header openModal={openAddPostModal} />
        <Posts />
        {modalOpen && <Modal closeModal={closeModal} modalType={modalType} /> }
      </div>
  );
}

export default App;