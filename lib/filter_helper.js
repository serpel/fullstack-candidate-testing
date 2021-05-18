
export const applySearch = (jobList, keyword) => {

    var filterResult = jobList;
    if(!keyword) return filterResult;
  
    console.log("appliying search: "+keyword);
  
    filterResult = jobList.filter(job => 
      job.name.toLowerCase().includes(keyword.toLowerCase()) || 
      job.job_title.toLowerCase().includes(keyword.toLowerCase()));
  
    return filterResult;
}

export const applyFilter = (jobList, filter) => {

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

export const applySortBy = (jobList, sortList) =>
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

export const filterAscending = (jobList, sortValue) => {
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

export const filterDescending = (jobList, sortValue) => {
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