import React from 'react';
import './Services.css'

const Services= () => {
  return (
    <div className="courses-section pt-5 pb-5" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="courses-heading">Trending Courses</h1>
            </div>
            <div className="col-12  col-lg-4">
              <div className="shadow course-card p-3 mb-3">
                <img
                  src="https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg"
                  className="course-image w-100"
                />
                <h1 className="course-card-title">Data Science</h1>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
            <div className="col-12  col-lg-4">
              <div className="shadow course-card p-3 mb-3">
                <img
                  src=" https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png"
                  className="course-image w-100"
                />
                <h1 className="course-card-title">Full Stack Development</h1>
                <button className="btn btn-primary">Read More</button>
                
              </div>
            </div>
            <div className="col-12  col-lg-4">
              <div className="course-card shadow p-3 mb-3">
                <img
                  src="https://www.innomatics.in/wp-content/uploads/2023/01/digital-marketing-course-training-hyderabad.jpg"
                  className="course-image w-100"
                />
                <h1 className="course-card-title">Digital Marketing</h1>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="course-card shadow p-3 mb-3">
                <img
                  src="https://www.innomatics.in/wp-content/uploads/2023/01/big-data-analytics-with-hadoop-training-in-hyderabad-india.jpg"
                  className="course-image w-100"
                />
                <h1 className="course-card-title">Predictive Analytics</h1>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
            <div className="col-12  col-lg-4">
              <div className="course-card shadow p-3 mb-3">
                <img
                  src="https://www.innomatics.in/wp-content/uploads/2023/01/AWS-training-institute-Innomatics-research-labs-Kukatpallihyderabad.jpg"
                  className="menu-item-image w-100"
                />
                <h1 className="course-card-title">Amazon Web Services</h1>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
            <div className="col-12  col-lg-4">
              <div className="course-card shadow p-3 mb-3">
                <img
                  src="https://www.innomatics.in/wp-content/uploads/2023/01/Devops-institute-Innomatics-research-labs-KukatpallyHyderabad.jpg "
                  className="course-image w-100"
                />
                <h1 className="course-card-title">Devops</h1>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
} 

export default Services;
