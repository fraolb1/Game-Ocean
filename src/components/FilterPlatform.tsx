import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelected: (platform: Platform) => void;
}

const FilterPlatform = ({ onSelected }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((platfrom) => (
          <MenuItem key={platfrom.id} onClick={() => onSelected(platfrom)}>
            {platfrom.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterPlatform;
