import Image from "next/image";

function Links({ image, text, link }) {
  return (
    <a
      className="flex items-center w-full max-w-md cursor-pointer transform hover:-translate-y-1 hover:scale-110 transition duration-200 ease-in-out p-3 my-3 mx-auto rounded-md ring-[1px] ring-blue-300 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl"
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      <Image width={40} height={40} src={image} alt={text} />
      <h2 className="ml-3 text-xl font-semibold md:ml-6">{text}</h2>
    </a>
  );
}

export default Links;
