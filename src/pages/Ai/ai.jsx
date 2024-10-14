import { useState } from "react";
import Markdown from "react-markdown";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import toast from "react-hot-toast";

const Ai = () => {
  const [response, setResponse] = useState("# Hi, *Pluto*!");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axiosCommon
      .post("/ai", { message: e.target.message.value })
      .then(({ data }) => {
        setResponse(data.response);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <h2>Ai page</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea textarea-bordered"
          name="message"
          placeholder="Write Your message"
        ></textarea>
        <button disabled={loading} className="btn btn-primary" type="submit">
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Send"
          )}
        </button>
      </form>
      <div>
        <Markdown>{response}</Markdown>
      </div>
    </div>
  );
};

export default Ai;
