import { companyLogos } from "../constants";

function CompanyLogos() {
  return (
    <div className="relative z-10 mt-20 hidden lg:block">
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, i) => (
          <li
            key={i}
            className="flex h-[8.5rem] flex-1 items-center justify-center"
          >
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyLogos;
