import jobs from '../../data/jobs'
import { applySearch, applyFilter, applySortBy } from '../../lib/filter_helper'

export default async (req, res) => {

  res.statusCode = 200
  // @todo: implement filters and search
  // @todo: implement automated tests
  const keyword = req.query.search;
  const sort = req.query.sort;
  const filter = req.query.filter;

  console.log("-------------------------------------");

  var searchJobs = applySearch(jobs, keyword);
  var filteredJobs = applyFilter(searchJobs, filter);
  const sortedJobs = applySortBy(filteredJobs, sort);

  console.log(`Total Jobs: ${jobs?.length}`);
  console.log(`Total Filtered Jobs: ${filteredJobs?.length}`);
  console.log(`Total Sorted Jobs: ${sortedJobs?.length}`);

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.json({jobs: sortedJobs});
}