/* eslint-disable no-unused-vars */
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
      <h1 className="text-center text-5xl font-bold mt-10 mb-6">AI</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mb-4 md:mb-8">
        <textarea
          disabled={loading}
          className="textarea textarea-bordered border-primary rounded-b-none grow"
          name="message"
          placeholder="Write Your message"
        ></textarea>
        <button
          disabled={loading}
          className="btn btn-primary rounded-t-none"
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
