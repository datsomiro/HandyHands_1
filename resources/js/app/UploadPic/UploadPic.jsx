import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import Axios from 'axios'; const UploadPic = props => (
    <div className="picUploader">
        <label>
            File Upload:
        </label>
        <ImageUploader
            key="image-uploader"
            withIcon={true}
            singleImage={true}
            withPreview={true}
            label="Maximum size file: 10MB"
            buttonText="Choose an image"
            onChange={props.onImage}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
        />
    </div>
); const App = () => {
    const [progress, setProgress] = useState('getUpload');
    const [url, setImageURL] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState(''); const onImage = async (failedImages, successImages) => {
        setProgress('uploading');
        try {
            console.log('successImages', successImages);
            const parts = successImages[0].split(';');
            const mime = parts[0].split(':')[1];
            const name = parts[1].split('=')[1];
            const data = parts[2];
            const res = await Axios.post('/image-upload', { mime, name, image: data });
            setImageURL(res.data.imageURL);
            setProgress('uploaded');
        } catch (error) {
            console.log('error in upload', error);
            setErrorMessage(error.message);
            setProgress('uploadError');
        }
    }; const content = () => {
        switch (progress) {
            case 'getUpload':
                return <UploadPic onImage={onImage} url={url} />;
            case 'uploading':
                return <h2>Uploading....</h2>;
            case 'uploaded':
                return <img src={url} alt="uploaded" />;
            case 'uploadError':
                return (
                    <>
                        <div>Error message = {errorMessage}</div>
                        <UploadPic onImage={onImage} url={url} />
                    </>
                );
        }
    }; return (
        <div className="Upload">
            {content()}
        </div>
    );
};
export default App;