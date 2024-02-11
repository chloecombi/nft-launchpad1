import React from 'react';

const Steps = () => {
  return (
    <section>
      <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800 min-h-screen">
        <div className="flex flex-wrap -mx-8">
          <div className="w-full px-8 lg:w-1/2">
            <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                Sed ac magna sit amet risus tristique interdum, at vel velit in
                hac habitasse platea dictumst.
              </h2>
              <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis, quam nec venenatis lobortis, mi risus tempus nulla,
                sed porttitor est nibh at nulla. Praesent placerat enim ut ex
                tincidunt vehicula. Fusce sit amet dui tellus.
              </p>
              <div className="w-full md:w-1/3">
                <button
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  See more
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-8 lg:w-1/2">
            <ul className="space-y-12">
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                    1
                  </span>
                </div>
                <div className="px-4">
                  <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-slate-950 group-hover:text-white relative z-10 duration-300">
                      Lorem Ispum
                    </h3>
                    <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas commodi aliquam numquam dolorem consequatur
                      quaerat libero dolore sequi ipsam tempore!
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                    2
                  </span>
                </div>
                <div className="px-4">
                  <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-slate-950 group-hover:text-white relative z-10 duration-300">
                      Lorem Ispum
                    </h3>
                    <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas commodi aliquam numquam dolorem consequatur
                      quaerat libero dolore sequi ipsam tempore!
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                    3
                  </span>
                </div>
                <div className="px-4">
                  <div className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-slate-950 group-hover:text-white relative z-10 duration-300">
                      Lorem Ispum
                    </h3>
                    <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptas commodi aliquam numquam dolorem consequatur
                      quaerat libero dolore sequi ipsam tempore!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
