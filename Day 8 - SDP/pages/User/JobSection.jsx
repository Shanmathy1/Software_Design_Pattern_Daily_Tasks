// import React, { useEffect, useState, Fragment } from 'react';
// import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
// import { Link, useParams } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

// // Inline Styles
// const styles = {
//     container: {
//         padding: '2rem',
//         backgroundColor: '#f8f8f8'
//     },
//     header: {
//         textAlign: 'center',
//         padding: '1rem',
//         backgroundColor: '#1e3a8a',
//         color: '#fff'
//     },
//     section: {
//         margin: '2rem auto',
//         maxWidth: '1200px'
//     },
//     categoryHeader: {
//         fontSize: '2rem',
//         color: '#1e3a8a',
//         marginBottom: '1rem'
//     },
//     paragraph: {
//         marginTop: '1rem',
//         fontSize: '1rem'
//     },
//     button: {
//         backgroundColor: '#1e3a8a',
//         color: '#fff',
//         padding: '0.75rem 1.5rem',
//         border: 'none',
//         borderRadius: '0.5rem',
//         cursor: 'pointer',
//         display: 'inline-block',
//         textAlign: 'center',
//         fontSize: '1rem',
//         marginTop: '1rem'
//     },
//     buttonHover: {
//         backgroundColor: '#1e40af'
//     },
//     jobCard: {
//         border: '2px solid #ddd',
//         borderRadius: '0.5rem',
//         padding: '1rem',
//         backgroundColor: '#fff',
//         textAlign: 'center',
//         marginBottom: '1rem'
//     },
//     jobImage: {
//         width: '5rem',
//         borderRadius: '0.25rem',
//         marginBottom: '1rem'
//     },
//     jobDetails: {
//         display: 'flex',
//         gap: '1.5rem',
//         padding: '1rem'
//     },
//     detailsLeft: {
//         width: '75%'
//     },
//     detailsRight: {
//         width: '25%',
//         border: '2px solid #ddd',
//         borderRadius: '0.5rem',
//         padding: '1rem',
//         backgroundColor: '#fff'
//     },
//     footer: {
//         backgroundColor: '#2d3748',
//         color: '#fff',
//         padding: '1rem',
//         textAlign: 'center'
//     }
// };

// // JobCategory Component
// const JobCategory = ({ category }) => {
//     return (
//         <div style={styles.section}>
//             <h1 style={styles.categoryHeader}>Job Category List</h1>
//             <p style={styles.paragraph}>Explore thousands of job opportunities with all the information you need. It's your future</p>
//             <div className="grid md:grid-cols-4 gap-4 p-2 mt-4">
//                 {
//                     category.map((ct) => (
//                         <SingleCategory
//                             key={ct.id}
//                             ct={ct}
//                         />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// // SingleCategory Component
// const SingleCategory = ({ ct }) => {
//     const { logo, title, available } = ct;
//     return (
//         <div style={styles.jobCard}>
//             <img style={styles.jobImage} src={logo} alt="" />
//             <h1>{title}</h1>
//             <p>{available}</p>
//         </div>
//     );
// };

// // JobDetails Component
// const JobDetails = () => {
//     const { id } = useParams();
//     const [details, setDetails] = useState({});

//     useEffect(() => {
//         fetch('/company.json')
//             .then(response => response.json())
//             .then(data => {
//                 const job = data?.find(d => parseInt(d.id) === parseInt(id));
//                 setDetails(job);
//             });
//     }, [id]);

//     const handleApplyBtn = (item) => {
//         let newJob = {};
//         let prevJob = JSON.parse(localStorage.getItem('jobs'));

