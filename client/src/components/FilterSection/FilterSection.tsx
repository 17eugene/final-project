import { useState, useCallback, MouseEvent, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

import FilterBlock from "../FilterBlock/FilterBlock";
import FilterBlockHeader from "../FilterBlockHeader/FilterBlockHeader";
import FilterBlockBody from "../FilterBlockBody/FilterBlockBody";
import FilterElement from "../FilterElement/FilterElement";

import { filterData } from "../../filterData";

import "../../styles/FilterSection/FilterSection.scss";

interface IFilterSectionProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchParams: URLSearchParams;
  checkedOptions: string[];
  theme: string | null;
}

const FilterSection = ({ onChange, searchParams, theme }: IFilterSectionProps) => {
  const [isOpenedFilterByClass, setIsOpenedFilterByClass] =
    useState<boolean>(true);
  const [isOpenedFilterByBody, setIsOpenedFilterByBody] =
    useState<boolean>(false);
  // const [isOpenedFilterByTransmission, setIsOpenedFilterByTransmission] =
  //   useState<boolean>(false);
  // const [isOpenedFilterByFuel, setIsOpenedFilterByFuel] =
  //   useState<boolean>(false);

  const { t } = useTranslation();

  const toggleFilterMenu = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (
        e.currentTarget.parentElement?.firstElementChild?.className
          .toLowerCase()
          .includes("class")
      ) {
        setIsOpenedFilterByClass(!isOpenedFilterByClass);
        return;
      }

      if (
        e.currentTarget.parentElement?.firstElementChild?.className
          .toLowerCase()
          .includes("body")
      ) {
        console.log();
        setIsOpenedFilterByBody(!isOpenedFilterByBody);
        return;
      }

      // if (
      //   e.currentTarget
      //     .closest(".toggle-icon-wrapper")
      //     ?.previousSibling?.textContent?.toLowerCase()
      //     .includes("transmission")
      // ) {
      //   setIsOpenedFilterByTransmission(!isOpenedFilterByTransmission);
      //   return;
      // }

      // if (
      //   e.currentTarget
      //     .closest(".toggle-icon-wrapper")
      //     ?.previousSibling?.textContent?.toLowerCase()
      //     .includes("fuel")
      // ) {
      //   setIsOpenedFilterByFuel(!isOpenedFilterByFuel);
      //   return;
      // }
    },
    [
      isOpenedFilterByClass,
      // isOpenedFilterByTransmission,
      // isOpenedFilterByFuel,
      isOpenedFilterByBody,
    ]
  );

  return (
    <div className="filter-section">
      <FilterBlock theme={theme}>
        <FilterBlockHeader
          text={t("filterTitleClass")}
          onClick={toggleFilterMenu}
          isOpenedFilter={isOpenedFilterByClass}
          variant="class"
          theme={theme}
        />
        {isOpenedFilterByClass && (
          <FilterBlockBody theme={theme}>
            {filterData.classType.map((type) => (
              <FilterElement
                key={type.id}
                type={type}
                onChange={onChange}
                checked={searchParams.has(type.value)}
              />
            ))}
          </FilterBlockBody>
        )}
      </FilterBlock>

      <FilterBlock theme={theme}>
        <FilterBlockHeader
          text={t("filterTitleBody")}
          onClick={toggleFilterMenu}
          isOpenedFilter={isOpenedFilterByBody}
          variant="body"
          theme={theme}
        />
        {isOpenedFilterByBody && (
          <FilterBlockBody theme={theme}>
            {filterData.bodyType.map((type) => (
              <FilterElement
                key={type.id}
                type={type}
                onChange={onChange}
                checked={searchParams.has(type.value)}
              />
            ))}
          </FilterBlockBody>
        )}
      </FilterBlock>

      {/* <FilterBlock>
          <FilterBlockHeader
            text="Transmission type"
            onClick={toggleFilterMenu}
            isOpenedFilter={isOpenedFilterByTransmission}
          />
          {isOpenedFilterByTransmission && (
            <FilterBlockBody>
              {filterData.transmissionType.map((type) => (
                <FilterElement
                  key={type.id}
                  type={type}
                  onChange={onChange}
                  checked={searchParams.has(type.value)}
                />
              ))}
            </FilterBlockBody>
          )}
        </FilterBlock> */}

      {/* <FilterBlock>
          <FilterBlockHeader
            text="Fuel type"
            onClick={toggleFilterMenu}
            isOpenedFilter={isOpenedFilterByFuel}
          />
          {isOpenedFilterByFuel && (
            <FilterBlockBody>
              {filterData.fuelType.map((type) => (
                <FilterElement
                  key={type.id}
                  type={type}
                  onChange={onChange}
                  checked={searchParams.has(type.value)}
                />
              ))}
            </FilterBlockBody>
          )}
        </FilterBlock> */}
    </div>
  );
};

export default FilterSection;
