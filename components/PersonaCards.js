import React from 'react';

export default function Personas(props) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                <i className="fas fa-shield" aria-hidden="true"></i>
              </div>
              <h6 className="text-xl font-semibold">Security Experts</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Embrace the role of a security expert, analyze threats, devise countermeasures, and protect critical assets from cyber attacks.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <h6 className="text-xl font-semibold">Students</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Tackle challenges, acquire knowledge, and hone your skills in the ever-evolving world of cybersecurity.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                <i className="fa fa-user-secret" aria-hidden="true"></i>
              </div>
              <h6 className="text-xl font-semibold">Hobbiest</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Step into the shoes of a security hobbyist, explore vulnerabilities, experiment with tools, and unravel the mysteries of cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
