import Head from "next/head";
import Image from "next/image";
import Links from "../components/Links";

export default function Home() {
  return (
    <div
      style={{
        background:
          "url(https://i.pinimg.com/originals/2f/4d/24/2f4d249ccebb3cd54b31a816133c213b.jpg)",
      }}
      className="flex flex-col !bg-cover items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Contact Karthik</title>
        <link rel="icon" href="Karthik.jpg" />
      </Head>

      <div className="flex flex-col items-center justify-center mt-5">
        <img
          className="w-[187px] h-[195px] rounded-full mx-auto"
          src="/Karthik.jpg"
          alt="Karthik Pariti"
        />
        <h2 className="my-3 text-3xl font-bold text-center text-gray-200 md:text-gray-800 md:text-4xl">
          Karthik Pariti
        </h2>
      </div>
      <div className="w-full max-w-lg p-6">
        <Links
          image="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
          link="https://www.instagram.com/_karthik.codes_/"
          text="Follow me on Instagram"
        />
        <Links
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          link="https://github.com/Kardev07"
          text="Look at my code on Github"
        />
        <Links
          image="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress"
          link="https://kardev07.hashnode.dev/"
          text="Checkout my blogs on Hashnode"
        />
        <Links
          image="https://cdn.iconscout.com/icon/free/png-512/discord-2474808-2056094.png"
          link="https://discord.gg/NDFAdJ9DAb"
          text="Join my Discord server"
        />
        <Links
          image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          link="https://twitter.com/MrPkar"
          text="Follow me on Twitter"
        />
        <Links
          image="https://icons-for-free.com/iconfiles/png/512/suitcase+work+icon-1320165848716624003.png"
          link="https://kardev07.github.io/my-portfolio/"
          text="Checkout my resume"
        />
        <Links
          image="https://icons-for-free.com/iconfiles/png/512/suitcase+work+icon-1320165848716624003.png"
          link="mailto:karthik.pariti101@gmail.com"
          text="Mail Me"
        />
      </div>
    </div>
  );
}
