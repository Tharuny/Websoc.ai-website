import React from "react";

const StudentReview = ({ studentImage, studentTitle, studentDescription }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded overflow-hidden object-cover p-4 shadow-2xl">
        <img
          className="h-[170px] w-[170px] rounded-full border-2 border-white object-cover mb-4 mt-2"
          src={studentImage}
          alt="Sunset in the mountains"
        />
        <div className="px-6 text-center">
          <div className="font-bold text-xl mb-2 text-gray-800">
            {studentTitle}
          </div>
          <p className="text-gray-800 text-base max-h-32  overflow-y-auto md:max-h-full md:overflow-y-auto sm:max-h-full sm:overflow-y-auto">
            {studentDescription}
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentReview;
