import { useState } from 'react'

// import './Search.css'

function Search(props) {
    const [service, setService] = useState('')
    const [zipcode, setZipcode] = useState('')

    function handleSearch(e) {
        e.preventDefault()
        // Code to handle login goes here
        // props.toggle()
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
                <form onSubmit={handleSearch}>
                    <label>
                        Service:
                        <input type="text" value={service} onChange={e => setService(e.target.value)} />
                    </label>
                    <br/>
                    <label>
                        Zipcode:
                        <input type="password" value={zipcode} onChange={e => setZipcode(e.target.value)} />
                    </label>
                    <br/>
                    <button type="search" onClick={props.toggle}>Search</button>
                </form>
        </div>
    )
}

export default Search
