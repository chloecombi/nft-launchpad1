import React from 'react';

const Steps = () => {
  return (
    <section>
      <div className=" p-4 mx-auto max-w-7xl sm:p-6 lg:p-8">
        <h2 className="text-4xl font-bold text-center mb-6">Get Started</h2>
        <div className="flex gap-4 flex-col -mx-8">
          <li className="flex self-end -mx-4 w-1/2">
            <div className="px-4">
              <div className="w-full p-4 rounded border-[1px]  relative overflow-hidden group ">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                <h3 className="text-xl font-semibold  group-hover:text-white relative z-10 duration-300">
                  Lorem Ispum
                </h3>
                <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas commodi aliquam numquam dolorem
                </p>
              </div>
            </div>
          </li>
          <li className="flex -mx-4 w-1/2">
            <div className="px-4">
              <div className="w-full p-4 rounded border-[1px]  relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                <h3 className="text-xl font-semibold  group-hover:text-white relative z-10 duration-300">
                  Lorem Ispum
                </h3>
                <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas commodi aliquam numquam dolorem
                </p>
              </div>
            </div>
          </li>
          <li className="flex self-end -mx-4 w-1/2">
            <div className="px-4">
              <div className="w-full p-4 rounded border-[1px] relative overflow-hidden group ">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                <h3 className="text-xl font-semibold group-hover:text-white relative z-10 duration-300">
                  Lorem Ispum
                </h3>
                <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas commodi aliquam numquam dolorem
                </p>
              </div>
            </div>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Steps;
