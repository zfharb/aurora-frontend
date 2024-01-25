import { useState } from 'react'

import "./ImageLoader.css"

function ImageLoader() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function onFileChange(e) {
        e.preventDefault()
    }

    function onFileUpload(e) {
        e.preventDefault()
    }

    return (
        <>  
        <section class='loader-bg-image'>
            <div class="container text-left mt-5">
    
                <div class="row justify-content-center">
                    <div class="col-md">
                        <br/>
                        <br/>
                        <h4 class="display-3 text-center text-white">select picture to upload</h4>
                        <br/>
                        <br/>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-3">
                        <input class="display-6 form-control text-white" type='file' onChange={onFileChange}/>
                    </div>
                </div>
            </div>       
        </section>
        </>
    )
}

export default ImageLoader
