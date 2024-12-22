import { useState } from "react";
import logo from "/Images/logo.svg";
import git from "/Images/github.svg";
import bit from "/Images/bitbucket.svg";
import azure from "/Images/azure-devops.svg";
import gitlab from "/Images/gitlab.svg";
import icon from "/Images/Icon.svg";

const Common = () => {
  const [saas, setSaas] = useState(true);

  return (
    <div className="flex h-[960px] p-6 flex-col justify-center items-center gap-8 flex-1 bg-[#FAFAFA]">
      <div className="bg-white flex flex-col rounded-xl w-[672px] border border-[#f6f8f7]">
        <div className="border-b flex flex-col py-8 px-6 w-full gap-4">
            <div className="flex items-center justify-center p-2" style={{ gap: '13.76px' }}>
                <img className="w-[35.622px] h-[40px]" src={logo} alt="logo" />
                <span className="text-[#181D27] text-[30px] leading-[33px] font-satoshi font-normal">
                    CodeAnt AI
                </span>
             </div>

            <div className="flex justify-center items-center mt-3 w-full h-[48px] text-[#181D27] text-center text-3xl font-semibold leading-[48px] font-inter gap-[20px]">
                Welcome to CodeAnt AI
            </div>

            <div className="bg-[#FAFAFA] border rounded-xl flex">
                <button
                    className={`p-3 rounded-xl w-1/2 ${saas ? "bg-[#1570EF] text-white" : ""}`}
                    onClick={() => setSaas(true)}
                >
                    SAAS
                </button>
                <button
                    className={`p-3 rounded-xl w-1/2 ${saas ? "" : "bg-[#1570EF] text-white"}`}
                    onClick={() => setSaas(false)}
                >
                    Self Hosted
                </button>
            </div>
        </div>

        <div className="flex flex-col py-6 px-0">
          <div className="flex items-center justify-center w-full font-inter">
            {saas ? (
              <div className="flex items-center flex-col justify-center w-full gap-4 max-w-[400px]">
                <a
                  href="/"
                  className="border items-center flex w-full gap-4 p-2 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px] font-sans"
                  style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                  
                >
                  <img src={git} alt="github" className="w-6 h-6" />
                  Sign in with Github
                </a>
                <a
                    href="/"
                    className="border items-center flex w-full gap-4 p-2 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px] font-sans"
                    style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                    >
                    <img
                        src={bit}
                        alt="bitbucket"
                        className="w-6 h-6"
                    />
                    Sign in with Bitbucket
                </a>

                <a
                  href="/"
                  className="border items-center flex w-full gap-4 p-2 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px] font-sans"
                    style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                    
                >
                  <img
                    src={azure}
                    alt="azure-devops"
                    className="w-6 h-6"
                  />
                  Sign in with Azure Devops
                </a>
                <a
                  href="/"
                  className="border items-center flex w-full gap-4 p-2 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px] font-sans"
                    style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                    
                >
                  <img src={gitlab} alt="gitlab" className="w-6 h-6" />
                  Sign in with GitLab
                </a>
              </div>
            ) : (
              <div className="flex items-center flex-col justify-center w-[672px] gap-4 max-w-[400px] ">
                <a
                  href="/"
                  className="border items-center flex w-full gap-4 p-3 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px] font-sans"
                    style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                    
                >
                  <img src={gitlab} alt="gitlab" className="w-6 h-6 gap-4" />
                  Self Hosted GitLab
                </a>
                <a
                  href="/"
                  className="border items-center flex w-full gap-4 p-3 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px] font-sans"
                    style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
                >
                  <img src={icon} className="w-6 h-6 gap-4" />
                  Sign in with SSO
                </a>
                <div className="h-[84px]">
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
      <span
        className="text-[#181D27] text-center text-[16px] font-normal leading-[24px]"
        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
        By signing up you agree to the 
        <b className="font-bold"> Privacy Policy</b>.
        </span>
        
      </div>
    </div>
  );
};

export default Common;
