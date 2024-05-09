import React from "react";
import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="px-5 font-medium text-grayDarker whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex w-full justify-around mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image width={32} height={32} src="/hotel-icon.png" alt="Hotel" />
          <p className="text-sm text-grayDarker">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={32} height={32} src="/farm-icon.png" alt="Fazenda" />
          <p className="text-sm text-grayDarker">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={32} height={32} src="/cottage-icon.png" alt="Chalé" />
          <p className="text-sm text-grayDarker">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={32} height={32} src="/inn-icon.png" alt="Pousada" />
          <p className="text-sm text-grayDarker">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
