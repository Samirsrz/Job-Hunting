
import BiggestContest from "./BiggestContest/BiggestContest";
import CategoryButtons from "./CategoryButtons/CategoryButtons";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import FeaturedCompanies from "./FeaturedCompanies/FeaturedCompanies";
import Home from "./Home/Home";
import PracticeCustomizedMockInterview from "./PracticeCustomizedMockInterview/PracticeCustomizedMockInterview";


const HomePage = () => {
    return (
        <div>
            <Home/>
            <PracticeCustomizedMockInterview/>
            <CategoryButtons/>
            <CompanyCarousel/>
            {/* <FeaturedCompanies/> */}
            <BiggestContest/>
        </div>
    );
};

export default HomePage;