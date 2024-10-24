import React from 'react';

const AboutUs = () => {
  return (
    
    <div className="bg-base-100">
        
      {/* Hero Section */}
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
            className="rounded-full shadow-2xl w-80 lg:w-[500px]" 
            alt="Team Collaboration"
          />
          <div className="lg:mr-10">
            <h1 className="text-5xl font-bold mb-6">We Build Career Opportunities</h1>
            <p className="text-lg mb-6">
              JobHunting is a cutting-edge platform connecting top talents with industry-leading companies. We
              empower individuals to find meaningful work and help organizations find the best-fit candidates.
              Our mission is to make job hunting effortless and productive for everyone.
            </p>
            <button className="btn btn-primary rounded-full px-10">Explore More</button>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Tailored Job Matching</h3>
            <p>
              Our intelligent system matches candidates with job openings that suit their skills and aspirations.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Comprehensive Support</h3>
            <p>
              From resume building to interview tips, we provide tools to help candidates succeed.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Expert Insights</h3>
            <p>
              Get insights from industry experts through our blog and community to stay ahead in the job market.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Blog Post 1 */}
          <div className="card w-full bg-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <figure>
              <img 
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" 
                alt="Job Search Tips" 
                className="rounded-t-lg h-64 object-cover w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl">Job Search Tips</h2>
              <p>
                Master the art of job searching with our detailed guide on how to optimize your resume, ace your interview, and much more.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary rounded-full">Read More</button>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="card w-full bg-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <figure>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                alt="Stand Out" 
                className="rounded-t-lg h-64 object-cover w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl">How to Stand Out</h2>
              <p>
                Learn how to differentiate yourself from other candidates by building a strong personal brand.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary rounded-full">Read More</button>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="card w-full bg-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <figure>
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" 
                alt="Resume Practices" 
                className="rounded-t-lg h-64 object-cover w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl">Best Resume Practices</h2>
              <p>
                Discover what recruiters look for in resumes and learn how to structure yours for maximum impact.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary rounded-full">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Join Thousands of Successful Job Hunters</h2>
        <p className="text-lg mb-8">
          Start your job-hunting journey with us today and take the next step toward your dream job.
        </p>
        <button className="btn btn-accent rounded-full px-10">Get Started</button>
      </div>
    </div>
  );
};

export default AboutUs;
