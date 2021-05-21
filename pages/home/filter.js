import { useState } from "react";
import FilterModal from './filtermodal';
import FilterElement from './filterelement';

const Filter = ({name = "", filters = [], onFilterBy, filterOptions, maxFilters = 10}) => {

    const [open, setOpen] = useState(false);

    const titleFormater = ((name) => name.replace('_', ' '));

    const showMore = filters?.length > maxFilters ? <div onClick={() => setOpen(true)}><a className="text-blue-400" href="#">Show More</a></div> : <></> ;

    return ( 
        <div className="p-4 max-w-md shadow-sm rounded bg-white mb-4">
            <div>
                <h2 className="font-semibold text-lg uppercase">{titleFormater(name)}</h2>
                <div className="text-gray-700 text-sm">
                    <ul>
                        {filters.slice(0, maxFilters).map((filter) => (
                            <FilterElement key={filter.key} item={{key: name, value: filter.key, doc_count: filter.doc_count}} onFilterBy={onFilterBy} filterOptions={filterOptions} />
                        ))}
                        {showMore}
                    </ul>
                </div>
                <FilterModal filters={filters} isShowMoreSelected={open} onFilterClose={() => setOpen(false)} />
            </div>
        </div> 
    );
}
 
export default Filter;