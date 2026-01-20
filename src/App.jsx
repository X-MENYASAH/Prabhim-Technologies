import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Courses from '@/pages/Courses';
import Contact from '@/pages/Contact';
import Blogs from '@/pages/Blogs';
import BlogPost1 from '@/pages/BlogPost1';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/how-cad-is-transforming-product-design" element={<BlogPost1 />} />
            </Routes>
        </Router>
    );
}

export default App;
