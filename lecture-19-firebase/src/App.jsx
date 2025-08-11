import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TargetCursor from "./bitsComponent/TargetCursor";
import Lightning from "./bitsComponent/Lightning";
import HomePage from "./pages/Home";
import SignUp from "./components/SignUp";

const App = () => {
    return (
        <BrowserRouter>
            
 
            <TargetCursor spinDuration={3} hideDefaultCursor={true} />

            <div style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                pointerEvents: 'none',
            }}>
                <Lightning
                    hue={320}
                    xOffset={0}
                    speed={1}
                    intensity={1}
                    size={1}
                />
            </div>

            
            <div style={{ position: 'relative', zIndex: 0 }}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
