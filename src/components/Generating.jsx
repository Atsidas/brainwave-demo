import { loading } from "../assets";

function Generating({ className }) {
  return (
    <div
      className={`flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base ${className || ""}`}
    >
      <img src={loading} alt="loading" className="mr-4 h-5 w-5" />
      AI is generating
    </div>
  );
}

export default Generating;
