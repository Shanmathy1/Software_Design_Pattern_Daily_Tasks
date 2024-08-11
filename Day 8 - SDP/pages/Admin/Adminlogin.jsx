import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adminlogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mock API call
      if (email === 'admin@example.com' && password === 'admin123') {
        toast.success('Logged in successfully!', {
          position: "bottom-right",
          autoClose: 2000,
          className: 'toast-custom',
          bodyClassName: 'toast-custom-body',
          progressClassName: 'toast-custom-progress',
        });

        setTimeout(() => {
          navigate('/admindash');
        }, 2000);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Invalid email or password', {
        position: "bottom-right",
        autoClose: 2000,
        className: 'toast-custom',
        bodyClassName: 'toast-custom-body',
        progressClassName: 'toast-custom-progress',
      });
    }
  };

  const styles = {
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    main: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(0, 0, 0, 0.7)',
      zIndex: 2,
      display: 'flex',
      width: '90%',
      maxWidth: '950px',
      height: 'auto',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    },
    imageContainer: {
      overflow: 'hidden',
      height: '100%',
      width: '300px',
      borderRadius: '13px',
      marginRight: '20px',
      position: 'relative',
    },
    slideImages: {
      width: '100%',
      height: '100%',
      display: 'flex',
      animation: 'slide_animation 30s linear infinite',
    },
    slide: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
    form: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
    },
    heading: {
      textAlign: 'center',
      margin: '15px auto',
      color: '#fff',
    },
    inputGroup: {
      position: 'relative',
    },
    icon: {
      position: 'absolute',
      top: '12px',
      left: '12px',
    },
    togglePassword: {
      position: 'absolute',
      right: '12px',
      top: '12px',
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
    remember: {
      margin: '10px 0 20px',
    },
    button: {
      display: 'block',
      width: '100%',
      borderRadius: '50px',
      height: '50px',
      margin: '20px 0',
      border: 'none',
      color: '#fff',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #536976, #bbd2c5)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.5s',
    },
    buttonAfter: {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '0',
      bottom: 0,
      left: 0,
      zIndex: -1,
      borderRadius: '5px',
      background: 'linear-gradient(to right, #f27121, #e94057, #8a2387)',
      transition: 'height 0.5s ease',
    },
    buttonHover: {
      height: '100%',
    },
    buttonActive: {
      top: '2px',
    },
    divider: {
      margin: '20px auto',
      width: '90%',
    },
    creator: {
      textAlign: 'center',
      display: 'block',
      color: '#fff',
    },
  };

  return (
    <div style={styles.background}>
      <video
        style={styles.video}
        src="/files/video-bg.mp4"
        autoPlay
        muted
        loop
      ></video>
      <main style={styles.main}>
        <div style={styles.imageContainer}>
          <div style={styles.slideImages}>
            {/* Dynamic image slider */}
            {[
              'https://i.pinimg.com/564x/54/bb/96/54bb962a32c1093f999cb45d89c9dc0e.jpg',
              'https://i.pinimg.com/564x/14/13/38/1413387c9de2609825b61f0719f024d4.jpg',
              'https://i.pinimg.com/564x/6a/46/40/6a4640fd2df70f1e76f388175ffb0349.jpg'
            ].map((src, index) => (
              <img key={index} style={styles.slide} src={src} alt="Slide" />
            ))}
          </div>
        </div>
        <form style={styles.form} autoComplete="off" onSubmit={handleSubmit}>
          <h2 style={styles.heading}>Admin Log-In</h2>
          <div style={styles.inputGroup}>
            <i className="far fa-envelope fa-lg" style={styles.icon}></i>
            <input
              type="email"
              name="email"
              id="admin-login-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', border: 'none', borderRadius: '10px', height: '50px', margin: '10px 0', paddingLeft: '20px', color: '#fff', backgroundColor: 'rgba(150, 150, 150, 0.5)' }}
            />
          </div>
          <div style={styles.inputGroup}>
            <i className="fas fa-unlock-alt fa-lg" style={styles.icon}></i>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="admin-login-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', border: 'none', borderRadius: '10px', height: '50px', margin: '10px 0', paddingLeft: '20px', color: '#fff', backgroundColor: 'rgba(150, 150, 150, 0.5)' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.togglePassword}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div style={styles.remember}>
            <input type="checkbox" name="remember" id="admin-login-remember" />
            <label htmlFor="admin-login-remember">Remember me</label>
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #f27121, #e94057, #8a2387)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #536976, #bbd2c5)'}
          >
            Log In
          </button>
          <hr style={styles.divider} />
          <center>
            <p style={styles.creator}>Made with <span>❤</span> by Shanmathy</p>
          </center>
        </form>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
    </div>
  );
};

export default Adminlogin;
