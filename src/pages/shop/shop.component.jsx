import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ShopContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
);
const CollectionsPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  const params = useParams();
  const collectionId = params['*'];
  return (
    <ShopContainer>
      <Suspense>
        <Routes>
        <Route
          exact
          index
          element={<CollectionsOverviewContainer />}
        />
        <Route
          path={`/:collectionId`}
          element={<CollectionsPageContainer collectionId={collectionId} />}
        />
        </Routes>
      </Suspense>
    </ShopContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
