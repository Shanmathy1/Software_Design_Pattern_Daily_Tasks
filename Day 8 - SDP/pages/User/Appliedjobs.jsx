import React, { useEffect, useState } from 'react';
import SingleAppliedJobs from './Single';
import useTitle from '@/components/hooks/useTitle';

const AppliedJobs = () => {
    const [storedJob, setStoredJob] = useState([]);
    const [data, setData] = useState([]);
    useTitle('Applied Job');

    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem('jobs'));
        setStoredJob(getData);
        setData(getData);
    }, []);

    const handleFilter = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'Filter') {
            setStoredJob(data);
        } else {
            const filteredJobs = data.filter((single) => single.remote_or_onsite === selectedValue);
            setStoredJob(filteredJobs);
        }
    };

    return (
        <div>
            <h1 className='text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Applied Jobs</h1>
            <div>
                <div className="mb-6 w-3/4 text-end mx-auto">
                    <label htmlFor="filter" className='font-semibold'>Filter by: </label>
                    <select name="filter" id="filter" onChange={handleFilter} className='bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center'>
                        <option value="Filter">Filter By</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                    </select>
                </div>
            </div>

            {/* applied jobs */}
            <div>
                {storedJob?.map((singleJob) => (
                    <SingleAppliedJobs singleJob={singleJob} key={singleJob.id}></SingleAppliedJobs>
                ))}
            </div>

            {/* Inline CSS */}
            <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                h1 {
                    font-size: 2.5rem;
                    text-align: center;
                    background: linear-gradient(to right, #536976, #bbd2c5);
                    -webkit-background-clip: text;
                    color: transparent;
                    padding: 10px 0;
                    margin-bottom: 20px;
                }

                .mb-6 {
                    margin-bottom: 1.5rem;
                }

                .text-end {
                    text-align: right;
                }

                .mx-auto {
                    margin-left: auto;
                    margin-right: auto;
                }

                .font-semibold {
                    font-weight: 600;
                }

                .py-2 {
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                }

                .px-4 {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                .rounded {
                    border-radius: 0.375rem;
                }

                .inline-flex {
                    display: inline-flex;
                    align-items: center;
                }

                .bg-gray-300 {
                    background-color: #E2E8F0;
                }

                .text-gray-700 {
                    color: #4A5568;
                }

                .dropdown:hover .dropdown-menu {
                    display: block;
                }
            `}</style>
        </div>
    );
};

export default AppliedJobs;
