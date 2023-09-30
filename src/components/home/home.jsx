import React from 'react'
import {Link} from "react-router-dom"

function Home() {
    return (
        <>
        <div>
            <h1>this is a home page </h1>
            <ul>
                <li>
                    <Link to="www.google.com">this ia link</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Home
