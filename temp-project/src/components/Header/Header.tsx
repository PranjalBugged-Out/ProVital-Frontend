import React, { useState, useRef } from 'react';
import './Header.scss';
// Import images - uncomment these lines and ensure images are in src/assets
import sweetLifeImage from '../../assets/Rectangle 113.jpg';
import yogaPoseImage from '../../assets/Rectangle 111.jpg';
import yogaImage1 from '../../assets/Rectangle 110.jpg';
import womanBlueImage from '../../assets/Rectangle 112.jpg';
import newImage1 from '../../assets/Rectangle 3468484.jpg';
import newImage2 from '../../assets/Rectangle 3468485.jpg';
import newImage3 from '../../assets/Rectangle 3468482.jpg';
import nutritionImage from '../../assets/nutrition.jpg';
import physicalActivityImage from '../../assets/physical_activity.jpg';
import restorativeSleepImage from '../../assets/restorative_sleep.jpg';
import stressManagementImage from '../../assets/stress_management.jpg';
import socialConnectionImage from '../../assets/social_connection.jpg';
import substanceAbuseImage from '../../assets/substance_abuse.jpg';
import doctorsData from '../../doctorsData.ts'; // Corrected import path
import LoginModal from '../Auth/LoginModal'; // Import LoginModal
import SignupModal from '../Auth/SignupModal'; // Import SignupModal

interface Doctor {
  id: number;
  name: string;
  number: string;
  address: string;
  specialization: string;
  city: string;
  insurance: string;
}

