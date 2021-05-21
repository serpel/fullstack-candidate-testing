import Head from "next/head";
import JobList from "./home/joblist"
import FilterList from "./home/filterlist"
import LoadingSpinner from "../components/loading_spinner"
import ErrorMessage from "../components/error_message"
import Search from "./home/search"
import useSwr, {mutate} from 'swr'
import fetcher from '../lib/fetcher'
import { createContext, useReducer, useState } from "react";

const getSortType = ({state}) => {
    var sortType = "";
    switch(state){
        case 0: 
          sortType = "asc";
          break;
        case 1:
          sortType = "desc";
          break
        default:
          sortType = "";
    }

    return sortType;
  };

const parseSortingTerms = ({terms}) => Object.entries(terms).map(([key, state]) => `${key}:${getSortType({state})}`);
const parseFilterTerms = ({terms}) => Object.entries(terms).map(([key, value]) => `${key}:${value}`);
const initialSortState = {
  location: 2,
  role: 2,
  department: 2,
  education: 2,
  experience: 2
};

const initialFilterState = {};

const Home = () => {
  const [keyword, setKeyword] = useState(""); 
  const [sortState, dispatchSort] = useReducer(sortReducer, initialSortState);
  const [filterState, dispatchFilter ] = useReducer(filterByReducer, initialFilterState);
  const filters = ['location', 'role', 'department', 'education', 'experience'];
 
  const filterString = parseFilterTerms({terms: filterState}).join(",");
  const sortingString = parseSortingTerms({terms: sortState}).join(",");

  const url = `/api/jobs?search=${keyword}` + 
    (filterString ? `&filter=${filterString}` : filterString) + 
    (sortingString ? `&sort=${sortingString}` : sortingString);
    
  console.log(`Getting ${url}`);
  const { data, error } = useSwr(url, fetcher);

  if(error) return <ErrorMessage message="Cannot load Jobs ..."></ErrorMessage>;
  if(!data) return <LoadingSpinner />;
   
  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  }

  const handleFilterBy = (item: any) => {   
    console.log("clicked filterTerm:"+ item.key + " filter value:"+item.value);
    dispatchFilter(item);
  }

  const handleSortBy = (sortTerm: string) => {
    console.log("clicked "+sortTerm);
    dispatchSort(sortTerm);
  }

  function sortReducer (state: { [x: string]: any; }, term: string) { 
    var counter = state[term];
    counter = counter == 2 ? 0 : counter + 1;
    return ({ ...state, [term]: counter});
  }

  function filterByReducer (state: { [x: string]: any; }, item: any) {
    if(state[item.key] == item.value)
    {
      //deselect filter
      return ({...state, [item.key]: ""})
    }
    return ({...state, [item.key]: item.value.replace("&", "")})
  }

  const { jobs } = data;

  return ( 
    <>
    <Head>
      <title>Health Explorer</title>
      <meta
        name="description"
        content="Awesome Health Explorer build with Next.js + TailWind CSS"
      />
    </Head> 
      <Search term={keyword} onSearch={handleSearch} />
      <main className="rounded relative h-full">
        <div className="flex items-start justify-between">
          <FilterList onFilterBy={handleFilterBy} filterOptions={filterState} />
          <JobList 
            jobs={jobs} 
            onSortBy={handleSortBy} 
            sortingStatus={sortState} 
            filterTerms={filters} /> 
        </div>
      </main>
    </>
  );
}
 
export default Home;