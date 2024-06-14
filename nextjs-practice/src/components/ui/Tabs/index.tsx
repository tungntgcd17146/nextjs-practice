import { memo, useCallback, useState } from "react";

//mui
import { Tabs as MuiTabs, styled } from "@mui/material";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import useScreenWidth from "@/src/hooks/useScreenWidth";

// type
import { NavigateItem } from "@/src/types";
import { useRouter } from "next/navigation";

export interface Props {
  onTabClick?: (event: React.MouseEvent<HTMLElement>) => void;
  //onTabsChange?: (event: React.SyntheticEvent, newValue: number) => void;
  tabItems: NavigateItem[];
  tabSelected: number;
  sx?: React.CSSProperties;
}

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.primary,
  "&.Mui-selected": {
    borderRadius: "8px",
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.secondary,
  },
  "&.Mui-disabled": {
    color: theme.palette.text.disabled,
    opacity: 0.5,
  },
}));

const Tabs = ({ onTabClick, tabSelected, tabItems, sx }: Props) => {
  //Tab state for init selected default
  const [value, setValue] = useState(tabSelected);
  const { isMobile } = useScreenWidth();

  const router = useRouter();

  const handleChangeTab = useCallback(
    (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    },
    [],
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    handleChangeTab?.(event, newValue);
  };

  const handleClickTabItem = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    go?: string,
  ) => {
    onTabClick?.(e);

    router.push(go || "");
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <MuiTabs
          TabIndicatorProps={{ sx: { height: "0px" } }}
          variant={isMobile ? "fullWidth" : "standard"}
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          {tabItems.map((item, index) => {
            const { text, isDisabled, go } = item;

            return (
              <StyledTab
                data-testid="Tabs_StyledTab"
                onClick={(e) => handleClickTabItem(e, go)}
                label={text}
                disabled={isDisabled}
                key={index}
              />
            );
          })}
        </MuiTabs>
      </Box>
    </Box>
  );
};

export default memo(Tabs);
