import jobs from '../../data/jobs'

export default async (req, res) => {

  res.statusCode = 200
  // @todo: implement filters and search
  // @todo: implement automated tests
  const keyword = req.query.search;
  const sort = req.query.sort;
  const filter = req.query.filter;

  var filteredJobs = applySearch(jobs, keyword);
  filteredJobs = applyFilter(filteredJobs, filter);
  filteredJobs = applySortBy(filteredJobs, sort);

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.json({jobs: filteredJobs});
}

const applySearch = (jobList, keyword) => {

  var filterResult = jobList;
  if(!keyword) return filterResult;

  console.log("appliying search: "+keyword);

  filterResult = jobList.filter(job => 
    job.name.toLowerCase().includes(keyword.toLowerCase()) || 
    job.job_title.toLowerCase().includes(keyword.toLowerCase()));

  return filterResult;
}

const applyFilter = (jobList, filter) => {

    if(jobList?.length === 0 || !filter) return jobList;

    var filters = filter.split(',');

    filters.forEach(item => {

      var filterItems = item.split(':');
      var filterType = filterItems[0].toLowerCase();//job_type
      var filterTerm = filterItems[1];//full-time
  
      if(filterTerm && filterType){
        console.log("appliying Filter: "+item);

        //filter only job that has at least one filter term
        jobList = jobList.filter(job => 
          job.items.map(i => i[filterType]).includes(filterTerm)
        );
        
        //filter child jobs
        jobList.forEach(job => 
          job.items = job.items.filter(item => item[filterType].includes(filterTerm))
        );
      }
    });

    return jobList;
}

const applySortBy = (jobList, sortList) =>
{
  if(!sortList) return jobList;
  
  var sorts = sortList.split(',');

  sorts.forEach(sort => {
    var sorting = sort.split(':')
    var sortType = sorting[1].toLowerCase(); //asc
    var sortValue = sorting[0].toLowerCase(); //location

    if(sortType && sortValue){
      console.log("appliying sort: " +sortValue + " - "+sortType);
      
      switch(sortType){
          case 'asc': 
            filterAscending(jobList, sortValue);
            break;
          case 'desc':
            filterDescending(jobList, sortValue);
            break;
          default:
            /* Do nothing */
            break;
      }
    }
  });

  return jobList;
}

const filterAscending = (jobList, sortValue) => {
  jobList.forEach(job => {
    job.items = job.items.sort((a, b) => {
      if(a[sortValue] > b[sortValue])
      {
        return 1;
      }
      if(b[sortValue] > a[sortValue])
      {
        return -1;
      }
      return 0;
    });
  });
}

const filterDescending = (jobList, sortValue) => {
  jobList.forEach(job => {
    job.items = job.items.sort((a, b) => {
      if(a[sortValue] > b[sortValue])
      {
        return -1;
      }
      if(b[sortValue] > a[sortValue])
      {
        return 1;
      }

      return 0;
    });
  });
}