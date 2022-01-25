import { useState } from "react";

// Styled
import { InputContainerStyled, SearchResultsStyled } from "./styled";

// Components
import Widget from "../";
import Input from "../../formElements/Input";

//
import { Search, Add } from "../../icons";

const allEffectsList = [
  "Cinema 4d",
  "Blender",
  "3ds Max",
  "Maya",
  "Premier Pro",
  "Photoshop",
  "Mattee",
  "XD",
  "Figma",
  "Vs Code",
];

const AnimationEffects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Widget
      title="Effects"
      titleControls={
        <div>
          <Add color="#fff" size={0.55} />
        </div>
      }
    >
      <InputContainerStyled>
        <Input
          id="search-effects"
          name="search-effects"
          start={<Search color="#fff" size={0.6} />}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        {searchQuery && (
          <SearchResultsStyled>
            <ul className="effects-list">
              {allEffectsList
                .filter((item) =>
                  item.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </SearchResultsStyled>
        )}
      </InputContainerStyled>
    </Widget>
  );
};

export default AnimationEffects;
