import { Link } from "react-router-dom";
import avatar from "../../../../public/avatar/job.png";
import { useTranslation } from "react-i18next";
import FadeIn from "react-fade-in";

const PracticeCustomizedMockInterview = () => {
  const { t } = useTranslation();
  return (
    <FadeIn>
      <div className="mt-8 bg-gradient-to-r from-teal-500 to-teal-100 rounded-3xl p-8 text-center lg:text-left lg:gap-0 gap-3 flex flex-col-reverse lg:flex-row  items-center justify-between">
        {/* Left Text Section */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">
            {t("PracticecustomizedmockinterviewwithAI!")}
          </h2>
          <p className="text-white text-lg mb-4">
            {t("GetAIanswers,tipsandinsights")}
          </p>
          <Link
            to="/ai"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700"
          >
            Start for free
          </Link>
        </div>

        {/* Right Image Section */}
        <div>
          <img
            src={avatar}
            alt="Naukri 360 AI"
            className="w-40 bg-transparent"
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default PracticeCustomizedMockInterview;
