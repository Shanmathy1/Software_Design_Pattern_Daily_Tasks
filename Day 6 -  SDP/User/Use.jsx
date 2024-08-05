import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007BFF; /* Blue color */
  padding: 10px 20px;
  color: #fff;
  transition: box-shadow 0.3s;

  &.header-shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    padding: 5px 10px;

    &:hover,
    &.active {
      background-color: #fff;
      color: #007BFF; /* Blue color */
      border-radius: 4px;
    }
  }
`;

const UserSettings = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const DarkLight = styled.div`
  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  overflow-y: auto;

  &.detail-page {
    overflow-y: hidden;
  }
`;

const SearchMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 0 10px;
  }

  .search-button {
    padding: 10px 20px;
    border: none;
    background-color: #007BFF; /* Blue color */
    color: #fff;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3; /* Darker blue */
    }
  }
`;

const MainContainer = styled.div`
  display: flex;
`;

const SearchType = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const Alert = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;

  .alert-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .alert-subtitle {
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
  }

  .search-buttons {
    padding: 10px 20px;
    border: none;
    background-color: #007BFF; /* Blue color */
    color: #fff;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3; /* Darker blue */
    }
  }
`;

const JobWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;

  .job-time-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .type-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .job-style {
      margin-right: 10px;
    }
  }
`;

const SearchedJobs = styled.div`
  flex: 3;
`;

const SearchedBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .searched-show {
    font-size: 16px;
  }

  .searched-sort {
    display: flex;
    align-items: center;

    .menu-icon {
      width: 16px;
      height: 16px;
      margin-left: 10px;
    }
  }
