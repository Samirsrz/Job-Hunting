
import CategoryButtons from "./CategoryButtons/CategoryButtons";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import Home from "./Home/Home";
import PracticeCustomizedMockInterview from "./PracticeCustomizedMockInterview/PracticeCustomizedMockInterview";


const HomePage = () => {
    return (
        <div>
            <Home/>
            <PracticeCustomizedMockInterview/>
            <CategoryButtons/>
            <CompanyCarousel/>
        </div>
    );
};

export default HomePage;