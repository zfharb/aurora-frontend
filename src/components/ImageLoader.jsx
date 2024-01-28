import { useState } from 'react'

import "./ImageLoader.css"

function ImageLoader() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [upLoadedSuccessfull, setUpLoadedSuccessfull] = useState(false)

    function onFileChange(event) {
        // event.preventDefault()
        setSelectedFile(event.target.file)
        console.log(event.target.file)
    }

    function onFileUpload(event) {
        // event.preventDefault()
        const formData = new FormData();
        console.log(selectedFile)
        formData.append(
            "demo file",
            selectedFile,
            selectedFile.name
        )
        setSelectedFile(null)
        setUpLoadedSuccessfull(true)
    }

    function fileData() {
        if(selectedFile) {
            <div>
                <h2>file details:</h2>
                <p>file name: {selectedFile.name}</p>
                <p>file type: {selectedFile.type}</p>
                <p>file name: {selectedFile.lastModified.toDateString()}</p>

            </div>
        }
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
                        <button onClick={onFileUpload} >
                            Upload
                        </button>
                    </div>
                    {fileData()}
                </div>
            </div>       
        </section>
        </>
    )
}

export default ImageLoader
