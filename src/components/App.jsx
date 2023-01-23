import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
import NavMenu from './NavMenu';
import Header from './Header';
import ScrollDown from './utils/ScrollDown';
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
    const [toggle, setToggle] = useState(false);
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {loading && <Loading />}
            <NavMenu toggle={toggle} setToggle={setToggle} />
            <Header toggle={toggle} setToggle={setToggle} />
            <main>
                <ScrollDown />
                <Welcome />
                <About />
                <Projects />
                <Contact />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
