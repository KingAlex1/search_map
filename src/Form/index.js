import React, {Component} from 'react'
import Map from '../Map'
import DragSortableList from 'react-drag-sortable'


import './index.scss'

let id = 0;

function getAddressId() {
    id += 1;
    return id;
}

export class Form extends Component {

    state = {
        addressInput: "",
        address: []
    }
    handleChange = e => {
        const value = e.target.value
        this.setState({addressInput: value})
    }


    handleKeyDown = e => {
        if (e.keyCode === 13) {
            const {addressInput, address} = this.state;
            const newAddress = {
                text: addressInput,
                id: getAddressId()
            }

            this.setState({
                addressInput: "",
                address: [...address, newAddress]
            })

        }
    }

    handleRemove = (e) => {
        let elId = e.target.previousElementSibling.getAttribute('id')
        let idInt = parseInt(elId)
        this.setState(state => ({
                address: state.address.filter(
                    item => {
                        return idInt !== item.id
                    }
                )
            }
        ))

    }

    renderList = () => {
        const {address, addressInput} = this.state

        let content = [address.map((el) => (
            {
                content: (<li
                    key={el.id}
                    className='address-item'
                >
                    <div
                        className='address-text'
                        id={el.id}>{el.text}</div>
                    <div
                        className='address-remove'
                        onClick={this.handleRemove}
                    >
                        &#215;
                    </div>


                </li>)
            }))

        ]
        return content[0]

    }


    render() {

        const {address, addressInput} = this.state

        return (
            <div className='wrapper'>
                <div className='form-section'>
                    <div className='search-section'>
                        <input
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                            value={addressInput}
                            type="text" name='route'
                            className='input-address'
                            placeholder='Введите адрес'

                        />
                    </div>

                    <ul className='address-list'>
                        {console.log(this.renderList())}
                        <DragSortableList
                            items={this.renderList()}
                            moveTransitionDuration={0.3}
                            type="vertical"/>
                    </ul>

                </div>
                <Map addressArr={address}/>
            </div>
        );
    }
}

export default Form