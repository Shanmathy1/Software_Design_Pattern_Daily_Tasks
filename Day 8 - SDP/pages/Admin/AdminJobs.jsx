// import React, { useState } from 'react';

// const JobsComponent = () => {
  
//   const initialJobs = [
//     {
//       title: 'App Developer',
//       company: 'Company LogoApple Inc.',
//       location: 'San Francisco, CA',
//       status: 'Active',
//       postedDate: '2024-07-01',
//       applications: 100
//     },
//     {
//       title: 'Web Developer',
//       company: 'Company LogoMicrosoft',
//       location: 'New York, NY',
//       status: 'Active',
//       postedDate: '2024-07-05',
//       applications: 120
//     },
//     {
//       title: 'Software Engineer',
//       company: 'IBM',
//       location: 'London',
//       status: 'Inactive',
//       postedDate: '2024-06-20',
//       applications: 50
//     },
//     {
//       title: 'Product Designer',
//       company: 'DELL',
//       location: 'Germany',
//       status: 'Active',
//       postedDate: '2024-07-10',
//       applications: 150
//     },
//     {
//       title: 'Java Developer',
//       company: 'hp',
//       location: 'Moscow',
//       status: 'Active',
//       postedDate: '2024-07-15',
//       applications: 70
//     },
//     {
//       title: 'UI Designer',
//       company: 'Google',
//       location: 'Turkey',
//       status: 'Closed',
//       postedDate: '2024-06-25',
//       applications: 25
//     },
//   ];

//   // State to manage job list, toast visibility, and modal visibility
//   const [jobs, setJobs] = useState(initialJobs);
//   const [toast, setToast] = useState({ message: '', visible: false });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [newJob, setNewJob] = useState({
//     title: '',
//     company: '',
//     location: '',
//     status: '',
//     postedDate: '',
//     applications: ''
//   });
//   const [jobToDelete, setJobToDelete] = useState(null);

//   // Handler to toggle job status between Active and Inactive
//   const toggleStatus = (index) => {
//     const updatedJobs = [...jobs];
//     const newStatus = updatedJobs[index].status === 'Active' ? 'Activated' : 'Active';
//     updatedJobs[index].status = newStatus;
//     setJobs(updatedJobs);

//     // Show toast notification if job is activated
//     if (newStatus === 'Activated') {
//       setToast({ message: 'Job activated Successfully...', visible: true });
//       setTimeout(() => setToast({ ...toast, visible: false }), 3000); // Hide toast after 3 seconds
//     }
//   };

//   // Handler to open modal
//   const openModal = () => {
//     setIsModalOpen(true);
//     // Reset new job form
//     setNewJob({
//       title: '',
//       company: '',
//       location: '',
//       status: 'Active', // Default value
//       postedDate: '',
//       applications: ''
//     });
//   };

//   // Handler to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Handle input changes in the modal
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewJob({ ...newJob, [name]: value });
//   };

//   // Handle confirm button click
//   const handleConfirm = () => {
//     setJobs([...jobs, newJob]); // Add the new job to the list
//     closeModal(); // Close the modal
//     setToast({ message: 'Job added successfully!', visible: true });
//     setTimeout(() => setToast({ ...toast, visible: false }), 3000); // Hide toast after 3 seconds
//   };

//   // Handle delete button click
//   const handleDelete = (index) => {
//     setJobToDelete(jobs[index]);
//     setIsDeleteModalOpen(true);
//   };

//   // Handle confirm delete
//   const handleConfirmDelete = () => {
//     setJobs(jobs.filter(job => job !== jobToDelete));
//     setIsDeleteModalOpen(false);
//     setToast({ message: 'Job deleted successfully!', visible: true });
//     setTimeout(() => setToast({ ...toast, visible: false }), 3000); // Hide toast after 3 seconds
//   };

//   // Handle cancel delete
//   const handleCancelDelete = () => {
//     setIsDeleteModalOpen(false);
//   };

