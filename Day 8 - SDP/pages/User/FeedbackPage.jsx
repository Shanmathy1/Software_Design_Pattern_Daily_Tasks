import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit } from 'lucide-react'; // Import the icon

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({ name: '', email: '', jobTitle: '', location: '', jobExperience: '', message: '' });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleFeedbackChange = (event) => {
    const { name, value } = event.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    setFeedbackSubmitted(true);
    setFeedback({ name: '', email: '', jobTitle: '', location: '', jobExperience: '', message: '' });
  };

  return (
    <div className='flex-1 p-6'>
      <button
        onClick={() => navigate('/user/dashboard')}
        className='text-blue-500 hover:underline mb-4'
      >
        Back to Dashboard
      </button>
      <div className='mt-6 p-4 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto'>
        <div className='flex items-center mb-4'>
          <Edit className='text-gray-100 mr-2' size={24} />
          <h2 className='text-xl font-bold text-gray-100'>Feedback Form</h2>
        </div>
        {feedbackSubmitted ? (
          <div className='p-2 mb-4 text-sm text-green-700 bg-green-100 rounded'>
            Thank you for your feedback!
          </div>
        ) : (
          <form onSubmit={handleFeedbackSubmit} className='space-y-4'>
            <div>
              <label className='block text-gray-300 mb-1 text-sm'>Name</label>
              <input
                type='text'
                name='name'
                value={feedback.name}
                onChange={handleFeedbackChange}
                className='p-1 w-full bg-gray-700 text-gray-100 rounded'
              />
            </div>
            <div>
              <label className='block text-gray-300 mb-1 text-sm'>Email</label>
              <input
                type='email'
                name='email'
                value={feedback.email}
                onChange={handleFeedbackChange}
                className='p-1 w-full bg-gray-700 text-gray-100 rounded'
              />
            </div>
            <div>
              <label className='block text-gray-300 mb-1 text-sm'>Job Title</label>
              <input
                type='text'
                name='jobTitle'
                value={feedback.jobTitle}
                onChange={handleFeedbackChange}
                className='p-1 w-full bg-gray-700 text-gray-100 rounded'
              />
            </div>
            <div>
              <label className='block text-gray-300 mb-1 text-sm'>Location</label>
              <input
                type='text'
                name='location'
                value={feedback.location}
                onChange={handleFeedbackChange}
                className='p-1 w-full bg-gray-700 text-gray-100 rounded'
              />
            </div>
            <div>
              <label className='block text-gray-300 mb-1 text-sm'>Job Experience (years)</label>
              <input
                type='text'
                name='jobExperience'
                value={feedback.jobExperience}
                onChange={handleFeedbackChange}
                className='p-1 w-full bg-gray-700 text-gray-100 rounded'
              />
            </div>
            <div>
              <label className='block text-gray-300 mb-1 text-sm'>Feedback</label>
              <textarea
                name='message'
                value={feedback.message}
                onChange={handleFeedbackChange}
                className='p-1 w-full bg-gray-700 text-gray-100 rounded'
              ></textarea>
            </div>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded text-sm'
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackPage;
