import React from 'react';


import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';
import { useNavigate } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => {
  const navigate = useNavigate()
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
};

export default CollectionPreview;
