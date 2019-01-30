import React, {Component} from 'react'
import Form from '../Form'
import Map from '../Map'

import './index.scss'

export class Main extends Component {

    render() {
        return (
            <div className='main-section'>
                <Form/>
                <Map/>
            </div>
        )
    }
}


export default Main