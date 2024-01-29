import { useState } from 'react'

import "./ImageLoader.css"

function ImageUpLoad() {
    const [file, setFile] = useState('')

    const handleFileChange = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setFile(file);
      };

    const uploadImage = async () => {
        var targetUrl ='https://fhssmqfybb.execute-api.us-east-1.amazonaws.com/dev/upload'
        await fetch(targetUrl,{
                mode:  'no-cors' ,
                method: 'POST',
                headers: { "Content-Type": "multipart/form-data" },
                body: file,
        })
        .then(response => {
            console.log(response)
            console.log('upload image succeeded')
        })
        .catch(error =>{
            console.log('upload image failed');
            console.log(error)
            })
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
                    <div class="col-3 text-white">
                        <input class="display-6 form-control text-white" type='file' onChange={handleFileChange}/>
                        <button onClick={uploadImage} >
                            Upload
                        </button>
                    </div>
                </div>
            </div>       
        </section>
        </>
    )
}

export default ImageUpLoad
