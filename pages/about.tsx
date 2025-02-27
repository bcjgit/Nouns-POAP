import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

const About = () => {
  return (
    <div className="min-h-screen bg-nouns-bg-blue text-white">
      <Header title="About | Nouns POAP" />
      <div className=" w-11/12  m-auto maxW">
        <Nav about />
        <div className="">
          <div className="text-nouns font-light xs:text-3xl sm:text-6xl sm:w-7/12 leading-tight xs:mt-10 sm:mt-14">
            Every auction participant, win or lose, shapes, the future of the
            project.
          </div>

          {/* <div className="sm:pb-4 sm:pt-12 sm:w-1/2 sm:m-auto text-xl"> */}
          <div className="sm:pb-4 sm:pt-12 sm:w-1/3 text-xl">
            <p className="text-dm font-normal text-base xs:pt-4 sm:pt-0 m-auto">
              The Nouns Bidder POAP was created to invite and reward the
              community for actively participating in the proliferation of the
              Nouns ecosystem.
            </p>
          </div>
        </div>
        {/* </div> */}

        <div className="xs:py-10 sm:py-2">
          <img
            className="w-full xs:hidden sm:block"
            src="./noungroup.png"
            alt="group"
          />
          <img
            className="w-full sm:hidden"
            src="./noungroup-m.png"
            alt="group"
          />
        </div>

        {/* <div className="xs:w-11/12 sm:w-9/12 m-auto  sm:max"> */}
        {/* <div className="flex xs:flex-col sm:flex-row justify-between align-center"> */}
        <div className="flex flex-col">
          <div className="text-nouns xs:text-5xl sm:text-6xl pb-4 ">
            How it works
          </div>
          <div className="text-dm sm:w-1/3  flex-end xs:pt-4 sm:pt-0">
            After each auction, the top 5 runner-ups are airdropped a POAP via
            the xDAI network, which can be migrated to the mainnet using{" "}
            <a
              className="hover:underline hover:text-black transition duration-200 cursor-pointer"
              href="https://poap.xyz/"
              target="_blank"
              rel="norofererr"
            >
              POAP.xyz.
            </a>
          </div>
        </div>

        <div className="xs:py-10 sm:py-20 ">
          <img src="./howitworks.png" alt="howitworks" />
        </div>

        <div>
          <p className="text-nouns xs:text-5xl sm:text-9xl">David Horvath</p>
          <p className="text-dm xs:text-xs xs:pt-2 sm:pt-0 sm:text-sm uppercase tracking-widest">
            About the artist
          </p>

          <div className="flex xs:flex-col sm:flex-row sm:gap-36 mt-8 xs:pb-16 sm:pb-32">
            <div className="sm:w-1/2 xs:mb-4 sm:mb-0">
              <img src="david.png" alt="david" />
            </div>

            <div className="sm:w-1/2">
              <p className="mb-4 leading-loose">
                Best known for co-creating the Uglydoll toy brand with his wife
                and creative partner Sun-Min Kim, NFT artist David Horvath is
                author and illustrator of Bossy Bear, a Disney book series and
                best selling toy line, now headed to the small screen with Ron
                Howard’s Imagine Entertainment. David's work has been found
                everywhere from the shelves of LOFT in Kyoto and the MOMA in
                Tokyo to his own toy shop in Seoul.
              </p>

              <a
                href="https://twitter.com/davidzhorvath"
                target="_blank"
                rel="noreferrer"
                className="
                text-nouns
                flex
                gap-2
                hover:cursor-pointer
              hover:text-nouns-grey
                w-1/2
                transition
                duration-200
                credit
                "
              >
                <img src="./twitter.svg" alt="twitter" />
                <p>@davidhorvath</p>
              </a>
            </div>
          </div>
        </div>
        <Footer dark={true} />
      </div>
    </div>
  );
};

export default About;
