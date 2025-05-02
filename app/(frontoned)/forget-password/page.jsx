import React, { Suspense } from "react";
import ForgetPassword from "@/components/auth/ForgetPassword";
export const dynamic = 'force-dynamic';
const SignIn = async () => {
  return (
    <>
      {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
      <div className="min-h-[700px]  bg-gray-100 text-gray-900 flex justify-center py-12">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 ">
        <Suspense fallback={<div>Loading...</div>}>
          <ForgetPassword />
          </Suspense>
          <div className="flex-1 bg-indigo-100  shadow sm:rounded-r-lg text-center hidden lg:flex " style={{
                backgroundImage:
                  'url("/forgot-password.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover', // or 'contain' based on your needs
                  backgroundPosition: 'center' // Adjust as needed
              }}>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default SignIn;