//   return (
//     <div className="p-4">
//       {/* Toast Notification */}
//       {toast.visible && (
//         <div className="fixed top-0 right-0 mt-4 mr-4 bg-black text-white px-4 py-2 rounded shadow-lg">
//           {toast.message}
//         </div>
//       )}

//       {/* Header with Add Job button */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Job Listings</h2>
//         <button
//           className="bg-black text-white px-4 py-2 rounded"
//           onClick={openModal}
//         >
//           Add Job
//         </button>
//       </div>

//       {/* Search and Filter */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border p-2 rounded w-full mb-2"
//         />
//         <div className="flex gap-4">
//           <select className="border p-2 rounded">
//             <option value="">Filter by Status</option>
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//             <option value="Closed">Closed</option>
//           </select>
//           <select className="border p-2 rounded">
//             <option value="">Filter by Location</option>
//             <option value="San Francisco, CA">San Francisco, CA</option>
//             <option value="New York, NY">New York, NY</option>
//             <option value="Austin, TX">Austin, TX</option>
//             <option value="Seattle, WA">Seattle, WA</option>
//             <option value="Chicago, IL">Chicago, IL</option>
//             <option value="San Jose, CA">San Jose, CA</option>
//           </select>
//         </div>
//       </div>

//       {/* Job Listing Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="p-2 border-b">Job Title</th>
//               <th className="p-2 border-b">Company</th>
//               <th className="p-2 border-b">Location</th>
//               <th className="p-2 border-b">Status</th>
//               <th className="p-2 border-b">Posted Date</th>
//               <th className="p-2 border-b">Applications</th>
//               <th className="p-2 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job, index) => (
//               <tr key={index}>
//                 <td className="p-2 border-b">{job.title}</td>
//                 <td className="p-2 border-b">{job.company}</td>
//                 <td className="p-2 border-b">{job.location}</td>
//                 <td className="p-2 border-b">{job.status}</td>
//                 <td className="p-2 border-b">{job.postedDate}</td>
//                 <td className="p-2 border-b">{job.applications}</td>
//                 <td className="p-2 border-b flex gap-2">
//                   {/* Action buttons: Activate/Deactivate */}
//                   {job.status === 'Closed' ? (
//                     <button className="bg-gray-500 text-white px-4 py-1 rounded" disabled>Deactivated</button>
//                   ) : (
//                     <button
//                       className={`px-4 py-1 rounded ${
//                         job.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-400 text-black'
//                       }`}
//                       onClick={() => toggleStatus(index)}
//                     >
//                       {job.status === 'Active' ? 'Activate' : 'Deactivate'}
//                     </button>
//                   )}
//                   <button
//                     className="bg-red-500 text-white px-4 py-1 rounded"
//                     onClick={() => handleDelete(index)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for Adding Job */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
//             <h3 className="text-xl font-semibold mb-4">Add New Job</h3>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Job Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={newJob.title}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//                 placeholder="Job Title"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Company</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newJob.company}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//                 placeholder="Company"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={newJob.location}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//                 placeholder="Location"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Status</label>
//               <select
//                 name="status"
//                 value={newJob.status}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//                 <option value="Closed">Closed</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Posted Date</label>
//               <input
//                 type="date"
//                 name="postedDate"
//                 value={newJob.postedDate}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Applications</label>
//               <input
//                 type="number"
//                 name="applications"
//                 value={newJob.applications}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//                 placeholder="Number of Applications"
//               />
//             </div>
//             <div className="flex justify-end gap-4">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={handleConfirm}
//               >
//                 Confirm
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal for Confirming Deletion */}
//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
//             <p className="mb-4">Are you sure you want to delete the following job?</p>
//             {jobToDelete && (
//               <div className="mb-4">
//                 <p><strong>Job Title:</strong> {jobToDelete.title}</p>
//                 <p><strong>Company:</strong> {jobToDelete.company}</p>
//                 <p><strong>Location:</strong> {jobToDelete.location}</p>
//                 <p><strong>Status:</strong> {jobToDelete.status}</p>
//                 <p><strong>Posted Date:</strong> {jobToDelete.postedDate}</p>
//                 <p><strong>Applications:</strong> {jobToDelete.applications}</p>
//               </div>
//             )}
//             <div className="flex justify-end gap-4">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//                 onClick={handleConfirmDelete}
//               >
//                 Delete
//               </button>
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//                 onClick={handleCancelDelete}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobsComponent;