//         let searchedJob = prevJob?.find((data) => data.id == item.id);
//         if (!searchedJob) {
//             if (!prevJob) {
//                 newJob = [item];
//                 localStorage.setItem("jobs", JSON.stringify(newJob));
//                 toast.success('Successfully applied');
//             } else {
//                 newJob = [...prevJob, item];
//                 localStorage.setItem("jobs", JSON.stringify(newJob));
//                 toast.success('Successfully applied');
//             }
//         } else {
//             toast.error('Already applied');
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.categoryHeader}> {details.company_name} - Job Details</h1>
//             <div style={styles.jobDetails}>
//                 <div style={styles.detailsLeft}>
//                     <h1>
//                         <span style={{ fontWeight: 'bold' }}>Job Description: </span>{details.job_description}
//                     </h1>
//                     <h1 style={{ marginTop: '1rem' }}>
//                         <span style={{ fontWeight: 'bold' }}>Job Responsibility:</span> {details.job_responsibility}
//                     </h1>
//                     <h1 style={{ marginTop: '1rem', fontWeight: 'bold' }}>Educational Requirements:</h1>
//                     <p>{details.educational_requirements}</p>
//                     <h1 style={{ marginTop: '1rem' }}>
//                         <span style={{ fontWeight: 'bold' }}>Experiences:</span> {details.experiences}
//                     </h1>
//                 </div>
//                 <div style={styles.detailsRight}>
//                     <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Job Details</h1>
//                     <hr />
//                     <p style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
//                         <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
//                         <div>
//                             <span style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>Salary: </span>
//                             {details.salary}
//                         </div>
//                     </p>
//                     <p style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
//                         <CalendarDaysIcon className="h-6 w-6 text-blue-500" />
//                         <div>
//                             <span style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>Job Title: </span>
//                             {details.job_title}
//                         </div>
//                     </p>
//                     <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem' }}>Contact Information</h1>
//                     <hr />
//                     <p style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
//                         <PhoneIcon className="h-6 w-6 text-blue-500" />
//                         <div>
//                             <span style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>Phone: </span>
//                             {details.contact_information?.phone}
//                         </div>
//                     </p>
//                     <p style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
//                         <EnvelopeIcon className="h-6 w-6 text-blue-500" />
//                         <div>
//                             <span style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>Email: </span>
//                             {details.contact_information?.email}
//                         </div>
//                     </p>
//                     <p style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
//                         <MapPinIcon className="h-6 w-6 text-blue-500" />
//                         <div>
//                             <span style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>Address: </span>
//                             {details.location}
//                         </div>
//                     </p>
//                 </div>
//             </div>
//             <button onClick={() => handleApplyBtn(details)}
//                 style={styles.button}>
//                 Apply Now
//             </button>
//             <Toaster />
//         </div>
//     );
// };

// // JobSection Component
// const JobSection = () => {
//     const [jobs, setJobs] = useState([]);
//     const [seeAll, setAll] = useState(false);

//     useEffect(() => {
//         fetch('/company.json')
//             .then((res) => res.json())
//             .then((data) => setJobs(data));
//     }, []);

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.categoryHeader}>Featured Jobs</h1>
//             <p style={styles.paragraph}>Explore thousands of job opportunities with all the information you need. It's your future</p>
//             <div className="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
//                 {
//                     seeAll ?
//                         jobs.map((job) => (
//                             <SingleJobs
//                                 key={job.id}
//                                 job={job}
//                             />
//                         ))
//                         : jobs.slice(0, 4).map((job) => (
//                             <SingleJobs
//                                 key={job.id}
//                                 job={job}
//                             />
//                         ))
//                 }
//             </div>
//             <button onClick={() => setAll(!seeAll)}
//                 style={{ ...styles.button, ...(seeAll ? styles.buttonHover : {}) }}>
//                 {seeAll ? 'See Less' : 'See All Jobs'}
//             </button>
//         </div>
//     );
// };

// // SingleJobs Component
// const SingleJobs = ({ job }) => {
//     const { company_name, job_title, logo, location, id, salary } = job;

//     return (
//         <div style={styles.jobCard}>
//             <img style={styles.jobImage} src={logo} alt="" />
//             <h1>{job_title}</h1>
//             <p>{company_name}</p>
//             <p>{location}</p>
//             <p style={{ fontWeight: 'bold' }}>{salary}</p>
//             <Link to={`/job/${id}`}>
//                 <button style={styles.button}>View Details</button>
//             </Link>
//         </div>
//     );
// };

