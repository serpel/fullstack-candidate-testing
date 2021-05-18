const Filter = ({name = "", filters = [], onFilterBy, filterOptions}) => {

    const titleFormater = ((name) => name.replace('_', ' '));

    const getFilter = ((term, item) => {  
        var filter = filterOptions[term];
        if(!filter) return <li onClick={() => onFilterBy(term, item.key)} className="hover:text-blue-400 my-2" key={item.key}>{item.key} <a className="text-gray-400">{item.doc_count}</a></li>;
        if(filter != item.key) return <li onClick={() => onFilterBy(term, item.key)} className="hover:text-blue-400 my-2" key={item.key}>{item.key} <a className="text-gray-400">{item.doc_count}</a></li>;
        if(filter == item.key) return <li onClick={() => onFilterBy(term, item.key)} className="my-2 text-blue-400 font-semibold" key={item.key}>{item.key} <a className="text-gray-400">{item.doc_count}</a></li>; 
    });

    return ( 
        <div className="p-4 max-w-md shadow-sm rounded bg-white mb-4">
            <div>
                <h2 className="font-semibold text-lg uppercase">{titleFormater(name)}</h2>
                <div className="text-gray-700 text-sm">
                    <ul>
                        {filters.map((filter) => (
                            getFilter(name, filter)
                        ))}
                    </ul>
                </div>
            </div>
        </div> 
    );
}
 
export default Filter;