import React from "react";

function PageHeader({title}) {

  return (
    <div className="h-[6vh] pt-2 w-full flex justify-center align-center">
      <div className="absolute top-0 left-0 mt-2 ml-3">
        <svg
          width="30"
          height="30"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="17" height="24" transform="translate(4)" fill="white" />
          <g clip-path="url(#clip0_9_960)">
            <path
              d="M8.328 11H20.5V13H8.328L13.692 18.364L12.278 19.778L4.5 12L12.278 4.22205L13.692 5.63605L8.328 11Z"
              fill="#4E4B66"
            />
          </g>
          <defs>
            <clipPath id="clip0_9_960">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="text-2xl">
        {title}
      </div>
    </div>
  );
}

export default PageHeader;
