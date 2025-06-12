import React from 'react';
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

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Main Navigation Group */}
      <div className="header__nav-group">
        {/* White background rectangle */}
        <div className="header__nav-background"></div>
        
        {/* Navigation Container */}
        <div className="header__nav-container">
          {/* Logo Group */}
          <div className="header__logo-group">
            <div className="header__logo-icon">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.0741 16.1534C26.0744 15.2697 25.8306 14.4031 25.3696 13.6491C24.9087 12.895 24.2485 12.2829 23.4618 11.8801C22.6752 11.4773 21.7925 11.2995 20.9112 11.3662C20.0299 11.433 19.1842 11.7417 18.4672 12.2585C17.7502 12.7752 17.1897 13.4798 16.8477 14.2946C16.5056 15.1095 16.3952 16.003 16.5286 16.8766C16.662 17.7502 17.034 18.57 17.6037 19.2457C18.1733 19.9214 18.9185 20.4267 19.757 20.7059C19.5942 21.4557 19.1797 22.1271 18.5824 22.6087C17.9851 23.0903 17.2409 23.3529 16.4736 23.353H13.5935C12.7023 23.353 11.8476 22.999 11.2175 22.3689C10.5873 21.7388 10.2333 20.8843 10.2333 19.9932V15.5415C14.0411 14.8479 16.9537 11.4509 16.9537 7.4144V2.7143C16.9537 2.39915 16.8916 2.08708 16.771 1.79592C16.6503 1.50476 16.4735 1.2402 16.2507 1.01735C16.0278 0.794505 15.7632 0.617734 15.472 0.497131C15.1808 0.376527 14.8687 0.314453 14.5535 0.314453H12.6334C12.2515 0.314453 11.8852 0.466157 11.6151 0.736192C11.3451 1.00623 11.1934 1.37247 11.1934 1.75436C11.1934 2.13625 11.3451 2.50249 11.6151 2.77253C11.8852 3.04256 12.2515 3.19427 12.6334 3.19427H14.0735V7.4144C14.0735 10.3422 11.737 12.7565 8.86404 12.7937C8.16469 12.803 7.47044 12.6734 6.82161 12.4123C6.17279 12.1511 5.58231 11.7637 5.08447 11.2725C4.58662 10.7813 4.19134 10.1961 3.92156 9.55092C3.65179 8.9057 3.5129 8.21332 3.51296 7.51399V3.19427H4.95304C5.33497 3.19427 5.70126 3.04256 5.97132 2.77253C6.24139 2.50249 6.39311 2.13625 6.39311 1.75436C6.39311 1.37247 6.24139 1.00623 5.97132 0.736192C5.70126 0.466157 5.33497 0.314453 4.95304 0.314453H3.03294C2.39638 0.314453 1.7859 0.567293 1.33579 1.01735C0.885682 1.46741 0.632813 2.07782 0.632812 2.7143V7.51399C0.632891 9.42823 1.30607 11.2815 2.53458 12.7496C3.7631 14.2178 5.46875 15.2073 7.35316 15.5451V19.9932C7.35506 21.6475 8.01314 23.2334 9.18301 24.4032C10.3529 25.5729 11.939 26.2309 13.5935 26.2328H16.4736C17.9975 26.231 19.4682 25.6723 20.6089 24.6619C21.7496 23.6515 22.4816 22.2591 22.6671 20.7467C23.6519 20.4465 24.5143 19.8382 25.1276 19.0114C25.7409 18.1846 26.0727 17.1828 26.0741 16.1534ZM21.2739 18.0733C20.8941 18.0733 20.5229 17.9607 20.2071 17.7498C19.8914 17.5388 19.6453 17.239 19.4999 16.8881C19.3546 16.5373 19.3166 16.1513 19.3907 15.7789C19.4648 15.4065 19.6476 15.0644 19.9162 14.7959C20.1847 14.5274 20.5268 14.3445 20.8993 14.2705C21.2717 14.1964 21.6578 14.2344 22.0087 14.3797C22.3595 14.525 22.6594 14.7711 22.8704 15.0868C23.0814 15.4025 23.194 15.7737 23.194 16.1534C23.194 16.6626 22.9917 17.1509 22.6316 17.511C22.2715 17.871 21.7831 18.0733 21.2739 18.0733Z" fill="url(#paint0_linear_2_296)"/>
<defs>
<linearGradient id="paint0_linear_2_296" x1="-1.43429" y1="4.21015" x2="18.7597" y2="26.2328" gradientUnits="userSpaceOnUse">
<stop stop-color="#D86D6B"/>
<stop offset="0.228785" stop-color="#F5854E"/>
<stop offset="0.408008" stop-color="#F0C971"/>
<stop offset="0.634525" stop-color="#3CC6C1"/>
<stop offset="0.790545" stop-color="#419E80"/>
<stop offset="1" stop-color="#4188C1"/>
</linearGradient>
</defs>
</svg>
            </div>
            <span className="header__logo-text">ProVital</span>
          </div>

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
              <a href="#" className="header__nav-link">Login / Signup <span className="header__dropdown-arrow"></span></a>
              <div className="header__group-1010108332">
                <div className="header__dropdown-row">
                  <span className="header__dropdown-label">Doctor</span>
                  <div className="header__dropdown-links-group">
                    <a href="#" className="header__dropdown-link">Login</a>
                    <a href="#" className="header__dropdown-link">Sign up</a>
                  </div>
                </div>
                <div className="header__dropdown-row">
                  <span className="header__dropdown-label">Patients</span>
                  <div className="header__dropdown-links-group">
                    <a href="#" className="header__dropdown-link">Login</a>
                    <a href="#" className="header__dropdown-link">Sign up</a>
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
          <input type="text" placeholder="Condition, procedure, speciality..." className="header__search-input" />
        </div>

        <div className="header__search-input-group">
          <span className="header__location-icon">📍</span>
          <input type="text" placeholder="City, state, or zipcode" className="header__search-input" />
        </div>

        <div className="header__search-input-group">
          <span className="header__insurance-icon">🤍</span>
          <input type="text" placeholder="Insurance carrier" className="header__search-input" />
        </div>

        <button className="header__find-now-button">
          <span className="header__find-now-icon">🔍</span>
          Find now
        </button>
      </div>

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
              <button className="pill selected">Nutrition</button>
              <button className="pill">Physical activity</button>
              <button className="pill">Restorative sleep</button>
              <button className="pill">Stress management</button>
              <button className="pill">Social connection</button>
              <button className="pill">Substance abuse</button>
              {/* Arrow buttons for scrolling */}
              <div className="pill-nav__arrow pill-nav__arrow--left">←</div>
              <div className="pill-nav__arrow pill-nav__arrow--right">→</div>
            </div>

            {/* Cards */}
            <div className="pillar-cards">
              {/* Card 1: Nutrition */}
              <div className="pillar-card">
                <div className="pillar-card__image"></div> {/* Placeholder image */}
                <div className="pillar-card__overlay">
                  <span className="pillar-card__icon">❤️</span>
                  <span className="pillar-card__value">121/80 mmHg</span>
                </div>
                <h3 className="pillar-card__title">Nutrition</h3>
                <p className="pillar-card__description">
                  Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.
                </p>
              </div>

              {/* Card 2: Physical activity */}
              <div className="pillar-card">
                <div className="pillar-card__image"></div> {/* Placeholder image */}
                <div className="pillar-card__overlay">
                  <span className="pillar-card__icon">🧡</span>
                  <span className="pillar-card__value">32 minutes</span>
                </div>
                <h3 className="pillar-card__title">Physical activity</h3>
                <p className="pillar-card__description">
                  Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.
                </p>
              </div>

              {/* Card 3: Restorative sleep */}
              <div className="pillar-card">
                <div className="pillar-card__image"></div> {/* Placeholder image */}
                <div className="pillar-card__overlay">
                  <span className="pillar-card__icon">🌙</span>
                  <span className="pillar-card__value">8 hours</span>
                </div>
                <h3 className="pillar-card__title">Restorative sleep</h3>
                <p className="pillar-card__description">
                  Consistent, quality sleep is foundational to optimal brain function and physical health.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header; 