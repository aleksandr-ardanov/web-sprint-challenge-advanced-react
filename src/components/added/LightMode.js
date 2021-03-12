import React from 'react'

const LightMode = props => {
    const {light, setLight} = props;

    const toggle = e => {
        e.preventDefault();
        setLight(!light)
    }

    return (
        <div className='lightModeToggle'>
            <div
          onClick={toggle}
          className={light ? 'toggle lightModeOn' : 'toggle'}
        />
        </div>
    )
}

export default LightMode;