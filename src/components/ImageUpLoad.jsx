import { useState } from 'react'
import axios from "axios";
import bgImage from '/src/images/upload-image-4.jpeg'

function ImageUpLoad() {
    const [file, setFile] = useState('sss')
    const [inputText, setInputText] = useState("");
    // const [base64Image, setBase64Image] = useState("");

    const handleFileChange = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        setFile(file);
        setInputText(e.target.value);   
    
    };

    // function encodeImageFileAsURL() {
    //     var reader = new FileReader();
    //     reader.onloadend = function() {
    //       console.log('RESULT', reader.result)
    //       setBase64Image(reader.result)
    //     }
    //     reader.readAsDataURL(file);
    // }
    

    const uploadImage = async (event) => {
        //////   using axios -- need to make it work

        // console.log("login event--------")
        // console.log(event)
        // encodeImageFileAsURL();
        // console.log(base64Image)
        // console.log("login event--------")
        // event.preventDefault();
 
        //  await axios
        //  .post(
        //          "https://usycq00pk7.execute-api.us-east-1.amazonaws.com/dev/upload",
        //          {
        //             body: base64Image,
        //          },
        //          {
        //             headers: {
        //                 "Content-Type": "multipart/form-data"
        //             }
        //         }
        //  )
        //  .then((response) => {
        //     console.log("Successfully uploaded image!")
        //     console.log(response);
        //     setFile('');
        //     setInputText('');  
 
        //  })
        //  .catch((error) => {
        //     console.log("Something went wrong!")
        //     console.log(error);
        //     setFile('');
        //     setInputText('');  
        //  });

        ///////



        var targetUrl ='https://usycq00pk7.execute-api.us-east-1.amazonaws.com/dev/upload'
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
            setFile('');
            setInputText('');   
    }

    return (
        <>  
        <div class='container-flex w-100 h-100 position-absolute'>
        <img class="z-n1 w-100 h-100 position-absolute"
                src={bgImage} 
                style={{  
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
                 alt="...."/> 
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
                    <div class="col-4 text-white">
                        <input class="display-6 form-control text-black" 
                               type='file' 
                               onChange={handleFileChange}
                               multiple
                               value={inputText}/>
                        <button onClick={uploadImage} >
                            Upload
                        </button>
                    </div>
                </div>
            </div>       
        </div>
        </>
    )
}

export default ImageUpLoad
