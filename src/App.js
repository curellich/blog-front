
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ComShowBlogs from "./blog/ShowBlogs";
import CompCreateBlog from "./blog/CreateBlogs";
import CompEditBlog from "./blog/EditBlogs";

function App() {
    return (
        <div className="App">


            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ComShowBlogs/>}/>
                    <Route path='/create' element={<CompCreateBlog/>}/>
                    <Route path={'/edit/:id'} element={<CompEditBlog/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