// import React, { useState } from 'react';

// const JobsComponent = () => {
//   // Sample job data
//   const initialJobs = [
//     {
//       title: 'App Developer',
//       company: 'Company LogoApple Inc.',
//       location: 'San Francisco, CA',
//       status: 'Active',
//       postedDate: '2024-07-01',
//       applications: 100
//     },
//     {
//       title: 'Web Developer',
//       company: 'Company LogoMicrosoft',
//       location: 'New York, NY',
//       status: 'Active',
//       postedDate: '2024-07-05',
//       applications: 120
//     },
//     {
//       title: 'Software Engineer',
//       company: 'IBM',
//       location: 'London',
//       status: 'Inactive',
//       postedDate: '2024-06-20',
//       applications: 50
//     },
//     {
//       title: 'Product Designer',
//       company: 'DELL',
//       location: 'Germany',
//       status: 'Active',
//       postedDate: '2024-07-10',
//       applications: 150
//     },
//     {
//       title: 'Java Developer',
//       company: 'hp',
//       location: 'Moscow',
//       status: 'Active',
//       postedDate: '2024-07-15',
//       applications: 70
//     },
//     {
//       title: 'UI Designer',
//       company: 'Google',
//       location: 'Turkey',
//       status: 'Closed',
//       postedDate: '2024-06-25',
//       applications: 25
//     },
//   ];

//   // State to manage job list, toast visibility, and modal visibility
//   const [jobs, setJobs] = useState(initialJobs);
//   const [toast, setToast] = useState({ message: '', visible: false });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [newJob, setNewJob] = useState({
//     title: '',
//     company: '',
//     location: '',
//     status: '',
//     postedDate: '',
//     applications: ''
//   });
//   const [jobToDelete, setJobToDelete] = useState(null);

//   // Handler to toggle job status between Active and Inactive
//   const toggleStatus = (index) => {
//     const updatedJobs = [...jobs];
//     const newStatus = updatedJobs[index].status === 'Active' ? 'Activated' : 'Active';
//     updatedJobs[index].status = newStatus;
//     setJobs(updatedJobs);

//     // Show toast notification if job is activated
//     if (newStatus === 'Activated') {
//       setToast({ message: 'Job activated Successfully...', visible: true });
//       setTimeout(() => setToast({ ...toast, visible: false }), 3000); // Hide toast after 3 seconds
//     }
//   };

//   // Handler to open modal
//   const openModal = () => {
//     setIsModalOpen(true);
//     // Reset new job form
//     setNewJob({
//       title: '',
//       company: '',
//       location: '',
//       status: 'Active', // Default value
//       postedDate: '',
//       applications: ''
//     });
//   };

//   // Handler to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Handle input changes in the modal
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewJob({ ...newJob, [name]: value });
//   };

//   // Handle confirm button click
//   const handleConfirm = () => {
//     setJobs([...jobs, newJob]); // Add the new job to the list
//     closeModal(); // Close the modal
//     setToast({ message: 'Job added successfully!', visible: true });
//     setTimeout(() => setToast({ ...toast, visible: false }), 3000); // Hide toast after 3 seconds
//   };

//   // Handle delete button click
//   const handleDelete = (index) => {
//     setJobToDelete(jobs[index]);
//     setIsDeleteModalOpen(true);
//   };

//   // Handle confirm delete
//   const handleConfirmDelete = () => {
//     setJobs(jobs.filter(job => job !== jobToDelete));
//     setIsDeleteModalOpen(false);
//     setToast({ message: 'Job deleted successfully!', visible: true });
//     setTimeout(() => setToast({ ...toast, visible: false }), 3000); // Hide toast after 3 seconds
//   };

