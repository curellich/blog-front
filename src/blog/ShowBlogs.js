import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const URI = "http://localhost:8000/Blogs/";

const ComShowBlogs = () => {
    const [blogs, setBlogs] = useState([{}]);

    useEffect(() => {
        getBlogs()

    }, []);

//Procedimiento para mostrar los blogs

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlogs(res.data)
    }
    //Procedimiento para eliminar un blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`);
        await getBlogs();
    }

    return (
        <div>
            <Link to={'/create'} className="btn btn-primary mt-2 mb-2">
                <i className="fa-solid fa-circle-plus"/>
            </Link>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Actions</th>

                </tr>
                </thead>
                <tbody>
                {blogs.map((blog) => (
                    <tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.title}</td>
                        <td>{blog.content}</td>
                        <td>
                            <Link to={`/edit/${blog.id}`} className="btn btn-info m-1">
                                <i className="fa-regular fa-pen-to-square"/>
                            </Link>
                            <button className="btn btn-danger m-1" onClick={() => deleteBlog(blog.id)}>
                                <i className="fa-regular fa-trash-can"/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default ComShowBlogs;