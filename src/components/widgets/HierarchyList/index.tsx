import React, { useState } from "react";

// Components
import {
  HierarchyListItemStyled,
  HierarchyListItemIconStyled,
  HierarchyListItemTextStyled,
  HierarchyListItemButtonStyled,
} from "./styled";

//
import { NumberSymbol, DownAngle } from "../../../components/icons";

export type HierarchyElement = {
  title: string;
  type: "layer" | "frame" | "text";
  childrens?: HierarchyElement[];
};

type HierarchyListProps = {
  element: HierarchyElement;
  layer: number;
};

const HierarchyList: React.FC<HierarchyListProps> = ({ element, layer }) => {
  const [childsOpen, setChildsOpen] = useState(false);

  const hasChildrens = Boolean(
    element.childrens && element.childrens.length !== 0
  );

  return (
    <div>
      <HierarchyListItemStyled>
        <HierarchyListItemIconStyled layer={layer}>
          <NumberSymbol color="#fff" size={0.6} />
        </HierarchyListItemIconStyled>
        <HierarchyListItemTextStyled>
          {element.title}
        </HierarchyListItemTextStyled>
        {hasChildrens && (
          <HierarchyListItemButtonStyled
            open={childsOpen}
            onClick={() => setChildsOpen((prev) => !prev)}
          >
            <span className="icon">
              <DownAngle size={0.4} color="#fff" />
            </span>
          </HierarchyListItemButtonStyled>
        )}
      </HierarchyListItemStyled>
      {hasChildrens && childsOpen && (
        <ul>
          {element.childrens?.map((child) => (
            <HierarchyList element={child} layer={layer + 1} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HierarchyList;