//   // Handle cancel delete
//   const handleCancelDelete = () => {
//     setIsDeleteModalOpen(false);
//   };

//   return (
//     <div className="p-4">
//       {/* Toast Notification */}
//       {toast.visible && (
//         <div className="fixed top-0 right-0 mt-4 mr-4 bg-black text-white px-4 py-2 rounded shadow-lg">
//           {toast.message}
//         </div>
//       )}

//       {/* Header with Add Job button */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Job Listings</h2>
//         <button
//           className="bg-black text-white px-4 py-2 rounded"
//           onClick={openModal}
//         >
//           Add Job
//         </button>
//       </div>

//       {/* Search and Filter */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border border-black p-2 rounded w-full mb-2"
//         />
//         {/* <div className="flex gap-4">
//           <select className="border p-2 rounded">
//             <option value="">Filter by Status</option>
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//             <option value="Closed">Closed</option>
//           </select>
//           <select className="border p-2 rounded">
//             <option value="">Filter by Location</option>
//             <option value="San Francisco, CA">San Francisco, CA</option>
//             <option value="New York, NY">New York, NY</option>
//             <option value="Austin, TX">Austin, TX</option>
//             <option value="Seattle, WA">Seattle, WA</option>
//             <option value="Chicago, IL">Chicago, IL</option>
//             <option value="San Jose, CA">San Jose, CA</option>
//           </select>
//         </div> */}
//       </div>

