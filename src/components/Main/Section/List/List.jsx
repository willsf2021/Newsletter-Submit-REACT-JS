import { StyledList, StyledItemList } from "./List.style";
import { Paragraph } from "../Paragraph/Paragraph";

export const List = () => {
  return (
    <StyledList>
      <StyledItemList>
        <Paragraph content={"Product discovery and building what matters"} />
      </StyledItemList>
      <StyledItemList>
        <Paragraph content={"Measuring to ensure updates are a success"} />
      </StyledItemList>
      <StyledItemList>
        <Paragraph content={"And much more!"} />
      </StyledItemList>
    </StyledList>
  );
};
