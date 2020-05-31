import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends Component {

  state = {
    isLoading: true
  }

  unsubscribeFromSnapshot = null;
  
  componentDidMount(){
    const collectionRef = firestore.collection('collections');
    const { updateCollections } = this.props;

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { isLoading } = this.state;
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={ (props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />  } />
        <Route path={`${match.path}/:collectionId`} render={ props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => { dispatch(updateCollections(collectionsMap))}
})

export default connect(null, mapDispatchToProps)(ShopPage);