import React, { useEffect, useRef } from 'react';
import '../styles/Home.css'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Team from '../assets/team.png'
import { FaUserEdit, FaUpload, FaLink } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer'


const Hero = () => {

  const features = [
    {
      icon: '🔵', 
      title: 'Lightweight',
      description:
        'Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress.',
      link: 'Products features',
    },
    {
      icon: '🧬',
      title: 'Decentralization',
      description:
        'Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy and lightning speed by design.',
      link: 'How it works',
    },
    {
      icon: '🔔',
      title: 'No subscription',
      description:
        'With Pay-as-you-go pricing, now you only pay for the resources you use without being charged a flat monthly fee even if you don’t use it up.',
      link: 'Metered billing',
    },
  ];

  const steps = [
    {
      icon: <FaUserEdit />,
      title: 'Create an account',
      description: 'Create an Cloudra account and start uploading your files to Decentralized Storage.',
    },
    {
      icon: <FaUpload />,
      title: 'Upload your files',
      description: 'Your file is encrypted and split into pieces then distributed to the nodes around the world.',
    },
    {
      icon: <FaLink />,
      title: 'Share file instantly',
      description: 'Send your file via email or shareable link with password protect and expiration time.',
    },
  ];



  const headingRef = useRef(null);

  useEffect(() => {
    const element = headingRef.current;
    if (!element) return;

    let delayCounter = 0;

    function wrapTextNode(textNode) {
      const text = textNode.textContent;
      const fragment = document.createDocumentFragment();
      for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = (delayCounter * 0.1) + 's';
        delayCounter++;
        fragment.appendChild(span);
      }
      return fragment;
    }

    function recurse(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent.trim().length > 0) {
          const wrappedFragment = wrapTextNode(node);
          node.parentNode.replaceChild(wrappedFragment, node);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.childNodes).forEach(child => recurse(child));
      }
    }

    recurse(element);
  }, []);



  return (
    <div className='body'>
      <Navbar/>
      <section className="hero-section">
        <div className="hero-content">
          <div>  <style>{`
        h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: black;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .color {
          color:#0050ff;
        }
        h1 span {
          opacity: 0;
          transform: translateY(30px);
          display: inline-block;
          animation-name: fadeSlideIn;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
            <h1 ref={headingRef}>
              Decentralize Cloud Storage<br />
              For <span className="color">AI &amp; Web3</span>
            </h1>
          </div>
          <p>
            From Web3 application to AI models, we provide a secure, scalable and
            verifiable storage for your data needs.
          </p>
        </div>
      </section>

      <section className="features-intro">
        <div className="features-container">
          <h2>
            Lightning Fast, Better Privacy, Fair Cost
          </h2>
          <p>
            You can choose continue to use centralized cloud storage but we have some better reasons for you to start moving to decentralized cloud storage because it is simply the future of the internet.
          </p>
        </div>
      </section>


      <section className="feature-section">
        <div className="feature-container">
          {features.map((item, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-description">{item.description}</p>
              <p className="feature-link">
                {item.link} <span className="arrow">→</span>
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="team-section">
        <h2 className="team-heading">
          Lightweight design, ready to <br />
          use for <span className="highlight">team productivity.</span>
        </h2>
      </section>



      <div className="container">
        <div className="card sharing">
          <h2 className="title">File Sharing</h2>
          <p className="description">
            Securely share files within or outside your <br /> organization, and control access, track edits, and <br /> analyze the shared content stats.
          </p>
          <img className='Cards' style={{ marginTop: "20px" }} src={Card1} alt='' />
        </div>

        <div className="card collect">
          <h2 className="title">Collect Files</h2>
          <p className="description">
            You can collect and receive files in a secure <br /> environment, even if the other person doesn’t <br /> have a Cloudra account.
          </p>
          <img className='Cards' src={Card2} alt="" />
        </div>
      </div>



      <div className="team-wrapper">
        <div className="team-content">
          <div className="text-section">
            <h1>
              <span className="highlight">Team collaboration</span> in<br />
              one simple place with <br />
              <span className="bold">privacy come first.</span>
            </h1>
            <p className='description'>
              Securely share and work together with Cloudra simple <br /> file storage and sharing,
              easy user management, <br />unlimited file size, password protected links and more.
            </p>
            <div className="button-group">
              <button className="btn btn-primary">Start now</button>
              <button className="btn btn-secondary">More features</button>
            </div>
          </div>
          <div className="image-section">
            <img className='Cards' style={{ width: "800px", marginRight: "-70px" }}
              src={Team}
              alt="Team Illustration"
            />
          </div>
        </div>
      </div>




      <section className="privacy-section">
        <div className="privacy-content">
          <h1>
            Decentralized storage <br />
            built for <span className="highlight">better privacy.</span>
          </h1>
          <p style={{ width: "fit-content" }}>
            Store data securely on over 13k nodes worldwide instead of just a few vulnerable
            data centers with privacy. <br />
            Every file is encrypted, split into pieces, and stored on a global network of
            nodes, making data breaches and downtime a thing of the past.
          </p>
        </div>
      </section>



      <section className="features-container">
        {/* Top Features */}
        <div className='top-feature'>
          <div className="feature-row">
            <div className="feature-item">
              <div className="icon blue-icon">
                <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="white" />
                  <path d="M7 10h10v2H7zM7 14h10v2H7z" fill="#0050FF" />
                </svg>
              </div>
              <h3>Upgrade your storage.</h3>
              <p>
                Better security, performance and cost, <br /> Cloudra is the better way to store data.
              </p>
              <a href="#" className="blue-link">Learn More <span>›</span></a>
            </div>
            <div className="feature-item">
              <div className="icon green-icon">
                <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12h2c0-4.4 3.6-8 8-8v-2zm6.2 4.2a10 10 0 01-14.5 12.7l1.4-1.4a8 8 0 0011.7-10.9l1.4-1.4z" />
                </svg>
              </div>
              <h3>Carbon neutral storage.</h3>
              <p style={{ width: "fit-content" }}>
                Utilizing existing unused storage capacity <br /> on recycled hardware around the world.
              </p>
              <a href="#" className="green-link">Learn More <span>›</span></a>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className='bottom-feature'>
          <div className="feature-row2">
            <div className="feature-box">
              <div className="icon light-blue-icon">
                <svg width="24" height="24" fill="#0050ff" viewBox="0 0 24 24">
                  <path d="M10 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H4V5h6V3zm10 8l-4-4v3H8v2h8v3l4-4z" />
                </svg>
              </div>
              <div>
                <h3>Private by design</h3>
                <p>
                  We believe data privacy is a human right, which is why <br /> Cloudra is built on a decentralized architecture that <br /> makes data breaches a thing of the past.
                </p>
              </div>
            </div>

            <div className="feature-box1">
              <div className="icon light-purple-icon">
                <svg width="24" height="24" fill="#6c5ce7" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 0012 22a10 10 0 007.07-2.93A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z" />
                </svg>
              </div>
              <div>
                <h3>Distributed network</h3>
                <p>
                  An object is never in one place. Data is split into 80<br /> pieces, and distributed to uncorrelated Nodes. When <br /> you call for the data, it’s automatically reconstituted  <br /> in an instant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="worldwide-feature">
        <div className="feature-box">
          <div className="icon purple-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4c6ef5">
              <path d="M8 10h2v4H8v-4zm6 0h2v4h-2v-4zM12 2C6.48 2 2 6.48 2 12s4.48 
              10 10 10 10-4.48 10-10S17.52 2 12 2zm0 
              18c-4.41 0-8-3.59-8-8s3.59-8 
              8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <div className="text-content">
            <h3>Worldwide availability</h3>
            <p>
              Data is stored on Nodes that are selected by reputation <br /> and local latency. The fastest Nodes from this set are <br /> chosen to store pieces, ensuring quick access to your <br /> data.
            </p>
          </div>
        </div>
      </section>



      <section className="pricing-header">
        <div className="pricing-content">
          <h1>
            <span>Simple</span>, <span style={{ color: "#4ebff3" }}>Fair Pricing</span>.
          </h1>


          <p>
            Pay for what you use. There is no minimum charge. Always know what you’ll pay.
          </p>
        </div>
      </section>





      <div className="storage-card">
        <h2>Storage</h2>
        <p className="description">
          Access a complete decentralized storage with simple, pay-as-you-go pricing
        </p>

        <div className="price">
          <span className="currency">₹</span>
          <span className="amount">9</span>
          <div className="per">Per GB/month</div>
        </div>

        <button className="cta-button">Get started in minutes</button>

        <ul className="features">
          <li>✅ Everything you need to storage & share files</li>
          <li>✅ No fees for API requests or data retrievals</li>
          <li>✅ No setup fees, monthly fees, or hidden fees</li>
        </ul>
      </div>



      <section className="how-it-works">
        <h2>How it works?</h2>
        <p>
          Cloudra removes complexity and offers a simple interface that allows users to take advantage of the vast array of decentralized storage with better security, performance, and pricing.
        </p>
      </section>






      <section className="steps-section">
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-line" />}
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Hero;
