import axios from "axios";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

// const URI = 'http://localhost:8000/Blogs/';
const URI = 'https://blog-server-express.herokuapp.com/Blogs/';

const CompCreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    //procedimiento guardar

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content: content})
        navigate('/')
    }


    return (
        <div>
            <h3>Create Post</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea type="text"
                              value={content}
                              onChange={(e) => setContent(e.target.value)}
                              className='form-control'
                    />
                </div>
                <button className="btn btn-primary">
                    <i className="fa-regular fa-floppy-disk"/>
                </button>
            </form>
        </div>
    )
}

export default CompCreateBlog;