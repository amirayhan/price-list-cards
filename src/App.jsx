import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PhoneBar from "./components/PhoneBar/PhoneBar";
import PriceList from "./components/PriceList/PriceList";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <h1 className="text-7xl text-purple-600 text-center">Hello From Tailwind</h1>
            </div>
            <PriceList></PriceList>
            <Dashboard></Dashboard>
            <PhoneBar></PhoneBar>
        </>
    );
}

export default App;
