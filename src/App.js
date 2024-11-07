import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

import GlobalStyle from './global.styles';

import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

// lazy loading
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'));
const Contact = lazy(() => import('./pages/contact/contact.component'));

const CollectionsOverviewContainer = lazy(() =>
  import('./components/collection-overview/collection-overview.container')
);
const CollectionsPageContainer = lazy(() =>
  import('./pages/collection/collection.container')
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" exact='true' element={<HomePage />} />
            <Route path='/shop/*' element={<ShopPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route exact path='/checkout' element={<CheckoutPage />} />
            <Route exact path='/signin' element={currentUser ? <Navigate to='/' /> : <SignInAndSignUpPage />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </Suspense>
    </div>
  );

  return (
    <div>
      <GlobalStyle />
      <Header />
      {/* <ErrorBoundary> */}
      <Routes>
        {/*  <Route path=":id" element={<UserProfile />} /> */}
        {/* <Suspense fallback={<Spinner />}> */}

        <Route path="/" exact='true' element={() => (
          // <Suspense fallback={<Spinner />}>
          <HomePage />
          // </Suspense>
        )} />
        {/* <Route path='/shop' element={<ShopPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route exact path='/checkout' element={<CheckoutPage />} />
            <Route exact path='/signin' render={() => currentUser ? <Navigate to='/' /> : <SignInAndSignUpPage />} /> */}
        {/* </Suspense> */}
      </Routes>
      {/* </ErrorBoundary> */}
      {/* <Footer /> */}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // Lazy load your components
// const Home = lazy(() => import('./components/Home'));
// // const About = lazy(() => import('./components/About'));
// // const NotFound = lazy(() => import('./components/NotFound'));

// function App() {
//   return (

//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/about" element={<About />} />
//           <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </Suspense>
//   );
// }

// export default App;