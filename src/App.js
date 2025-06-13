import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
// import MembershipApplicationForm from './membershipApplicationForm/membershipApplicationFormRhf'
import List from './list/list'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MembershipApplicationForm /> */}
      <List />
      <Footer />
    </div>
  );
}

export default App;
