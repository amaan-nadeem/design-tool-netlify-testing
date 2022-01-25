import { useState } from "react";

// Components
import Popover from "../../../components/common/Popover";
import Backdrop from "../../../components/common/Backdrop";

// Styled
import { HelpStyled, HelpContainerStyled } from "./styled";

const Help = () => {
  const [opened, setOpened] = useState<boolean>(false);

  const closeModal = () => {
    setOpened(false);
  };
  const toggleModal = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>
      <HelpContainerStyled opened={opened}>
        <HelpStyled onClick={toggleModal}>?</HelpStyled>
        {opened && (
          <Popover
            bottom={50}
            right={0}
            activeChildren={""}
            items={[
              {
                id: "item-1",
                onClick: () => {},
                text: "item 1",
              },
              {
                id: "item-1",
                onClick: () => {},
                text: "item 2",
              },
              {
                id: "item-1",
                onClick: () => {},
                text: "item 3",
              },
            ]}
          />
        )}
      </HelpContainerStyled>
      {opened && <Backdrop onClick={closeModal} />}
    </>
  );
};

export default Help;