const Header: React.FC = () => {
  const [selectedCondition, setSelectedCondition] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');
  const [selectedInsurance, setSelectedInsurance] = React.useState('');
  const [filteredDoctors, setFilteredDoctors] = React.useState<Doctor[]>([]); // State to store filtered doctors
  const [hasSearched, setHasSearched] = React.useState(false); // New state to track if a search has been performed

  // State for login/signup modals
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activePillarIndex, setActivePillarIndex] = useState<number | null>(null); // State to manage active pillar card, initially null to show all

  // Ref for the pill navigation scroll
  const pillNavRef = useRef<HTMLDivElement>(null);

  const handleFindNowClick = () => {
    console.log("Find now button clicked");
    console.log("Selected values (from state):", { condition: selectedCondition, city: selectedCity, insurance: selectedInsurance });
    const filtered = doctorsData.filter((doctor) => (
      (selectedCondition === '' || doctor.specialization === selectedCondition) &&
      (selectedCity === '' || doctor.city === selectedCity) &&
      (selectedInsurance === '' || doctor.insurance === selectedInsurance)
    ));
    console.log("Filtered doctors:", filtered);
    setFilteredDoctors(filtered);
    setHasSearched(true); // Set hasSearched to true after a search
  };

  return (
    <header className="header">
      {/* Main Navigation Group */}
      <div className="header__nav-group">
        {/* White background rectangle */}
        <div className="header__nav-background"></div>
        
        {/* Navigation Container */}
        <div className="header__nav-container">
          {/* Logo Group */}
          <a 
            href="/" 
            className={`header__logo-link ${isAnimating ? 'animate-pulse' : ''}`}
            onClick={(e) => {
              e.preventDefault(); // Prevent default refresh initially
              setIsAnimating(true);
              setTimeout(() => {
                window.location.reload(); // Refresh after animation
              }, 500); // Duration of the animation in ms
            }}
          >
            <div className="header__logo-group">
              <div className="header__logo-icon">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.0741 16.1534C26.0744 15.2697 25.8306 14.4031 25.3696 13.6491C24.9087 12.895 24.2485 12.2829 23.4618 11.8801C22.6752 11.4773 21.7925 11.2995 20.9112 11.3662C20.0299 11.433 19.1842 11.7417 18.4672 12.2585C17.7502 12.7752 17.1897 13.4798 16.8477 14.2946C16.5056 15.1095 16.3952 16.003 16.5286 16.8766C16.662 17.7502 17.034 18.57 17.6037 19.2457C18.1733 19.9214 18.9185 20.4267 19.757 20.7059C19.5942 21.4557 19.1797 22.1271 18.5824 22.6087C17.9851 23.0903 17.2409 23.3529 16.4736 23.353H13.5935C12.7023 23.353 11.8476 22.999 11.2175 22.3689C10.5873 21.7388 10.2333 20.8843 10.2333 19.9932V15.5415C14.0411 14.8479 16.9537 11.4509 16.9537 7.4144V2.7143C16.9537 2.39915 16.8916 2.08708 16.771 1.79592C16.6503 1.50476 16.4735 1.2402 16.2507 1.01735C16.0278 0.794505 15.7632 0.617734 15.472 0.497131C15.1808 0.376527 14.8687 0.314453 14.5535 0.314453H12.6334C12.2515 0.314453 11.8852 0.466157 11.6151 0.736192C11.3451 1.00623 11.1934 1.37247 11.1934 1.75436C11.1934 2.13625 11.3451 2.50249 11.6151 2.77253C11.8852 3.04256 12.2515 3.19427 12.6334 3.19427H14.0735V7.4144C14.0735 10.3422 11.737 12.7565 8.86404 12.7937C8.16469 12.803 7.47044 12.6734 6.82161 12.4123C6.17279 12.1511 5.58231 11.7637 5.08447 11.2725C4.58662 10.7813 4.19134 10.1961 3.92156 9.55092C3.65179 8.9057 3.5129 8.21332 3.51296 7.51399V3.19427H4.95304C5.33497 3.19427 5.70126 3.04256 5.97132 2.77253C6.24139 2.50249 6.39311 2.13625 6.39311 1.75436C6.39311 1.37247 6.24139 1.00623 5.97132 0.736192C5.70126 0.466157 5.33497 0.314453 4.95304 0.314453H3.03294C2.39638 0.314453 1.7859 0.567293 1.33579 1.01735C0.885682 1.46741 0.632813 2.07782 0.632812 2.7143V7.51399C0.632891 9.42823 1.30607 11.2815 2.53458 12.7496C3.7631 14.2178 5.46875 15.2073 7.35316 15.5451V19.9932C7.35506 21.6475 8.01314 23.2334 9.18301 24.4032C10.3529 25.5729 11.939 26.2309 13.5935 26.2328H16.4736C17.9975 26.231 19.4682 25.6723 20.6089 24.6619C21.7496 23.6515 22.4816 22.2591 22.6671 20.7467C23.6519 20.4465 24.5143 19.8382 25.1276 19.0114C25.7409 18.1846 26.0727 17.1828 26.0741 16.1534ZM21.2739 18.0733C20.8941 18.0733 20.5229 17.9607 20.2071 17.7498C19.8914 17.5388 19.6453 17.239 19.4999 16.8881C19.3546 16.5373 19.3166 16.1513 19.3907 15.7789C19.4648 15.4065 19.6476 15.0644 19.9162 14.7959C20.1847 14.5274 20.5268 14.3445 20.8993 14.2705C21.2717 14.1964 21.6578 14.2344 22.0087 14.3797C22.3595 14.525 22.6594 14.7711 22.8704 15.0868C23.0814 15.4025 23.194 15.7737 23.194 16.1534C23.194 16.6626 22.9917 17.1509 22.6316 17.511C22.2715 17.871 21.7831 18.0733 21.2739 18.0733Z" fill="url(#paint0_linear_2_296)"/>
                  <defs>
                    <linearGradient id="paint0_linear_2_296" x1="-1.43429" y1="4.21015" x2="18.7597" y2="26.2328" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D86D6B"/>
                      <stop offset="0.228785" stopColor="#F5854E"/>
                      <stop offset="0.408008" stopColor="#F0C971"/>
                      <stop offset="0.634525" stopColor="#3CC6C1"/>
                      <stop offset="0.790545" stopColor="#419E80"/>
                      <stop offset="1" stopColor="#4188C1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="header__logo-text">ProVital</span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="header__nav-links">
            <a href="#" className="header__nav-link">List your practice</a>
            <div className="header__nav-divider"></div>
            <a href="#" className="header__nav-link">For Employers</a>
            <div className="header__nav-divider"></div>
            <a href="#" className="header__nav-link">Courses</a>
            <div className="header__nav-divider"></div>
            <a href="#" className="header__nav-link">Books</a>
            <div className="header__nav-divider"></div>
            <a href="#" className="header__nav-link">Speakers</a>
            <div className="header__nav-divider"></div>
            <a href="#" className="header__nav-link">Doctors</a>
            <div className="header__nav-divider"></div>
            {/* Dropdown for Login/Signup */}
            <div className="header__dropdown-wrapper">
              <a href="#" className="header__nav-link" onClick={() => setIsLoginModalOpen(true)}>Login / Signup <span className="header__dropdown-arrow"></span></a>
              <div className="header__group-1010108332">
                <div className="header__dropdown-row">
                  <span className="header__dropdown-label">Doctor</span>
                  <div className="header__dropdown-links-group">
                    <a href="#" className="header__dropdown-link" onClick={() => {
                      setIsLoginModalOpen(true);
                      // Optional: pre-select user type for login
                    }}>Login</a>
                    <a href="#" className="header__dropdown-link" onClick={() => {
                      setIsSignupModalOpen(true);
                      // Optional: pre-select user type for signup
                    }}>Sign up</a>
                  </div>
                </div>
                <div className="header__dropdown-row">
                  <span className="header__dropdown-label">Patients</span>
                  <div className="header__dropdown-links-group">
                    <a href="#" className="header__dropdown-link" onClick={() => {
                      setIsLoginModalOpen(true);
                      // Optional: pre-select user type for login
                    }}>Login</a>
                    <a href="#" className="header__dropdown-link" onClick={() => {
                      setIsSignupModalOpen(true);
                      // Optional: pre-select user type for signup
                    }}>Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Provider Login Button */}
          <div className="header__provider-login">
            <span>Provider Login</span>
            <div className="header__provider-arrow"></div>
          </div>
        </div>
      </div>

      {/* Group 1010108338 (Dropdown for Login/Signup) */}
      <div className="header__group-1010108338">
        {/* Content for the dropdown will go here */}
      </div>

      {/* Main Heading */}
      <h1 className="header__main-heading">
        Book an appointment with <span className="header__gradient-phrase">lifestyle medicine</span> experts
      </h1>

      {/* Subheading */}
      <p className="header__sub-heading">
        Optimize your lifestyle and reverse chronic diseases.
      </p>

      {/* Group 1010108550 (Placeholder) */}
      <div className="header__group-1010108550"></div>

      {/* Main Search/Input Group (Group 1010106005) */}
      <div className="header__group-1010106005">
        <div className="header__search-input-group">
          <span className="header__search-icon">🔍</span>
          <select className="header__search-select" value={selectedCondition} onChange={(e) => setSelectedCondition(e.target.value)}>
            <option value="">Condition, procedure, speciality...</option>
            <option value="diabetes">Diabetes</option>
            <option value="hypertension">Hypertension</option>
            <option value="obesity">Obesity</option>
            <option value="heart_disease">Heart Disease</option>
            <option value="anxiety">Anxiety</option>
            <option value="depression">Depression</option>
          </select>
        </div>

        <div className="header__search-input-group">
          <span className="header__location-icon">📍</span>
          <select className="header__search-select" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">City, state, or zipcode</option>
            <option value="new_york">New York</option>
            <option value="los_angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
          </select>
        </div>

        <div className="header__search-input-group">
          <span className="header__insurance-icon">🤍</span>
          <select className="header__search-select" value={selectedInsurance} onChange={(e) => setSelectedInsurance(e.target.value)}>
            <option value="">Insurance carrier</option>
            <option value="aetna">Aetna</option>
            <option value="blue_cross">Blue Cross Blue Shield</option>
            <option value="cigna">Cigna</option>
            <option value="unitedhealthcare">UnitedHealthcare</option>
          </select>
        </div>

        <button className="header__find-now-button" /* inline arrow function to log and confirm event fires */ onClick={() => { console.log("Find now button (inline)") ; handleFindNowClick(); }}>
          <span className="header__find-now-icon">🔍</span>
          Find now
        </button>
      </div>

      {filteredDoctors.length > 0 && hasSearched ? (
        <div className="header__doctor-results">
          <h2>Doctors Found:</h2>
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="header__doctor-card">
              <h3>{doctor.name}</h3>
              <p>Specialization: {doctor.specialization}</p>
              <p>City: {doctor.city}</p>
              <p>Insurance: {doctor.insurance}</p>
              <p>Address: {doctor.address}</p>
              <p>Contact: {doctor.number}</p>
            </div>
          ))}
        </div>
      ) : (
        hasSearched && (selectedCondition || selectedCity || selectedInsurance) ? (
          <div className="header__no-results">
            <p>No doctors found matching your criteria.</p>
          </div>
        ) : null
      )}

      {/* Gradient Divider Line */}
      <div className="header__gradient-divider"></div>

      {/* Group 1010105340 (Placeholder) */}
      <div className="header__group-1010105340"></div>

      {/* Group 1010106212 (Placeholder) */}
      <div className="header__group-1010106212"></div>

      {/* Content wrapper for images and text */}
      <div className="header__content-wrapper">
        {/* Container for scrolling columns */}
        <div className="header__container">
          {/* Column 1 - Moving from top to bottom */}
          <div className="header__column header__column--left">
            <div className="header__column-content header__column-content--left">
              {/* First set of images */}
              <div className="header__image-item header__image-item--sweet-life">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${sweetLifeImage})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              <div className="header__image-item header__image-item--yoga-pose">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${yogaPoseImage})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              {/* New image for column 1 */}
              <div className="header__image-item">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${newImage1})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="header__image-item header__image-item--sweet-life">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${sweetLifeImage})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              <div className="header__image-item header__image-item--yoga-pose">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${yogaPoseImage})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              {/* Duplicate new image for column 1 */}
              <div className="header__image-item">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${newImage1})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Moving from bottom to top */}
          <div className="header__column header__column--right">
            <div className="header__column-content header__column-content--right">
              {/* First set of images */}
              <div className="header__image-item header__image-item--yoga-1">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${yogaImage1})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              <div className="header__image-item header__image-item--woman-blue">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${womanBlueImage})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              {/* New image for column 2 */}
              <div className="header__image-item">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${newImage2})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="header__image-item header__image-item--yoga-1">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${yogaImage1})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              <div className="header__image-item header__image-item--woman-blue">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${womanBlueImage})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              {/* Duplicate new image for column 2 */}
              <div className="header__image-item">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${newImage2})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Moving from top to bottom */}
          <div className="header__column header__column--center">
            <div className="header__column-content header__column-content--center">
              {/* First set of images */}
              <div className="header__image-item header__image-item--new-image3">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${newImage3})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="header__image-item header__image-item--new-image3">
                <div className="header__image-wrapper" style={{ backgroundImage: `url(${newImage3})` }}>
                  <div className="header__image-gradient"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group 1010106217 */}
      <div className="header__group-1010106217"></div>

      {/* Group 1010109803 */}
      <div className="header__group-1010109803"></div>

      {/* Group 1010106218 */}
      <div className="header__group-1010106218"></div>

      {/* Vector 16 */}
      <div className="header__vector-16"></div>

      {/* Ellipse 142 */}
      <div className="header__ellipse-142"></div>

      {/* Large content group */}
      <div className="header__large-group">
        <section className="how-it-works">
          <div className="container">
            {/* Title */}
            <p className="section-label">HOW IT WORKS</p>
            <h2 className="section-heading">
              Lifestyle <em>as medicine</em>: The six pillars
            </h2>

            {/* Pill selectors */}
            <div className="pill-nav">
              <div className="pill-nav__arrow pill-nav__arrow--left" onClick={() => {
                if (pillNavRef.current) {
                  pillNavRef.current.scrollBy({ left: -200, behavior: 'smooth' });
                }
              }}>←</div>
              <div className="pill-nav__scroll-content" ref={pillNavRef}>
                <button className={`pill ${activePillarIndex === 0 ? 'selected' : ''}`} onClick={() => setActivePillarIndex(0)}>Nutrition</button>
                <button className={`pill ${activePillarIndex === 1 ? 'selected' : ''}`} onClick={() => setActivePillarIndex(1)}>Physical activity</button>
                <button className={`pill ${activePillarIndex === 2 ? 'selected' : ''}`} onClick={() => setActivePillarIndex(2)}>Restorative sleep</button>
                <button className={`pill ${activePillarIndex === 3 ? 'selected' : ''}`} onClick={() => setActivePillarIndex(3)}>Stress management</button>
                <button className={`pill ${activePillarIndex === 4 ? 'selected' : ''}`} onClick={() => setActivePillarIndex(4)}>Social connection</button>
                <button className={`pill ${activePillarIndex === 5 ? 'selected' : ''}`} onClick={() => setActivePillarIndex(5)}>Substance abuse</button>
              </div>
              <div className="pill-nav__arrow pill-nav__arrow--right" onClick={() => {
                if (pillNavRef.current) {
                  pillNavRef.current.scrollBy({ left: 200, behavior: 'smooth' });
                }
              }}>→</div>
            </div>

            {/* Cards */}
            <div className={`pillar-cards ${activePillarIndex !== null ? 'pillar-cards--single-active' : ''}`}>
              {activePillarIndex === null || activePillarIndex === 0 ? (
                /* Card 1: Nutrition */
                <div className="pillar-card">
                  <span className="pillar-card__step-number">01</span>
                  <div className="pillar-card__image" style={{ backgroundImage: `url('/nutrition.jpg')` }}>
                    {/* Measurement Box for Pillar 1 */}
                    <div className="pillar-card__measurement-box pillar-card__measurement-box--01">
                      <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 6.78285C24 14.4409 12.8796 20.6396 12.4061 20.8956C12.2813 20.9641 12.1417 21 12 21C11.8583 21 11.7187 20.9641 11.5939 20.8956C11.235 20.6986 4.785 17.1004 1.66393 12.0461C1.62367 11.9799 1.60145 11.9039 1.59958 11.826C1.59771 11.7481 1.61624 11.6711 1.65327 11.603C1.6903 11.5348 1.74447 11.478 1.8102 11.4384C1.87593 11.3988 1.95082 11.3778 2.02714 11.3777H6C6.14115 11.3778 6.28014 11.3423 6.40462 11.2743C6.52911 11.2064 6.63523 11.1081 6.71357 10.9882L7.71429 9.4566L10.4293 13.6138C10.5333 13.7731 10.6856 13.8932 10.8629 13.9557C11.0402 14.0181 11.2326 14.0195 11.4107 13.9595C11.5996 13.8942 11.7613 13.7654 11.8693 13.5941L13.3157 11.3777H15.4286C15.5461 11.3779 15.6624 11.3535 15.7703 11.306C15.8781 11.2584 15.9753 11.1887 16.0557 11.1012C16.136 11.0137 16.1979 10.9102 16.2375 10.7973C16.2771 10.6843 16.2935 10.5642 16.2857 10.4445C16.2665 10.2195 16.1648 10.0103 16.0008 9.85873C15.8369 9.70717 15.6229 9.62449 15.4018 9.62727H12.8571C12.716 9.62718 12.577 9.66268 12.4525 9.73062C12.328 9.79856 12.2219 9.89684 12.1436 10.0167L11.1429 11.5483L8.42786 7.39112C8.32377 7.23158 8.17126 7.11135 7.99377 7.04889C7.81627 6.98644 7.6236 6.98522 7.44536 7.04541C7.2569 7.11111 7.09569 7.23987 6.98786 7.41081L5.54143 9.62727H0.806786C0.715192 9.62753 0.625926 9.59782 0.552076 9.54249C0.478226 9.48717 0.423678 9.40914 0.396429 9.31985C0.137911 8.49988 0.00421077 7.64425 0 6.78285C0.00198508 4.98455 0.702493 3.26048 1.94784 1.98889C3.19319 0.717297 4.88167 0.00202691 6.64286 0C8.85536 0 10.7925 0.971479 12 2.61358C13.2075 0.971479 15.1446 0 17.3571 0C19.1183 0.00202691 20.8068 0.717297 22.0522 1.98889C23.2975 3.26048 23.998 4.98455 24 6.78285Z" fill="url(#paint0_linear_2_505)"/>
                        <defs>
                          <linearGradient id="paint0_linear_2_505" x1="-2.52527e-07" y1="17.3793" x2="26.6728" y2="-3.43435" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4683D0"/>
                            <stop offset="1" stopColor="#7CD0A2"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span>121/80</span> <span className="pillar-card__measurement-unit">mmHg</span>
                    </div>
                  </div>
                  <div className="pillar-card__content">
                    <h3 className="pillar-card__title">Nutrition</h3>
                    <p className="pillar-card__description">
                      Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.
                    </p>
                  </div>
                </div>
              ) : null}

              {activePillarIndex === null || activePillarIndex === 1 ? (
                /* Card 2: Physical activity */
                <div className="pillar-card">
                  <span className="pillar-card__step-number">02</span>
                  <div className="pillar-card__image" style={{ backgroundImage: `url(${physicalActivityImage})` }}>
                    {/* Measurement Box for Pillar 2 */}
                    <div className="pillar-card__measurement-box pillar-card__measurement-box--02">
                      <span className="pillar-card__gradient-vector-icon pillar-card__gradient-vector-icon--02">🧡</span>
                      <span>32</span> <span className="pillar-card__measurement-unit">minutes</span>
                    </div>
                  </div>
                  <div className="pillar-card__content">
                    <h3 className="pillar-card__title">Physical activity</h3>
                    <p className="pillar-card__description">
                      Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.
                    </p>
                  </div>
                </div>
              ) : null}

              {activePillarIndex === null || activePillarIndex === 2 ? (
                /* Card 3: Restorative sleep */
                <div className="pillar-card">
                  <span className="pillar-card__step-number">03</span>
                  <div className="pillar-card__image" style={{ backgroundImage: `url(${restorativeSleepImage})` }}>
                    {/* Measurement Box for Pillar 3 */}
                    <div className="pillar-card__measurement-box pillar-card__measurement-box--03">
                      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2_570" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                          <path d="M7.97897 2C7.66232 2.9832 7.50153 4.00992 7.50246 5.04286C7.50246 10.5129 11.9369 14.9473 17.4069 14.9473C18.7569 14.9489 20.0929 14.6736 21.3323 14.1384C20.0486 18.1206 16.313 21 11.9044 21C6.43443 21 2 16.5656 2 11.0956C2 7.0199 4.46125 3.51978 7.97897 2Z" fill="white" stroke="white" strokeWidth="2.20098" strokeLinejoin="round"/>
                          <path d="M16.119 3.39258H21.2583L15.7559 7.79455H21.2583" stroke="white" strokeWidth="2.20098" strokeLinecap="round" strokeLinejoin="round"/>
                        </mask>
                        <g mask="url(#mask0_2_570)">
                          <path d="M-1.30176 -2.11035H25.1101V24.3015H-1.30176V-2.11035Z" fill="url(#paint0_linear_2_570)"/>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_2_570" x1="11.9041" y1="-2.11035" x2="6" y2="31" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#84DA9B"/>
                            <stop offset="1" stopColor="#ECCC68"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span>8</span> <span className="pillar-card__measurement-unit">hours</span>
                    </div>
                  </div>
                  <div className="pillar-card__content">
                    <h3 className="pillar-card__title">Restorative sleep</h3>
                    <p className="pillar-card__description">
                      Consistent, quality sleep is foundational to optimal brain function and physical health.
                    </p>
                  </div>
                </div>
              ) : null}

              {activePillarIndex === null || activePillarIndex === 3 ? (
                /* Card 4: Stress management */
                <div className="pillar-card">
                  <span className="pillar-card__step-number">04</span>
                  <div className="pillar-card__image" style={{ backgroundImage: `url(${stressManagementImage})` }}>
                    {/* Measurement Box for Pillar 4 */}
                    <div className="pillar-card__measurement-box pillar-card__measurement-box--04">
                      <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 23L10.6875 21.3455C4.25 15.4921 0 11.6191 0 6.89373C0 3.02071 3.025 0 6.875 0C9.05 0 11.1375 1.01526 12.5 2.60708C13.8625 1.01526 15.95 0 18.125 0C21.975 0 25 3.02071 25 6.89373C25 11.6191 20.75 15.4921 14.3125 21.3455L12.5 23Z" fill="url(#paint0_linear_2_540)"/>
                        <defs>
                          <linearGradient id="paint0_linear_2_540" x1="-2.63049e-07" y1="19.0345" x2="28.8253" y2="-3.43435" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4683D0"/>
                            <stop offset="1" stopColor="#7CD0A2"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <span>30</span> <span className="pillar-card__measurement-unit">min</span>
                    </div>
                  </div>
                  <div className="pillar-card__content">
                    <h3 className="pillar-card__title">Stress management</h3>
                    <p className="pillar-card__description">
                      Effective stress management techniques are crucial for mental well-being and overall health.
                    </p>
                  </div>
                </div>
              ) : null}

              {activePillarIndex === null || activePillarIndex === 4 ? (
                /* Card 5: Social connection */
                <div className="pillar-card">
                  <span className="pillar-card__step-number">05</span>
                  <div className="pillar-card__image" style={{ backgroundImage: `url(${socialConnectionImage})` }}>
                    {/* Measurement Box for Pillar 5 */}
                    <div className="pillar-card__measurement-box pillar-card__measurement-box--05">
                      <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 23L10.6875 21.3455C4.25 15.4921 0 11.6191 0 6.89373C0 3.02071 3.025 0 6.875 0C9.05 0 11.1375 1.01526 12.5 2.60708C13.8625 1.01526 15.95 0 18.125 0C21.975 0 25 3.02071 25 6.89373C25 11.6191 20.75 15.4921 14.3125 21.3455L12.5 23Z" fill="url(#paint0_linear_2_553)"/>
                        <defs>
                          <linearGradient id="paint0_linear_2_553" x1="6.67858e-07" y1="22" x2="22" y2="1.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F0C374"/>
                            <stop offset="1" stopColor="#E66969"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="pillar-card__text-content">
                        <span className="pillar-card__text--bold">Feeling</span> <span className="pillar-card__text--light">better</span>
                      </div>
                    </div>
                  </div>
                  <div className="pillar-card__content">
                    <h3 className="pillar-card__title">Social connection</h3>
                    <p className="pillar-card__description">
                      Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.
                    </p>
                  </div>
                </div>
              ) : null}

              {activePillarIndex === null || activePillarIndex === 5 ? (
                /* Card 6: Substance abuse */
                <div className="pillar-card">
                  <span className="pillar-card__step-number">06</span>
                  <div className="pillar-card__image" style={{ backgroundImage: `url(${substanceAbuseImage})` }}>
                    {/* Measurement Box for Pillar 6 */}
                    <div className="pillar-card__measurement-box pillar-card__measurement-box--06">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9.00006 10.2652 9.10545 10.5195 9.293 10.707L12.293 13.707C12.4816 13.8892 12.7342 13.99 12.9964 13.9877C13.2586 13.9854 13.5094 13.8802 13.6948 13.6948C13.8802 13.5094 13.9854 13.2586 13.9877 12.9964C13.99 12.7342 13.8892 12.4816 13.707 12.293L11 9.586V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4Z" fill="url(#paint0_linear_2_576)"/>
                        <defs>
                          <linearGradient id="paint0_linear_2_576" x1="10" y1="4.5" x2="-8.5" y2="40" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#84DA9B"/>
                            <stop offset="1" stopColor="#ECCC68"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="pillar-card__text-content">
                        <span>62</span> <span className="pillar-card__measurement-unit">days</span>
                      </div>
                    </div>
                  </div>
                  <div className="pillar-card__content">
                    <h3 className="pillar-card__title">Substance abuse</h3>
                    <p className="pillar-card__description">
                      Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>

      {/* Login and Signup Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={() => { setIsLoginModalOpen(false); setIsSignupModalOpen(true); }}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={() => { setIsSignupModalOpen(false); setIsLoginModalOpen(true); }}
      />
    </header>
  );
};

export default Header; 