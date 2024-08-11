import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

const Data = [
  {
    id: 1,
    image: 'https://i1.sndcdn.com/avatars-000006477986-6bimqs-t240x240.jpg',
    title: 'App Developer',
    time: '12H',
    location: 'Canada',
    desc: 'Create and optimize innovative applications for Apple devices, ensuring exceptional performance and user experience.',
    company: 'Apple Inc.',
  },
  {
    id: 2,
    image: 'https://media.bizj.us/view/img/7581032/microsoft-campus-logo-02-rgb*1200xx1348-1351-283-365.jpg',
    title: 'Web Developer',
    time: '2d',
    location: 'America',
    desc: 'Build and optimize high-performance web applications to drive user engagement and innovation at Microsoft.',
    company: 'Microsoft',
  },
  {
    id: 3,
    image: 'https://mercans.com/wp-content/uploads/2023/03/frame-1482.webp',
    title: 'UI Designer',
    time: 'Now',
    location: 'Australia',
    desc: 'Work closely with development teams to deliver cutting-edge solutions and enhance user interactions..',
    company: 'ORACLE',
  },
  {
    id: 4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg',
    title: 'Software Engineer',
    time: '5d',
    location: 'London',
    desc: 'Design and develop cutting-edge software solutions to tackle complex problems and enhance IBMs technology offerings.',
    company: 'IBM',
  },
  {
    id: 5,
    image: 'https://cdn.icon-icons.com/icons2/2845/PNG/512/adobe_logo_icon_181321.png',
    title: 'Data Analyst',
    time: '5H',
    location: 'France',
    desc: 'Leverage cutting-edge tools at Adobe to transform complex data into actionable insights, fueling creative and strategic decisions.',
    company: 'Adobe',
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUG8IVZL_6ZabuwHTQA2Og7Sk0_lXbYq5HsQ&s',
    title: 'Product Designer',
    time: '14H',
    location: 'Germany',
    desc: 'Shape the future of technology by designing intuitive and impactful user experiences for Dell’s product lineup.',
    company: 'DELL',
  },
  {
    id: 7,
    image: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
    title: 'UI/UX Designer',
    time: 'Now',
    location: 'Turkey',
    desc: 'Create innovative UI/UX designs that simplify user interactions and enhance the overall experience across Googles digital platforms.',
    company: 'Google',
  },
  {
    id: 8,
    image: 'data:image/png;base64,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',
    title: 'Java Developer',
    time: '2H',
    location: 'Moscow',
    desc: 'Develop scalable Java applications for HP’s tech solutions, ensuring high performance and innovation.',
    company: 'hp',
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-slate-500'>{title}</h1>
                <span className='flex items-center text-[#0d0000] gap-1'>
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className='text-[#0a0000]'>{location}</h6>
              {/* <p className='text-[13px] text-[#0b0000] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'> */}
              <p className='text-[13px] text-[#0b0000] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-slate-500'>
                {desc}
              </p>

              <div className='company flex items-center gap-2'>
                <img src={image} alt="Company Logo" className='w-[15%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-black'>{company}</span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-slate-500 group-hover/item:text-textColor group-hover:text-textColor'>
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
