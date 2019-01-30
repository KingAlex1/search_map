import React, {PureComponent} from 'react'

import './index.scss'

import {init, setPlaceMarks} from '../api'


export class Map extends PureComponent {

    componentDidUpdate() {
        // const {addressArr} = this.props
        // let lastAddr = addressArr.slice(-1)
        // setPlaceMarks(lastAddr[0].text , lastAddr[0].id)
    }


    render() {
        return (
            <div id='map' className='map'></div>
        )
    }


}

export default Map