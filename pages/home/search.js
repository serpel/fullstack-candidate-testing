import { useState } from "react";

const Search = ({term = "", onSearch}) => {
    const [value, setValue] = useState(term);

    return ( 
        <form onSubmit={(e) => {
            e.preventDefault();
            onSearch(value);
        }}>
            <div className="w-full sm:flex-row">
                <div className="relative flex items-center flex-wrap sm:px-1 sm:py-1 md:py-1 xl:p-4">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-6 focus:outline-none">
                            <svg fill="none" stroke="gray" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </span>
                    <input 
                        className="pl-16 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded py-4 " 
                        placeholder="Search for any job, title, keyword or company"
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}/>
                </div>
            </div>  
        </form>
    );
}
 
export default Search;