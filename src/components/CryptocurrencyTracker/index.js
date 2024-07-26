import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const data = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const parsedData = await data.json()
    const modifiedData = parsedData.map(x => ({
      currencyName: x.currency_name,
      usdValue: x.usd_value,
      euroValue: x.euro_value,
      id: x.id,
      currencyLogo: x.currency_logo,
    }))
    this.setState({data: modifiedData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div className="outercont">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList ListOfCurrencies={data} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
