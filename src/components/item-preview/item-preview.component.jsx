import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import './item-preview.scss';
import { addItem } from '../../redux/cart/cart.action';

import { AddButton } from './item-preview.styles';

const ItemPreview = ({item, modalState, closeModal, addItem }) => {
  return (
    <Modal 
    isOpen={modalState}
    contentLabel="Modal Label"
    onRequestClose={closeModal}
    ariaHideApp={false}
    style={{
     content: {
       position: 'absolute',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%,-50%)',
       backgroundImage:
       "linear-gradient(to bottom, rgba(245, 246, 252, 0.96), rgba(131, 67, 115, 0.93)),url('https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')",
       width: '60%',
       height: '90%'
     }
   }}
 >
<span className="cross-btn" onClick={() => closeModal()}> &#10005; </span>
<img className="modal-img" src={item.imageUrl} alt="" width="100%"/>
<AddButton onClick={() => addItem(item)}inverted> Add to cart </AddButton>
</Modal>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemPreview);