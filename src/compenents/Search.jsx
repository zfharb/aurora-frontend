import { useState } from 'react'

function Search() {
    const [service, setService] = useState('')
    const [zipcode, setZipcode] = useState('')

    function search(e) {
        e.preventDefault()
    }

    return (
        <div class="container d-flex justify-content-center">
            <form align="center">
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">services</label>
                    <input type="name" class="form-control" id="exampleInputEmail1" onChange={e => setService(e.target.value)} />
                    </div>
                    <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">zipcode</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" onChange={e => setZipcode(e.target.value)} />
                    </div>
                    
                    <button type="submit" class="btn btn-primary" onClick={search}>Search</button>

            </form>
        </div>
    )
}

export default Search
