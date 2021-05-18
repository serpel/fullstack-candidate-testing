import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return ( 
        <div className="bg-gray-100">
            <Navbar />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;