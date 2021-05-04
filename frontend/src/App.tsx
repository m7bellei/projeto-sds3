import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import React from 'react';
import DataTable from 'components/DataTable/DataTable';
import BarChart from 'components/BarChart/BarChart';
import DonutChart from 'components/DonutChart/DonutChart';

function App() {
  return (
    <>
      <NavBar></NavBar>
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de Vendas</h1>

      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart></BarChart>
        </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart></DonutChart>
          </div>
      </div>

      <div className="py-3">
        <h2 className="text-primary">Todas as vendas</h2>
      </div>

      <DataTable></DataTable>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
