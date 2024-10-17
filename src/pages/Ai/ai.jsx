/* eslint-disable no-unused-vars */
//http://surl.li/gbhhni
import { useState } from "react";
import Markdown from "react-markdown";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github.css";
import rehypeHighlight from "rehype-highlight";

const Ai = () => {
  const [response, setResponse] = useState(
    "Write a message and click the *send* button to get ai response!"
  );
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    axiosCommon
      .post("/ai", { message: e.target?.message?.value })
      .then(({ data }) => {
        setResponse(data.response);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Helmet>
        <title>Next-Hire | Ai </title>
      </Helmet>
      <div
        className="hero h-72 my-5 rounded-lg"
        style={{
          backgroundImage:
            "url(https://www.nibib.nih.gov/sites/default/files/inline-images/AI%20600%20x%20400.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mb-4 md:mb-8 lg:mt-10"
      >
        <textarea
          disabled={loading}
          className="textarea textarea-bordered border-primary grow px-3"
          name="message"
          placeholder="Write Your message"
        ></textarea>
        <button
          disabled={loading}
          className="btn bg-blue-400 font-bold mt-3 text-white text-lg"
          type="submit"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Send"
          )}
        </button>
      </form>
      <div>
        <Markdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-4xl font-bold" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-3xl font-semibold" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-2xl font-semibold" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 className="text-xl font-medium" {...props} />
            ),
          }}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {response}
        </Markdown>
      </div>
    </div>
  );
};

export default Ai;
