import './index.css'

const CryptocurrencyItem = props => {
  const {Details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = Details
  return (
    <li className="lstitmoutercont">
      <div className="lstitmcont-1">
        <img className="logoer" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="lstitmcont-2">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
