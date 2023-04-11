import ButtonsGroup from "components/materialComponents/ButtonsGroup";
import { getStatusFilters } from "constantData";
import { useState } from "react";
import { eventsStyles } from "../style";

export default function ButtonGroup(props) {
  const filters = getStatusFilters();
  const classes = eventsStyles();
  const [selectedFilter, setSelectedFilter] = useState(getStatusFilters()[0]);
  const [selectedFilterIdx, setSelectedFilterIdx] = useState(0);
  return (
    <ButtonsGroup
      selectedBtnIdx={props.selectedFilterIdx}
      onButtonClick={(filterIdx) => {
        props.setSelectedFilter(filters[filterIdx]);
        props.setSelectedFilterIdx(filterIdx);
      }}
      btns={filters}
    />
  );
}
