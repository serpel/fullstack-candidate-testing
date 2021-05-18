import Job from './job'

const JobList = ({jobs, filterTerms, onSortBy, sortingStatus}) => {

    if(!jobs){
        return <div>No jobs are here ...</div>
    }

    var jobsCounter = ((jobs) => (
        jobs.reduce((sum, job) => sum + job.total_jobs_in_hospital, 0)
    ));
    
    const orderIcon = (term) => 
        sortingStatus[term] == 0 ? <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg> 
        </div>
        : sortingStatus[term] == 1 ? 
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
        </div> : <div></div>;

    return (   
        <div className="flex flex-col w-full pl-0 lg:p-0 md:space-y-2">
            <div className="h-full pb-24 pr-0 pl-1 sm:flex-row">
                <div className="flex flex-col flex-wrap">
                        <div className="w-full px-1 xl:pl-4 xl:pr-4 lg:pl-0 md:pl-0">
                            <div className="mb-4 mx-0">
                                <div className="shadow-lg rounded bg-white dark:bg-gray-600 w-full">      
                                    <div className="flex">
                                        <div className="flex-auto font-bold text-md p-4 text-black dark:text-white">
                                            {jobsCounter(jobs)}
                                            <span className="text-sm font-normal dark:text-gray-300 dark:text-white ml-2">
                                                Job Posting
                                            </span>
                                        </div>
                                        <div className="hidden sm:block sm:ml-8">
                                            <div className="flex-auto py-4 text-sm text-black dark:text-gray-300 dark:text-white overflow-hidden">
                                                <ul className="flex">
                                                    <li key="sortBy" className="px-4 text-sm text-gray-400 dark:text-white">Sort by</li>
                                                    {filterTerms.map(term => ( 
                                                        <li key={term} className="hover:text-blue-400 px-4 flex" onClick={() => onSortBy(term)}>
                                                            {orderIcon(term)}     
                                                            {term} 
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>                           
                                    <ul>
                                        {jobs?.map((job) => (<Job job={job} />))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
       );
}
 
export default JobList;