const Footer = () => {
    return ( 
        <footer className="w-full bg-white">
            <div className="xl:px-4 pb-4 lg:px-4 md:px-6 sm:px-5 px-8">
                <div className="w-full p-4 flex flex-col sm:flex-row space-y-2 justify-start text-sm">
                    <div className="w-full sm:w-3/5 flex flex-col"> 
                        <div>
                            <h2 className="font-semibold text-lg">About us</h2>
                            <p className="py-4">We are a team of nurses, doctors and executives dedicated to help nurses find jobs that they love.</p>
                            <p>All copyrights reserved © 2020 - Health Explore</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/5 flex flex-col">
                        <h2 className="font-semibold text-lg mb-2">Sitemap</h2>   
                        <a className="py-1">Nurses</a>
                        <a className="py-1">Employees</a> 
                        <a className="py-1">Social Networking</a>
                        <a className="py-1">Jobs</a>          
                    </div>
                    <div className="w-full sm:w-1/5 flex flex-col">
                        <h2 className="font-semibold text-lg mb-2">Privacy</h2>
                        <a className="py-1">Terms of use</a>
                        <a className="py-1">Privacy Policy</a> 
                        <a className="py-1">Cookie Policy</a>            
                    </div>
                </div>
            </div> 
        </footer>
     );
}
 
export default Footer;
