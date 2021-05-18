var { applyFilter, applySearch, applySortBy } = require('../lib/filter_helper');
var jobs = require('../data/jobs.json');
var should = require('chai').should();

describe("Search, Filtering and Sorting Testing", function(){
    it('given a keyword it should return a filterd list of jobs', function(){
        var jobFiltered = applySearch(jobs, 'Ambulatory Pacu Nurse');
        var job = jobFiltered[0];
        job.job_title.should.equal('Ambulatory Pacu Nurse');
        jobFiltered?.length.should.equal(1);
    });

    it('given a filter it should return a filterd list of jobs', function(){
        var jobFiltered = applyFilter(jobs, 'job_type:Per-Diem')
        var job = jobFiltered[1];
        var item = job.items[0];
        item['job_type'].should.equal('Per-Diem');
        jobFiltered?.length.should.equal(13);
    });

    it('given a sortBy it should return a sorted list of jobs', function(){
        var jobSorted = applySortBy(jobs, 'experience:asc')
        var job = jobSorted[0];
        var item = job.items[0];
        item['experience'].should.equal("Intermediate");
        item['job_title'].should.equal("Oncology Nurse");
    });
});