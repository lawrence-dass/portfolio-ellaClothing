import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { addItem } from '../../redux/cart/cart.action';

import { AddButton, CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const [ modalState, setModalState ] = React.useState(false);


  const openModal = () => {
    setModalState(true)
  }


  const closeModal = () => {
    setModalState(false);
  }

  const handleAddItem = (e, item) => {
    e.stopPropagation();
    addItem(item);
  }

  return (
    <div>
          <CollectionItemContainer onClick={() => openModal()}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer >${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={(e) => handleAddItem(e,item)}inverted> Add to cart </AddButton>
    </CollectionItemContainer>

    <Modal 
           isOpen={modalState}
           contentLabel="Modal Label"
           onRequestClose={closeModal}
        >
    <button onClick={() => closeModal()}> test close </button>
      <span>{modalState}</span>
      </Modal>

    </div>

  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
