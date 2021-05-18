import useSwr from 'swr';
import LoadingSpinner from "../../components/loading_spinner";
import fetcher from '../../lib/fetcher'
import Filter from "./filter";

const FilterList = ({onFilterBy, filterOptions}) => {

    const { data, error } = useSwr('/api/filters', fetcher);

    if(error) return ( 
                <div className="h-screen hidden lg:block w-1/4 sm:flex-row md:flex-row">
                    <div className="bg-gray h-full rounded sm:ml-0 md:ml-1 md:mh-1 lg:mb-4 xl:ml-4">
                        <nav>
                            <div>Error loading filters</div>
                        </nav>
                    </div>
                </div>
            );
            
    if(!data) return (<LoadingSpinner />);

    const filterList = Object.entries(data).map(([key, value]) => (<Filter name={key} filters={value} onFilterBy={onFilterBy} filterOptions={filterOptions} />));

    if(filterList?.length === 0){
        return (<div>No filters here ...</div>);
    }

    return (
        <div className="h-screen hidden lg:block w-1/4 sm:flex-row md:flex-row">
            <div className="bg-gray h-full rounded sm:ml-0 md:ml-1 md:mh-1 lg:mb-4 xl:ml-4">
                <nav>
                    <div>
                        {filterList}     
                    </div>
                </nav>
            </div>
        </div>
     );
}
 
export default FilterList;