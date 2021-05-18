import { useState } from 'react'
import { dateToWords } from '../../lib/date_helper'
import { parseNameInitials } from '../../lib/string_helper'
import JobDetail from './jobDetail'

const Job = ({job = {}}) => {
    const [isJobListingSelected, setJobListing] = useState(false);
    const [isJobDetailSelected, setJobDetail] = useState(false);

    const handleJobListing = () => {
        setJobListing(!isJobListingSelected);
    }

    const handleJobDetail = () => {
        setJobDetail(!isJobDetailSelected);
    }

    const salaryFormater = (items) => items.map(item => `$${item}`).join(" - ");

    const jobListing = (job) => isJobListingSelected ?
        <>           
            {job.items?.map((item) => 
                <li className="dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800 p-4">
                    <div className="text-sm" onClick={handleJobDetail}>
                        <span>
                            <div className="font-semibold">
                                {item.job_title}
                            </div>
                            <div className="flex flex-row text-gray-500">
                                <div className="flex-1"> 
                                    {item['job_type']} | {salaryFormater(item['salary_range'])} an hour | {item['city']} | {item['experience']}
                                </div>
                                <div className="flex-2">
                                    {dateToWords(item['created'])}
                                </div>
                            </div>
                        </span>
                    </div>
                    <JobDetail item={item} isJobDetailSelected = {isJobDetailSelected}/>
                </li>
            )}
        </>
        : <></>;

    return ( 
        <>
            <li className="flex items-center dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-start text-sm" onClick={handleJobListing}>
                        <span className="mx-4 p-0.5 w-8 text-lg uppercase bg-gray-400 rounded-md text-white">
                            {parseNameInitials(job.name)}
                        </span>
                        <span>
                            {job.total_jobs_in_hospital} jobs for {job.name}
                        </span>                
                </div> 
            </li>
            {jobListing(job)} 
        </>
     );
}
 
export default Job;