const navigation = [
    { name: 'Profile', href: '#', current: true },
    { name: 'Jobs', href: '#', current: false },
    { name: 'Professional Network', href: '#', current: false },
    { name: 'Salary', href: '#', current: false },
  ]

const Navbar = () => {
    return (
        <nav className="bg-white sm:flex-row">
            <div className="max-w mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Main menu</span>
                        
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                </div>
                <div className="flex">
                    <div className="flex py-1.5 font-medium text-blue-400 text-md uppercase">
                        Health Explorer
                    </div>
                </div>
                <div className="flex-2 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block sm:ml-12">
                        <div className="flex space-x-4 uppercase">
                            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Profile</a>

                            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Jobs</a>

                            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Professional Network</a>

                            <a href="#" className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Salary</a>
                            </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a href="#" className="mr-6 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-blue-400 font-medium border-2 border-blue-400">
                            CREATE JOB
                    </a>
                    <div className="uppercase p-2 flex items-center bg-blue-500 text-white max-w-max shadow-sm hover:shadow-lg rounded-full w-9 h-9">
                       SP
                       <div className="mb-6 ml-0 px-2 py-0 bg-red-500 rounded-full text-size-sm">1</div>
                    </div>

                    <a href="#" className="hover:text-blue-400 ml-6 px-3 py-2 rounded-md text-sm font-medium uppercase sm:block">Logout</a>                       

                    <div className="ml-3 relative">
                        <div>
                            <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="sr-only">Open user menu</span>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="sm:flex-row sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="text-gray-400 hover:text-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b-2 border-gray-100 dark:border-gray-800" aria-current="page">Profile</a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b-2 border-gray-100 dark:border-gray-800">Jobs</a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b-2 border-gray-100 dark:border-gray-800">Professional Network</a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-b-2 border-gray-100 dark:border-gray-800">Salary</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
