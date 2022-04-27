
import './App.css';
import {Routes, Route, BrowserRouter, HashRouter} from "react-router-dom";
import ComShowBlogs from "./blog/ShowBlogs";
import CompCreateBlog from "./blog/CreateBlogs";
import CompEditBlog from "./blog/EditBlogs";

function App() {
    return (
        <div className="App">


            <HashRouter>
                <Routes>
                    <Route path='/' element={<ComShowBlogs/>}/>
                    <Route path='/create' element={<CompCreateBlog/>}/>
                    <Route path={'/edit/:id'} element={<CompEditBlog/>}/>
                </Routes>
            </HashRouter>

        </div>
    );
}

export default App;
