import React from 'react';
import Link from 'next/link';
import PersonaCards from 'components/PersonaCards';

export default function Personas() {
  return (
    <section className="pb-20 bg-blueGray-200 -mt-24">
      <div className="container mx-auto px-4">
        <PersonaCards />

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-user-friends text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Role-Based Challenges
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Experience the versatility of cybersecurity in this dynamic board game. Assume diverse roles, from security experts to hobbyists and students, each with unique challenges to solve. Explore various problem scenarios, tackle intricate puzzles, and unleash your potential as you delve into the exciting world of cybersecurity.
            </p>
            <Link href="/" legacyBehavior>
              <a href="/#custom_sign_up" className="font-bold text-blueGray-700 mt-8">
                Sign up to get notified!
              </a>
            </Link>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
              <img
                alt="..."
                src="/assets/it.png"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-blueGray-700 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white fill-current">
                  Play as different Personas
                </h4>
                <p className="text-md font-light mt-2 text-white fill-current">
                  Security Experts, Hobbiest, Students, CEO, CFO
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
