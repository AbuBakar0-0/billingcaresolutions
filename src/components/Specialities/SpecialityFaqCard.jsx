import React from 'react';

const SpecialityFaqCard = ({ data, isOpen, onClick }) => {
  return (
    <div className="w-full mx-auto bg-gray-100 rounded-lg shadow-md">
      <div
        className="p-4 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-t-lg"
        onClick={onClick}
      >
        <h2 className="text-md font-semibold text-gray-800">{data.question}</h2>
      </div>
      <div
        className={`overflow-hidden  ${isOpen ? 'max-h-screen transition-all duration-500 ease-in-out' : 'max-h-0'
          }`}
      >
        <div className="p-4 bg-secondary border-t border-gray-300 rounded-b-lg">
          <div
            className="article-content text-white"
            dangerouslySetInnerHTML={{ __html: data.answer }}
          />

        </div>
      </div>
    </div>
  );
};

export default SpecialityFaqCard;
