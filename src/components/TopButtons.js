import React from "react";

function TopButtons({ setCity }) {
  const cities = [
    {
      id: 0,
      title: "Warsaw",
    },
    {
      id: 1,
      title: "Sahara",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => setCity({ q: city.title })}
          key={city.id}
          className="text-lg font-medium text-white "
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
