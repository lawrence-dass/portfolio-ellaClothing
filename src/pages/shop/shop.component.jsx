import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = (props) => (
    <div className="shop-page">
      <Route exact path={`${props.match.path}`} component={CollectionOverview} />
      <Route path={`${props.match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );



export default ShopPage;