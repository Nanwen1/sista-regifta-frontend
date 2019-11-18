import React from 'react';
import {Incominggift} from './incominggift'
import {Outgoinggift} from './outgoinggift'

export function Swap() {

    const [toggleView, setToggleView] = React.useState('outgoing-gift')

    const handleButtonClick = () => {
        setToggleView(toggleView === 'outgoing-gift' ? 'incoming-gift' : 'outgoing-gift')
    }

    return (
        <div>
            <button onClick={handleButtonClick}>Toggle outgoing/incoming</button>

            {toggleView === 'outgoing-gift' &&
                <Outgoinggift />}

            {toggleView === 'incoming-gift' &&
                <Incominggift />}
        </div>
    )
}