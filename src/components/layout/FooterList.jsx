import { Link } from "react-router-dom";

export default function  FooterList({ title, items }) {
  return (
    <div
      dir="rtl"
      className="text-center flex flex-col gap-2 w-[200px] sm:text-right sm:w-fit p-4 sm:p-3 md:p-0 text-primary cursor-pointer"
    >
      <h2 className="mb-4 text-xs lg:text-sm">{title}</h2>
      <ul className="font-medium text-center text-[17px] md:text-[15px] lg:text-[17px] flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={index} className="sm:flex flex-row gap-1">
            {item.external === true ? (
              <a
                href={item.href}
                target="_blank"
                className="flex items-center gap-1.5  text-xs lg:text-sm"
              >
                <img src={item.icon} className="w-[15px] h-[15px] ml-4" />
                {item.label}
              </a>
            ) : item.external === false ? (
              <Link to={item.href} className=" text-xs lg:text-sm">{item.label}</Link>
            ) : (
              <p className=" text-xs lg:text-sm">{item.label}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
