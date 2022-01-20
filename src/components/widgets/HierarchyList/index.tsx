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
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/store";
import { selectLayer } from "../../../store/slices/selectionSlice";

export type HierarchyElement = {
  id: string;
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
  const dispatch = useAppDispatch();
  const { layer: selectedLayer } = useAppSelector((state) => state.selection);

  const hasChildrens = Boolean(
    element.childrens && element.childrens.length !== 0
  );

  const selectItem: React.MouseEventHandler = () => {
    dispatch(selectLayer(element.id));
  };

  return (
    <div>
      <HierarchyListItemStyled
        onClick={selectItem}
        isActive={selectedLayer === element.id}
      >
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
