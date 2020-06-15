import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.action';

import {
  AddButton,
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

import ItemPreview from '../item-preview/item-preview.component';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const [modalState, setModalState] = React.useState(false);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const handleAddItem = (e, item) => {
    e.stopPropagation();
    addItem(item);
  };

  return (
    <>
      <CollectionItemContainer onClick={() => openModal()}>
        <BackgroundImage
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <CollectionFooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>${price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={(e) => handleAddItem(e, item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>

      <ItemPreview
        item={item}
        modalState={modalState}
        openModal={openModal}
        closeModal={closeModal}
      ></ItemPreview>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
