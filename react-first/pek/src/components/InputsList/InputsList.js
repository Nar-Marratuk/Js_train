import React from 'react';
import './InputsList.css';

class InputsList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            weight: 0,
            size: 0,
            town: ''
        }
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleChangeTown = this.handleChangeTown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeWeight(event){
        this.setState({weight: event.target.value});
    }

    handleChangeSize(event){
        this.setState({size: event.target.value});
    }

    handleChangeTown(event){
        this.setState({town: event.target.value});
    }

    handleSubmit(event) {
        this.props.priceChange(this.state.weight, this.state.size, this.state.town);
        event.preventDefault();
    }

    render(){
        return (
                <div className='form'>
                    <div className='input-field'>
                        <label htmlFor='weight'>Вес</label>
                        <input type='text' name='weight' id='weight' onChange={this.handleChangeWeight}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='size'>Объём</label>
                        <input type='text' name='size' id='size' onChange={this.handleChangeSize}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='town'>Город</label>
                        <input type='text' name='town' id='town' onChange={this.handleChangeTown}/>
                    </div>
                    <div className='submit'>
                        <a onClick={this.handleSubmit}>Рассчитать</a>
                    </div>
                </div>         
        );
    }
}

export default InputsList;