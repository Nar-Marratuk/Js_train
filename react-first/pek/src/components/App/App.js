import React from 'react';
import './App.css';
import InputsList from '../InputsList/InputsList';
import Pek from '../../utils/Pek';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      townCode: ''
    }

    this.priceChange = this.priceChange.bind(this);
  }

  priceChange(weight, size, town) {
    Pek.findTown(town).then(town => {
      this.setState({townCode: town});
      return this.state.townCode;
    }).then(townCodes => {
      return Pek.calculate(weight, size, townCodes);
    }).then(response => {
      console.log(typeof response);
    });
    
  }

  render() {
    return (
      <div className='main'>
        <h1>Расчет стоимости до города с помощью ПЭК</h1>
        <InputsList priceChange={this.priceChange} />
        <div className='total'>{this.state.price === 0 ? 'Введите данные для подсчета стоимости доставки' : `Стоимость доставки: ${this.state.price} Р.`}</div>
      </div>
    );
  }
}

export default App;
