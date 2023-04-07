import './App.css'
import fmpd001Data from './Data/FM_PD_001.json'
import electricProduceData from './Data/ElectricProduceReport.json'
import FMPD001Report from './Components/Report/FM_PD_001'
import ElectricProductReport from './Components/Report/ElectricProductReport'
function App() {
  const handlePrintFMPD001 = () => {
    FMPD001Report({}, { arr: fmpd001Data }, new Date())
  }
  const handlePrintElectricProduce = () => {
    ElectricProductReport({}, { arr: electricProduceData }, new Date())
  }
  return (
    <div className='App'>
      <h1>PDF Make Playgroud</h1>
      <h4>Example</h4>
      <div
        style={{
          height: 200,
          overflowY: 'scroll',
          textAlign: 'left',
          margin: '2rem',
        }}
      >
        <code>{JSON.stringify(fmpd001Data)}</code>
      </div>
      <button onClick={handlePrintFMPD001}>Print</button>
      <hr />
      <h4>Data</h4>
      <div
        style={{
          height: 200,
          overflowY: 'scroll',
          textAlign: 'left',
          margin: '2rem',
        }}
      >
        <code>{JSON.stringify(electricProduceData)}</code>
      </div>
      <button onClick={handlePrintElectricProduce}>Print</button>
    </div>
  )
}

export default App