// // App Component
// const App = () => {
//     const data = [
//         { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//         { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//         { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//         { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//         { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//         { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//         { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
//     ];

//     return (
//         <Fragment>
//             <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
//                 <header style={styles.header}>
//                     <h1 style={{ fontSize: '3rem' }}>My Job Portal</h1>
//                 </header>
//                 <main style={{ flexGrow: 1, padding: '1rem' }}>
//                     <JobCategory category={[]} /> {/* Replace with actual category data */}
//                     <JobSection />
//                     <JobDetails />
//                 </main>
//                 <footer style={styles.footer}>
//                     <h1 style={{ fontSize: '1.25rem' }}>Job Statistics</h1>
//                     <BarChart width={500} height={300} data={data}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="pv" fill="#8884d8" />
//                         <Bar dataKey="uv" fill="#82ca9d" />
//                     </BarChart>
//                 </footer>
//             </div>
//         </Fragment>
//     );
// };

// export default App;




import React, { useEffect, useState } from 'react';
import SingleJobs from './SingleJobs'; // Ensure this import path is correct

// Inline Styles
const styles = {
    container: {
        padding: '2rem',
        backgroundColor: '#f8f8f8'
    },
    categoryHeader: {
        fontSize: '2rem',
        color: '#1e3a8a',
        marginBottom: '1rem'
    },
    paragraph: {
        marginTop: '1rem',
        fontSize: '1rem'
    },
    button: {
        backgroundColor: '#1e3a8a',
        color: '#fff',
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center',
        fontSize: '1rem',
        marginTop: '1rem'
    },
    buttonHover: {
        backgroundColor: '#1e40af'
    },
    jobCard: {
        border: '2px solid #ddd',
        borderRadius: '0.5rem',
        padding: '1rem',
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom: '1rem'
    },
    jobImage: {
        width: '5rem',
        borderRadius: '0.25rem',
        marginBottom: '1rem'
    },
    logoCard: {
        border: '2px solid #1e3a8a',
        borderRadius: '0.5rem',
        padding: '1rem',
        backgroundColor: '#1e3a8a',
        textAlign: 'center',
        marginBottom: '1rem'
    },
    logoImage: {
        width: '6rem',
        margin: '0 auto'
    }
};

// JobSection Component
const JobSection = () => {
    const [jobs, setJobs] = useState([]);
    const [seeAll, setAll] = useState(false);

    useEffect(() => {
        fetch('/company.json')
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.categoryHeader}>Featured Jobs</h1>
            <p style={styles.paragraph}>Explore thousands of job opportunities with all the information you need. It's your future</p>
            <div className="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
                {
                    seeAll ?
                        jobs.map((job) => (
                            <SingleJobs
                                key={job.id}
                                job={job}
                            />
                        ))
                        : jobs.slice(0, 4).map((job) => (
                            <SingleJobs
                                key={job.id}
                                job={job}
                            />
                        ))
                }
            </div>
            <button onClick={() => setAll(!seeAll)}
                style={{ ...styles.button, ...(seeAll ? styles.buttonHover : {}) }}>
                {seeAll ? 'See Less' : 'See All Jobs'}
            </button>
            <div style={{ marginTop: '2rem' }}>
                <h2 style={styles.categoryHeader}>Our Partner Companies</h2>
                <div className="grid md:grid-cols-4 gap-4 p-2 mt-4">
                    <div style={styles.logoCard}>
                        <img style={styles.logoImage} src="path/to/google-logo.png" alt="Google" />
                    </div>
                    <div style={styles.logoCard}>
                        <img style={styles.logoImage} src="path/to/oracle-logo.png" alt="Oracle" />
                    </div>
                    <div style={styles.logoCard}>
                        <img style={styles.logoImage} src="path/to/hp-logo.png" alt="HP" />
                    </div>
                    <div style={styles.logoCard}>
                        <img style={styles.logoImage} src="path/to/another-company-logo.png" alt="Another Company" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSection;

