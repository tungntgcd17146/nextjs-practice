import { memo } from "react";
import { themes } from "@/src/themes";

import { Theme } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";

export interface Props {
  icon?: React.ReactNode;
  text?: string;
  index?: number;
  onNavItemClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isSelected?: boolean;
  go?: string;
  isShowText?: boolean;
}

const listItemButtonStyles = (theme: Theme) => ({
  fontSize: "15px",
  borderRadius: "12px",
  height: "48px",
  padding: "0 12px",
  marginBottom: "8px",
  "&.Mui-selected": {
    boxShadow: `inset 0px -2px 1px ${themes.colors.black[400]}, inset 0px 1px 1px r ${themes.colors.white[500]}`,
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.secondary,
  },
  "&.Mui-selected:hover": {
    backgroundColor: theme.palette.grey[100],
  },
});

const NavItem = ({
  icon,
  text,
  index,
  onNavItemClick,
  isSelected,
  isShowText,
  go,
}: Props) => {
  const router = useRouter();

  const handleClickItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();

    onNavItemClick?.(e);
    router.push(go || "");
  };

  return (
    <ListItem key={index} disablePadding>
      <ListItemButton
        onClick={handleClickItem}
        data-testid="NavItem_ListItemButton"
        selected={isSelected}
        sx={listItemButtonStyles}
      >
        {icon && (
          <ListItemIcon
            data-testid="NavItem_ListItemIcon"
            sx={{ width: "24px", height: "24px" }}
          >
            {icon}
          </ListItemIcon>
        )}
        {isShowText && (
          <ListItemText
            data-testid="NavItem_ListItemText"
            sx={{ fontSize: "15px", marginLeft: "12px" }}
            primary={text}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default memo(NavItem);
