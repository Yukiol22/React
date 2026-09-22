import { useState } from "react";
import useForm from "../hooks/formHooks";
import { useFile } from "../hooks/apiHooks";
import { useMedia } from "../hooks/apiHooks";
import { useNavigate } from "react-router";

const Upload = () => {

    const [file, setFile] = useState(null);
    const { postFile } = useFile();
    const { postMedia } = useMedia();
    const navigate = useNavigate();
    const initValues = {
    title: '',
    description: '',
  };
const handleFileChange = (evt) => {
    if (evt.target.files) {
        console.log(evt.target.files[0]);
        setFile(evt.target.files[0])
        // TODO: set the file to state
    }
};

const doUpload = async () => {
    try {
         // TODO: call postFile function (see below)
        const token = localStorage.getItem('token')
        if(!token) return null
        const fileResult = await postFile(file, token);
        // TODO: call postMedia function (see below)
        await postMedia(fileResult, inputs, token)

        // TODO: redirect to Home
        navigate('/');
    } catch (e) {
        console.log(e.message);
    }
};
const { inputs, handleInputChange, handleSubmit } = useForm(
    doUpload,
    initValues
  );
    
    return (
        <>
            <h1>Upload</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        id="title"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        rows={5}
                        id="description"
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="file">File</label>
                    <input
                        name="file"
                        type="file"
                        id="file"
                        accept="image/*, video/*"
                    onChange={handleFileChange}
                    />
                </div>
                <img
                    src={
                        file
                        ? URL.createObjectURL(file)
                        : 'https://placehold.co/200?text=Choose+image'
                    }
                    alt="preview"
                    width="200"
                />
                <button
                    type="submit"
                    disabled={file && inputs.title.length > 3 ? false : true}
                >
                    Upload
                </button>
            </form>
        </>
    );
};
export default Upload;