import React, { Component } from 'react'
import HandleEventRCC from './HandleEventRCC'
import HandleEventRFC from './HandleEventRFC'

export default class HandleEvent extends Component {
    render() {
        return (
            <div>
                <HandleEventRCC />
                <HandleEventRFC />
            </div>
        )
    }
}
