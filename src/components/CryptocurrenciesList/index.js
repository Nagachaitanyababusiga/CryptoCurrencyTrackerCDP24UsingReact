import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {ListOfCurrencies} = props
  return (
    <div className="listcontouter">
      <h1>Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="listcont">
        <div className="listcontuppertab">
          <p>Coin Type</p>
          <div className="aligner">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        <ul className="orgcont">
          {ListOfCurrencies.map(x => (
            <CryptocurrencyItem Details={x} key={x.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
