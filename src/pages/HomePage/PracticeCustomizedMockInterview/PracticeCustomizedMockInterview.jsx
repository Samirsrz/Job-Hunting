
import avatar from '../../../../src/assets/avatar/job.png'

const PracticeCustomizedMockInterview = () => {
    return (
        <div className=' bg-gradient-to-r from-teal-500 to-teal-100 rounded-3xl p-8 text-center lg:text-left lg:gap-0 gap-3 flex flex-col-reverse lg:flex-row  items-center justify-between'>
            {/* Left Text Section */}
            <div>
                <h2 className='text-white text-3xl font-bold mb-2'>
                    Practice customised mock interview with AI!
                </h2>
                <p className='text-white text-lg mb-4'>
                    Get AI answers, tips and insights
                </p>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700'>
                    Start for free
                </button>
            </div>

            {/* Right Image Section */}
            <div>
                <img src={avatar} alt="Naukri 360 AI" className='w-40 bg-transparent' />
            </div>
        </div>
    );
};

export default PracticeCustomizedMockInterview;
