import Head from "next/head";
import JobList from "./home/joblist"
import FilterList from "./home/filterlist"
import LoadingSpinner from "../components/loading_spinner"
import ErrorMessage from "../components/error_message"
import Search from "./home/search"
import useSwr from 'swr'
import fetcher from '../lib/fetcher'
import { createContext, useState } from "react";

export const FilterContext = createContext("testing");

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

const Home = () => {
  const [keyword, setKeyword] = useState(""); 
  const [sortingStatus, changeSortingStatus] = useState({
    location: 2,
    role: 2,
    department: 2,
    education: 2,
    experience: 2
  }); 
  const [filterOptions, setFilterOptions] = useState({});
  const filters = ['location', 'role', 'department', 'education', 'experience'];
 
  var filterString = parseFilterTerms({terms: filterOptions}).join(",");
  var sortingString = parseSortingTerms({terms: sortingStatus}).join(",");
    
  const { data, error } = useSwr(`/api/jobs?search=${keyword}&filter=${filterString}&sort=${sortingString}`, fetcher);

  if(error) return <ErrorMessage message="Cannot load Jobs ..."></ErrorMessage>;
  if(!data) return <LoadingSpinner />;
   
  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  }

  const handleFilterBy = (filterTerm: string, value:string) => {
    console.log("filterTerm:"+ filterTerm + " filter value:"+value);

    setFilterOptions(state => ({
      ...state,
      [filterTerm] : value
    }));
  }

  const handleSortBy = (sortTerm: string) => {
    console.log("clicked "+sortTerm);

    var counter = sortingStatus[sortTerm];
    counter = counter == 2 ? 0 : counter + 1;
    changeSortingStatus(state => ({
      ...state,
      [sortTerm]: counter
    }));
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
          <FilterList onFilterBy={handleFilterBy} filterOptions={filterOptions} />
          <JobList 
            jobs={jobs} 
            onSortBy={handleSortBy} 
            sortingStatus={sortingStatus} 
            filterTerms={filters} />
          
        </div>
      </main>
    </>
  );
}
 
export default Home;