//       {/* Job Listing Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="p-2 border-b">Job Title</th>
//               <th className="p-2 border-b">Company</th>
//               <th className="p-2 border-b">Location</th>
//               <th className="p-2 border-b">Status</th>
//               <th className="p-2 border-b">Posted Date</th>
//               <th className="p-2 border-b">Applications</th>
//               <th className="p-2 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job, index) => (
//               <tr key={index}>
//                 <td className="p-2 border-b">{job.title}</td>
//                 <td className="p-2 border-b">{job.company}</td>
//                 <td className="p-2 border-b">{job.location}</td>
//                 <td className="p-2 border-b">{job.status}</td>
//                 <td className="p-2 border-b">{job.postedDate}</td>
//                 <td className="p-2 border-b">{job.applications}</td>
//                 <td className="p-2 border-b flex gap-2">
//                   {/* Action buttons: Activate/Deactivate */}
//                   {job.status === 'Closed' ? (
//                     <button className="bg-gray-500 text-white px-4 py-1 rounded" disabled>Deactivated</button>
//                   ) : (
//                     <button
//                       className={`px-4 py-1 rounded ${
//                         job.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-400 text-white'
//                       }`}
//                       onClick={() => toggleStatus(index)}
//                     >
//                       {job.status === 'Active' ? 'Activate' : 'Deactivate'}
//                     </button>
//                   )}
//                   <button
//                     className="bg-red-700 text-white px-4 py-1 rounded"
//                     onClick={() => handleDelete(index)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for Adding Job */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
//             <h3 className="text-xl font-semibold mb-4">Add New Job</h3>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Job Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={newJob.title}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Company</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newJob.company}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={newJob.location}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Status</label>
//               <select
//                 name="status"
//                 value={newJob.status}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//               >
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//                 <option value="Closed">Closed</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Posted Date</label>
//               <input
//                 type="date"
//                 name="postedDate"
//                 value={newJob.postedDate}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Applications</label>
//               <input
//                 type="number"
//                 name="applications"
//                 value={newJob.applications}
//                 onChange={handleInputChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded mr-2"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//                 onClick={handleConfirm}
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {isDeleteModalOpen && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
//             <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
//             <p>Are you sure you want to delete the job "{jobToDelete.title}" at "{jobToDelete.company}"?</p>
//             <div className="flex justify-end mt-4">
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
//                 onClick={handleCancelDelete}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//                 onClick={handleConfirmDelete}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobsComponent;




// import React, { useState } from 'react';
// import { FiPlus, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

// const JobListings = () => {
//   const initialData = [
//     { title: 'App Developer', company: 'Apple Inc.', location: 'San Francisco, CA', status: 'Active', date: '2024-07-01', applications: 100 },
//     { title: 'Web Developer', company: 'Microsoft', location: 'New York, NY', status: 'Active', date: '2024-07-05', applications: 120 },
//     { title: 'Software Engineer', company: 'IBM', location: 'London', status: 'Inactive', date: '2024-06-20', applications: 50 },
//     { title: 'Product Designer', company: 'DELL', location: 'Germany', status: 'Active', date: '2024-07-10', applications: 150 },
//     { title: 'Java Developer', company: 'HP', location: 'Moscow', status: 'Active', date: '2024-07-15', applications: 70 },
//     { title: 'UI Designer', company: 'Google', location: 'Turkey', status: 'Closed', date: '2024-06-25', applications: 25 },
//   ];

//   const [jobs, setJobs] = useState(initialData);
//   const [toast, setToast] = useState({ message: '', visible: false });
//   const [modalVisible, setModalVisible] = useState(false);
//   const [deleteModalVisible, setDeleteModalVisible] = useState(false);
//   const [newJob, setNewJob] = useState({ title: '', company: '', location: '', status: 'Active', date: '', applications: '' });
//   const [jobToDelete, setJobToDelete] = useState(null);

//   const toggleStatus = index => {
//     const updatedJobs = jobs.map((job, idx) =>
//       idx === index ? { ...job, status: job.status === 'Active' ? 'Inactive' : 'Active' } : job
//     );
//     setJobs(updatedJobs);
//     setToast({ message: 'Job status updated.', visible: true });
//     setTimeout(() => setToast({ ...toast, visible: false }), 3000);
//   };

//   const openModal = () => {
//     setModalVisible(true);
//     setNewJob({ title: '', company: '', location: '', status: 'Active', date: '', applications: '' });
//   };

//   const closeModal = () => setModalVisible(false);

//   const handleInputChange = e => setNewJob({ ...newJob, [e.target.name]: e.target.value });

//   const confirmAddJob = () => {
//     setJobs([...jobs, newJob]);
//     closeModal();
//     setToast({ message: 'Job added successfully!', visible: true });
//     setTimeout(() => setToast({ ...toast, visible: false }), 3000);
//   };

//   const handleDelete = index => {
//     setJobToDelete(jobs[index]);
//     setDeleteModalVisible(true);
//   };

//   const confirmDelete = () => {
//     setJobs(jobs.filter(job => job !== jobToDelete));
//     setDeleteModalVisible(false);
//     setToast({ message: 'Job deleted successfully!', visible: true });
//     setTimeout(() => setToast({ ...toast, visible: false }), 3000);
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-gray-100">
//       {toast.visible && (
//         <div className="fixed top-4 right-4 bg-black text-white py-2 px-4 rounded shadow-lg">
//           {toast.message}
//         </div>
//       )}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Job Listings</h2>
//         <button className="bg-gray-700 text-white p-2 rounded-full" onClick={openModal}>
//           <FiPlus />
//         </button>
//       </div>
//       <div className="mb-4">
//         <input type="text" placeholder="Search..." className="w-full p-2 mb-2 rounded bg-gray-800 text-gray-200" />
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full bg-gray-800 border border-gray-700">
//           <thead>
//             <tr>
//               <th className="p-2 border-b border-gray-700">Job Title</th>
//               <th className="p-2 border-b border-gray-700">Company</th>
//               <th className="p-2 border-b border-gray-700">Location</th>
//               <th className="p-2 border-b border-gray-700">Status</th>
//               <th className="p-2 border-b border-gray-700">Posted Date</th>
//               <th className="p-2 border-b border-gray-700">Applications</th>
//               <th className="p-2 border-b border-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job, index) => (
//               <tr key={index}>
//                 <td className="p-2 border-b border-gray-700">{job.title}</td>
//                 <td className="p-2 border-b border-gray-700">{job.company}</td>
//                 <td className="p-2 border-b border-gray-700">{job.location}</td>
//                 <td className="p-2 border-b border-gray-700">{job.status}</td>
//                 <td className="p-2 border-b border-gray-700">{job.date}</td>
//                 <td className="p-2 border-b border-gray-700">{job.applications}</td>
//                 <td className="p-2 border-b border-gray-700 flex gap-2">
//                   {job.status === 'Closed' ? (
//                     <button className="bg-gray-600 text-white p-2 rounded-full" disabled>
//                       <FiX />
//                     </button>
//                   ) : (
//                     <button className={`p-2 rounded-full ${job.status === 'Active' ? 'bg-green-600' : 'bg-red-600'} text-white`} onClick={() => toggleStatus(index)}>
//                       <FiCheck />
//                     </button>
//                   )}
//                   <button className="bg-red-600 text-white p-2 rounded-full" onClick={() => handleDelete(index)}>
//                     <FiTrash2 />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {modalVisible && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
//             <h3 className="text-xl font-semibold mb-4">Add New Job</h3>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Job Title</label>
//               <input type="text" name="title" value={newJob.title} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Company</label>
//               <input type="text" name="company" value={newJob.company} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Location</label>
//               <input type="text" name="location" value={newJob.location} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Status</label>
//               <select name="status" value={newJob.status} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200">
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//                 <option value="Closed">Closed</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Posted Date</label>
//               <input type="date" name="date" value={newJob.date} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Applications</label>
//               <input type="number" name="applications" value={newJob.applications} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
//             </div>
//             <div className="flex justify-end">
//               <button className="bg-red-600 text-white p-2 rounded mr-2" onClick={closeModal}>
//                 <FiX />
//               </button>
//               <button className="bg-green-600 text-white p-2 rounded" onClick={confirmAddJob}>
//                 <FiCheck />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {deleteModalVisible && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
//           <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
//             <p>Are you sure you want to delete the job "{jobToDelete.title}" at "{jobToDelete.company}"?</p>
//             <div className="flex justify-end mt-4">
//               <button className="bg-gray-600 text-white p-2 rounded mr-2" onClick={() => setDeleteModalVisible(false)}>
//                 <FiX />
//               </button>
//               <button className="bg-red-600 text-white p-2 rounded" onClick={confirmDelete}>
//                 <FiTrash2 />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobListings;







import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

const JobListings = () => {
  const initialData = [
    { title: 'App Developer', company: 'Apple Inc.', location: 'San Francisco, CA', status: 'Active', date: '2024-07-01', applications: 100 },
    { title: 'Web Developer', company: 'Microsoft', location: 'New York, NY', status: 'Active', date: '2024-07-05', applications: 120 },
    { title: 'Software Engineer', company: 'IBM', location: 'London', status: 'Inactive', date: '2024-06-20', applications: 50 },
    { title: 'Product Designer', company: 'DELL', location: 'Germany', status: 'Active', date: '2024-07-10', applications: 150 },
    { title: 'Java Developer', company: 'HP', location: 'Moscow', status: 'Active', date: '2024-07-15', applications: 70 },
    { title: 'UI Designer', company: 'Google', location: 'Turkey', status: 'Closed', date: '2024-06-25', applications: 25 },
  ];

  const [jobs, setJobs] = useState(initialData);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [newJob, setNewJob] = useState({ title: '', company: '', location: '', status: 'Active', date: '', applications: '' });
  const [jobToDelete, setJobToDelete] = useState(null);

  const toggleStatus = index => {
    const updatedJobs = jobs.map((job, idx) =>
      idx === index ? { ...job, status: job.status === 'Active' ? 'Inactive' : 'Active' } : job
    );
    setJobs(updatedJobs);
    setToast({ message: 'Job status updated.', visible: true });
    setTimeout(() => setToast({ ...toast, visible: false }), 3000);
  };

  const openModal = () => {
    setModalVisible(true);
    setNewJob({ title: '', company: '', location: '', status: 'Active', date: '', applications: '' });
  };

  const closeModal = () => setModalVisible(false);

  const handleInputChange = e => setNewJob({ ...newJob, [e.target.name]: e.target.value });

  const confirmAddJob = () => {
    setJobs([...jobs, newJob]);
    closeModal();
    setToast({ message: 'Job added successfully!', visible: true });
    setTimeout(() => setToast({ ...toast, visible: false }), 3000);
  };

  const handleDelete = index => {
    setJobToDelete(jobs[index]);
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    setJobs(jobs.filter(job => job !== jobToDelete));
    setDeleteModalVisible(false);
    setToast({ message: 'Job deleted successfully!', visible: true });
    setTimeout(() => setToast({ ...toast, visible: false }), 3000);
  };

  return (
    <div className="p-6 bg-black text-gray-100">
      {toast.visible && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white py-2 px-4 rounded shadow-lg">
          {toast.message}
        </div>
      )}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Job Listings</h2>
        <button className="bg-gray-700 text-white p-2 rounded-full" onClick={openModal}>
          <FiPlus />
        </button>
      </div>
      <div className="mb-4">
        <input type="text" placeholder="Search..." className="w-full p-2 mb-2 rounded bg-gray-800 text-gray-200" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-gray-800 border border-gray-700">
          <thead>
            <tr>
              <th className="p-2 border-b border-gray-700">Job Title</th>
              <th className="p-2 border-b border-gray-700">Company</th>
              <th className="p-2 border-b border-gray-700">Location</th>
              <th className="p-2 border-b border-gray-700">Status</th>
              <th className="p-2 border-b border-gray-700">Posted Date</th>
              <th className="p-2 border-b border-gray-700">Applications</th>
              <th className="p-2 border-b border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td className="p-2 border-b border-gray-700">{job.title}</td>
                <td className="p-2 border-b border-gray-700">{job.company}</td>
                <td className="p-2 border-b border-gray-700">{job.location}</td>
                <td className="p-2 border-b border-gray-700">{job.status}</td>
                <td className="p-2 border-b border-gray-700">{job.date}</td>
                <td className="p-2 border-b border-gray-700">{job.applications}</td>
                <td className="p-2 border-b border-gray-700 flex gap-2">
                  {job.status === 'Closed' ? (
                    <button className="bg-gray-600 text-white p-2 rounded-full" disabled>
                      <FiX />
                    </button>
                  ) : (
                    <button className={`p-2 rounded-full ${job.status === 'Active' ? 'bg-green-600' : 'bg-red-600'} text-white`} onClick={() => toggleStatus(index)}>
                      <FiCheck />
                    </button>
                  )}
                  <button className="bg-red-600 text-white p-2 rounded-full" onClick={() => handleDelete(index)}>
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Add New Job</h3>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Job Title</label>
              <input type="text" name="title" value={newJob.title} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Company</label>
              <input type="text" name="company" value={newJob.company} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Location</label>
              <input type="text" name="location" value={newJob.location} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Status</label>
              <select name="status" value={newJob.status} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Posted Date</label>
              <input type="date" name="date" value={newJob.date} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Applications</label>
              <input type="number" name="applications" value={newJob.applications} onChange={handleInputChange} className="w-full p-2 rounded bg-gray-800 text-gray-200" />
            </div>
            <div className="flex justify-end">
              <button className="bg-red-600 text-white p-2 rounded mr-2" onClick={closeModal}>
                <FiX />
              </button>
              <button className="bg-green-600 text-white p-2 rounded" onClick={confirmAddJob}>
                <FiCheck />
              </button>
            </div>
          </div>
        </div>
      )}
      {deleteModalVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
            <p>Are you sure you want to delete the job "{jobToDelete.title}" at "{jobToDelete.company}"?</p>
            <div className="flex justify-end mt-4">
              <button className="bg-gray-600 text-white p-2 rounded mr-2" onClick={() => setDeleteModalVisible(false)}>
                <FiX />
              </button>
              <button className="bg-red-600 text-white p-2 rounded" onClick={confirmDelete}>
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
