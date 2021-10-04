import React from 'react'

function Logout(props) {
    localStorage.clear()
    props.history.push('/')
    return (
        <>
        </>
    )
}

export default Logout
