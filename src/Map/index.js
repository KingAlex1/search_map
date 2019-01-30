import React, {PureComponent} from 'react'

import './index.scss'

import {init, setPlaceMarks} from '../api'


export class Map extends PureComponent {

    componentDidUpdate() {
        const {addressArr} = this.props
        addressArr.map((el)=>{setPlaceMarks(el.text)})
    }


    render() {
        return (
            <div id='map' className='map'></div>
        )
    }


}

export default Map