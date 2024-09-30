import { StyledList, StyledItemList } from "./List.style";
import { Paragraph } from "../Paragraph/Paragraph";
import IconList from "../../../../assets/images/icon-list.svg";

export const List = () => {
  return (
    <StyledList>
      <StyledItemList>
        <img src={IconList} alt="" />
        <Paragraph content={"Product discovery and building what matters"} />
      </StyledItemList>
      <StyledItemList>
        <img src={IconList} alt="" />
        <Paragraph content={"Measuring to ensure updates are a success"} />
      </StyledItemList>
      <StyledItemList>
        <img src={IconList} alt="" />
        <Paragraph content={"And much more!"} />
      </StyledItemList>
    </StyledList>
  );
};
