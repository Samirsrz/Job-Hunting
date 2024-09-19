
import BiggestContest from "./BiggestContest/BiggestContest";
import CategoryButtons from "./CategoryButtons/CategoryButtons";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import FeaturedCompanies from "./FeaturedCompanies/FeaturedCompanies";
import HomeSearch from "./HomeSearch/HomeSearch";
import PracticeCustomizedMockInterview from "./PracticeCustomizedMockInterview/PracticeCustomizedMockInterview";


const HomePage = () => {
    return (
        <div>
            <HomeSearch />
            <PracticeCustomizedMockInterview />
            <CategoryButtons />
            <CompanyCarousel />
            <FeaturedCompanies />
            <BiggestContest />
        </div>
    );
};

export default HomePage;