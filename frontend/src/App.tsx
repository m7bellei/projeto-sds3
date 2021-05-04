import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import React from 'react';
import DataTable from 'components/DataTable/DataTable';

function App() {
  return (
    <>
      <NavBar></NavBar>
    <div className="container">
      <h1 className="text-primary">Hello World!</h1>

      <DataTable></DataTable>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
