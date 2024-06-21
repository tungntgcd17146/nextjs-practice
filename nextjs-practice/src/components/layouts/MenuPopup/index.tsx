import { memo, useCallback } from "react";

//mui
import Popover from "@mui/material/Popover";
import { useTheme } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Grid from "@mui/material/Grid";

//components
import List from "@mui/material/List";
import NavItem from "@/src/components/ui/NavItem/";
import Divider from "@mui/material/Divider";

//utils
import useScreenWidth from "@/src/hooks/useScreenWidth";
import { themes } from "@/src/themes";
import { menuItems } from "@/src/mocks/menuPopup";

export interface Props {
  onCloseModal: () => void;
  anchorEl: HTMLElement | null;
}

const MenuPopup = ({ anchorEl, onCloseModal }: Props) => {
  //disable apply and reset button when all value is default
  const theme = useTheme();
  const { isMobile } = useScreenWidth();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleNavItemClick = useCallback(() => {
    onCloseModal();
  }, [onCloseModal]);

  return (
    <>
      <Backdrop
        sx={{
          color: themes.colors.white[500],
          zIndex: theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={onCloseModal}
      />
      <Popover
        data-testid="ProductFilter_Popover"
        slotProps={{
          paper: {
            sx: isMobile
              ? {
                  width: "80%",
                  borderRadius: "12px",
                }
              : { borderRadius: "16px", width: "280px", padding: "16px" },
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onCloseModal}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: isMobile ? "center" : "right",
        }}
      >
        <Grid container display="flex" flexDirection="column">
          <List>
            {menuItems.map((item, index) => {
              const { text, icon, go, isDivider } = item;

              return isDivider ? (
                <Divider
                  key={index}
                  sx={{ color: theme.palette.grey[100], marginBottom: "12px" }}
                />
              ) : (
                <NavItem
                  onNavItemClick={handleNavItemClick}
                  go={go}
                  key={index}
                  icon={icon}
                  text={text}
                  index={index}
                  // isSelected={pathname.includes(go!)}
                  isShowText={true}
                />
              );
            })}
          </List>
        </Grid>
      </Popover>
    </>
  );
};

export default memo(MenuPopup);
