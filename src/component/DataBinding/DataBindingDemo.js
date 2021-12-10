import React, { Component } from 'react'
import DataBindingRCC from './DataBindingRCC'
import DataBindingRFC from './DataBindingRFC'

export default class DataBindingDemo extends Component {
    render() {
        return (
            <div>
                <DataBindingRCC />
                <hr />
                <DataBindingRFC />
            </div>
        )
    }
}
