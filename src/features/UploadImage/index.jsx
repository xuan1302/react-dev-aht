import React, { useEffect, useState } from 'react';


function UploadImage(props) {
    const [avatar, setAvatar] = useState();
    const handleUploadImages = (e) => {
        setAvatar(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar)
        }
    }, [avatar])
    return (
        <div className='upload-image'>
            <input type='file'
                onChange={handleUploadImages}
            />
            <div>
                {
                    avatar && (
                        <img src={avatar} alt='' width="350px" />
                    )
                }
            </div>
        </div>
    );
}

export default UploadImage;