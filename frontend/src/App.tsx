import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-primary">
          <h1>Hello</h1>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
