import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import { AddButton, ModalContainer, ModalCloseButton, ImageContainer } from './item-preview.styles';

const ItemPreview = ({item, modalState, closeModal, addItem }) => {
  return (
    <ModalContainer 
    isOpen={modalState}
    contentLabel="Modal Label"
    onRequestClose={closeModal}
    ariaHideApp={false}
 >
<ModalCloseButton onClick={() => closeModal()}> &#10005; </ModalCloseButton>
<ImageContainer src={item.imageUrl} alt="" />
<AddButton onClick={() => addItem(item)}inverted> Add to cart </AddButton>
</ModalContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemPreview);