import axios from "axios";
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

// const URI = "http://localhost:8000/Blogs/";
const URI = 'https://blog-server-express.herokuapp.com/Blogs/';

const CompEditBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault();
        axios.put(URI + id, {
            title: title,
            content: content
        })
        navigate('/');
    }

    useEffect(() => {
        getBlogById();
    }, []);

    const getBlogById = async () => {
        const res = await axios.get(URI + id);
        setTitle(res.data.title);
        setContent(res.data.content);
    }

    return(
        <div>
            <h3>Edit Post</h3>
            <form onSubmit={update}>

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

export default CompEditBlog;