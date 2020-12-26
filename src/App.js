import {useState} from 'react'
import './App.css';
import Header from './components/layout/Header'
import Posts from './components/Posts/Posts'
import Modal from './components/layout/Modal'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openAddPostModal = () => {
    setModalType('Add');
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const openUpdateModal = () => {
    setModalType('Update');
    setModalOpen(true);
  }

  return (
    <Provider store={store}>
      <div className="container py-3 mt-4 mb-1 bg-secondary">
        <Header openModal={openAddPostModal} />
        <Posts openUpdateModal={openUpdateModal} />
        {modalOpen && <Modal closeModal={closeModal} modalType={modalType} /> }
      </div>
    </Provider>
  );
}

export default App;