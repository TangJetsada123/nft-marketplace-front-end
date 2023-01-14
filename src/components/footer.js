import logo from '../assets/logo-footer.png';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

const Footer = () => {
  return (
    <div className="h-[399.82px] md:h-[557px] lg:h-[375px]  z-0 bg-[#07111E] ">
      <div className="absolute z-10 lg:flex  ml-16">
        <div >
          <div className="mt-4 mx-2 md:mx-4 lg:ml-[145.83px] lg:mt-[86px] 2xl:ml-[300px]">
            <p className="text-[#E8F0F9] text-16 md:text-33  ">
              Following now
            </p>
            <p className="text-neutral-200 text-10 md:text-nav md:mt-2 lg:max-w-[280px]">
            </p>
          </div>
          <div className="mx-2 md:mx-4 lg:ml-[145.83px] 2xl:ml-[300px] mt-[20.03px] lg:mt-9 flex items-center">
            <div className="lg:w-[120px]">
              <p className="text-neutral-50 text-14 md:text-16 md:mt-2 lg:text-14">
               
              </p>
            </div>
            <div className="ml-[146px] md:ml-[488px] lg:ml-[152px]">
              <button className="w-[96px] h-[36px] md:w-[114px] md:h-[44px] bg-[#255495] text-14 text-white font-semibold rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mx-2 md:mx-4 lg:ml-[145.83px] 2xl:ml-[300px] w-[288px] h-[1px] md:w-[630px] lg:w-[288px] text-neutral-50 bg-slate-100 ml-1.5 -mt-0.5"></div>
        </div>
        <div className="flex mt-4 md:mt-[25px] lg:mt-[86px]">
          <div className="ml-[45.5px] md:ml-[68px] lg:ml-8 2xl:ml-40 w-[84px] md:w-[166px]">
            <p className="text-primary font-semibold text-19 md:text-23">
              Explore
            </p>
            <ul className="text-neutral-50 text-twelve md:text-sm">
              <li className="mt-6">Art</li>
              <li className="mt-6">Collectibles</li>
              <li className="mt-6">Photography</li>
              <li className="mt-6">Utility</li>
            </ul>
          </div>
          <div className="ml-4 w-[84px] md:w-[166px] lg:w-[145.33px] md:mx-[50px] lg:mx-0 2xl:mx-14">
            <p className="text-primary font-semibold text-19 md:text-23">
              Stats
            </p>
            <ul className="text-neutral-50 text-twelve md:text-sm">
              <li className="mt-6">Ranking</li>
              <li className="mt-6">Activity</li>
            </ul>
          </div>
          <div className="ml-4 w-[84px] md:w-[166px]">
            <p className="text-primary font-semibold text-19 md:text-23">
              News
            </p>
            <ul className="text-neutral-50 text-twelve md:text-sm">
              <li className="mt-6">Blog</li>
              <li className="mt-6">About Us</li>
              <li className="mt-6">Help Center</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center justify-between 2xl:ml-20">
          <div className="ml-2 md:mt-[16.13px] lg:mt-[86px] lg:-ml-12">
            <img
              src={logo}
              alt=""
              className="w-[104.52px] h-[39.92px] md:w-[250.64px] md:h-[95.74px] lg:w-[207.33px] lg:h-[76.75px]"
            />
          </div>
          <div className="flex flex-col lg:flex-col-reverse">
            <div className="flex justify-end lg:justify-start mt-6 mb-4 md:mb-9">
              <div className="bg-neutral-100 rounded-full w-[15.5px] h-[16.01px] md:w-[37.16px] md:h-[38.4px] lg:w-[29.89px] lg:h-[28.59px] flex justify-center items-center">
                <AiFillYoutube
                  color="#848080"
                  className="w-2.5 h-2.5 md:w-6 md:h-6 lg:w-5 lg:h-5"
                />
              </div>
              <div className="bg-neutral-100 rounded-full w-[15.5px] h-[16.01px] md:w-[37.16px] md:h-[38.4px] lg:w-[29.89px] lg:h-[28.59px] flex justify-center items-center mx-[9.06px] md:mx-[21.73px] lg:mx-4">
                <AiOutlineTwitter
                  color="#848080"
                  className="w-2.5 h-2.5 md:w-6 md:h-6 lg:w-5 lg:h-5"
                />
              </div>
              <div className="bg-neutral-100 rounded-full w-[15.5px] h-[16.01px] md:w-[37.16px] md:h-[38.4px] lg:w-[29.89px] lg:h-[28.59px] flex justify-center items-center">
                <GrFacebookOption
                  color="#848080"
                  className="w-2.5 h-2.5 md:w-5 md:h-5 lg:w-5 lg:h-5"
                />
              </div>
            </div>
            <div className="text-neutral-300 text-4 md:text-tenFooter flex justify-end mt-2 lg:max-w-[220px]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