`;

const JobCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const JobCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  flex: 1 1 calc(33.333% - 20px);

  .job-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .job-card-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .job-card-subtitle {
    font-size: 16px;
    margin-bottom: 10px;
    color: #333;
  }

  .job-detail-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;

    .search-buttons {
      padding: 5px 10px;
      border: none;
      background-color: #007BFF; /* Blue color */
      color: #fff;
      border-radius: 4px;

      &:hover {
        background-color: #0056b3; /* Darker blue */
      }
    }

    .detail-button {
      font-size: 14px;
    }
  }

  .job-card-description {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .time {
      font-size: 14px;
      color: #888;
    }

    .job-link {
      color: #007BFF; /* Blue color */
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const JobComponent = () => {
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const jobCardsRef = useRef([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.scrollTop > 30) {
        headerRef.current.classList.add('header-shadow');
      } else {
        headerRef.current.classList.remove('header-shadow');
      }
    };

    const handleToggle = () => {
      document.body.classList.toggle('dark-mode');
      setIsDarkMode(!isDarkMode);
    };

    const handleJobCardClick = (jobCard) => {
      const number = Math.floor(Math.random() * 10);
      const url = `https://unsplash.it/640/425?image=${number}`;
      const jobBg = document.querySelector('.job-bg');
      jobBg.src = url;

      const logo = jobCard.querySelector('svg');
      const bg = logo.style.backgroundColor;
      jobBg.style.background = bg;

      const jobDetailTitle = document.querySelector('.job-explain-content .job-card-title');
      jobDetailTitle.textContent = jobCard.querySelector('.job-card-title').textContent;

      const jobLogos = document.querySelector('.job-logos');
      jobLogos.innerHTML = logo.outerHTML;

      wrapperRef.current.classList.add('detail-page');
      wrapperRef.current.scrollTop = 0;
    };

    const handleLogoClick = () => {
      wrapperRef.current.classList.remove('detail-page');
      wrapperRef.current.scrollTop = 0;
    };

    wrapperRef.current.addEventListener('scroll', handleScroll);
    const toggleButton = document.querySelector('.dark-light');
    toggleButton.addEventListener('click', handleToggle);

    jobCardsRef.current.forEach((jobCard) => {
      jobCard.addEventListener('click', () => handleJobCardClick(jobCard));
    });

    const logo = document.querySelector('.logo');
    logo.addEventListener('click', handleLogoClick);

    return () => {
      wrapperRef.current.removeEventListener('scroll', handleScroll);
      toggleButton.removeEventListener('click', handleToggle);
      jobCardsRef.current.forEach((jobCard) => {
        jobCard.removeEventListener('click', () => handleJobCardClick(jobCard));
      });
      logo.removeEventListener('click', handleLogoClick);
    };
  }, [isDarkMode]);

  return (
    <Container>
      <Header ref={headerRef}>
        <Logo className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 14.93V11H9v5.93c-3.9-1.4-6-5.48-4.6-9.38 1.4-3.9 5.48-6 9.38-4.6 3.9 1.4 6 5.48 4.6 9.38-1.2 3.5-4.38 5.5-7.98 5.1z" /></svg>
          JobFinder
        </Logo>
        <HeaderMenu>
          <a href="#home" className="active">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#contact">Contact</a>
        </HeaderMenu>
        <UserSettings>
          <UserProfile src="user.jpg" alt="User" />
          <DarkLight className="dark-light">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0111.21 3c0 .54-.45 1-1 1s-1-.45-1-1a9 9 0 110 18c.54 0 1-.45 1-1s-.45-1-1-1A9 9 0 0121 12.79z" /></svg>
          </DarkLight>
        </UserSettings>
      </Header>
      <Wrapper className="wrapper" ref={wrapperRef}>
        <SearchMenu>
          <div className="search-location">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.14 2 5 5.14 5 9c0 3.35 2.7 6.69 7 11.54 4.3-4.85 7-8.19 7-11.54 0-3.86-3.14-7-7-7zm0 9.5c-1.37 0-2.5-1.13-2.5-2.5S10.63 6.5 12 6.5s2.5 1.13 2.5 2.5-1.13 2.5-2.5 2.5z" /></svg>
            <input type="text" placeholder="Location" />
          </div>
          <div className="search-job">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6c0-.55.45-1 1-1h4.54l1.94-2.82C10.83 1.4 11.31 1 11.83 1h6.34c.52 0 1 .4 1.35.18l3.99 2.36c.54.32.82.96.68 1.61L20.67 11H21c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1h2.67L7.66 3.54C7.51 3.39 7.62 3 7.87 3H14.5c.25 0 .33.39.68.54L17.58 7H13V5H8v2H4v-.01z" /></svg>
            <input type="text" placeholder="Job" />
          </div>
          <button className="search-button">Search</button>
        </SearchMenu>
        <MainContainer>
          <SearchType>
            {/* Search Type Content */}
          </SearchType>
          <SearchedJobs>
            <SearchedBar>
              <div className="searched-show">Showing 10 jobs</div>
              <div className="searched-sort">
                Sort By
                <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 17h8v2H8v-2zm4-8h-4v2h4V9zm4 8h-8v2h8v-2zM4 8h16V6H4v2zm0 6h16v-2H4v2z" /></svg>
              </div>
            </SearchedBar>
            <JobCards>
              {[...Array(6)].map((_, index) => (
                <JobCard className="job-card" key={index}>
                  <div className="job-card-header">
                    <div className="job-card-title">Job Title {index + 1}</div>
                    <svg className="job-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6h4v4h-4zM10 14h4v4h-4z" /></svg>
                  </div>
                  <div className="job-card-subtitle">Job Subtitle {index + 1}</div>
                  <div className="job-detail-buttons">
                    <button className="search-buttons">Apply</button>
                    <button className="search-buttons">Details</button>
                  </div>
                  <div className="job-card-description">
                    <span className="time">2 days ago</span>
                    <a href="#" className="job-link">More Info</a>
                  </div>
                </JobCard>
              ))}
            </JobCards>
          </SearchedJobs>
        </MainContainer>
      </Wrapper>
    </Container>
  );
};

export default JobComponent;

