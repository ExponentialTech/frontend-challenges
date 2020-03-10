import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Page from './components/Page';
import Api from './services/Api';
import './App.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxItems] = useState(10);

  useEffect(() => {
    Api.getTableData().then((data) => {
      setItems(data);
    })
  })

  const last = currentPage * maxItems;
  const first = last - maxItems;
  const currentItems = items.length > 0 ? items.slice(first, last) : [];
  const totalPages = Math.ceil(items.length / maxItems);
  const changePage = (pageNumber) => setCurrentPage(Number(pageNumber))
  
  return (
    <div className="App">
      <Table items={currentItems}/>
      <Page
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
      />
    </div>
  );

}

export default App;
