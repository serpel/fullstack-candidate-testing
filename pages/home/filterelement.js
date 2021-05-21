const FilterElement = ({item, onFilterBy, filterOptions }) => {
    return ( 
        <li onClick={() => onFilterBy(item)} className={`my-2 ${filterOptions[item.key] === item.value  ? "text-blue-400" : ""}`} key={item.value}>{item.value} 
            <a className="text-gray-400"> {item.doc_count}</a>
        </li> 
    );
}
 
export default FilterElement;