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
    className="modal-content"
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