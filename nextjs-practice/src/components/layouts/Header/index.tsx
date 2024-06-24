"use client";

import { useState, useCallback, useEffect,useMemo } from "react";
import useScreenWidth from "@/src/hooks/useScreenWidth";

//mui
import Box from "@mui/material/Box";
import { useTheme, Theme } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import Popper from "@mui/material/Popper";

//components
import Drawer from "@/src/components/layouts/Drawer/";
import IconButton from "@/src/components/ui/IconButton";
import Avatar from "@/src/components/ui/Avatar";
import Customer1 from "@/public/assets/customer1.webp";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

import { themes } from "@/src/themes";

//constants
import { navigationItems } from "@/src/mocks/sideNavigation";

//types
import MenuPopup from "@/src/components/layouts/MenuPopup";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const iconButtonStyles = (theme: Theme) => ({
  ":hover": { color: theme.palette.text.secondary },
});

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [searchIconAnchorEl, setSearchIconAnchorEl] =
    useState<null | HTMLElement>(null);
  const [searchInput, setSearchInput] = useState("");

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const {
    isMobile,
    isTablet,
    isDesktop,
    matchedBreakpoint: isDownLg,
  } = useScreenWidth({ down: "lg" });
  const theme = useTheme();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const query = params.get("query");
    if (!query) {
      setSearchInput("");
    }
  }, [searchParams]);

  const handleClickMobileSearchIcon = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setSearchIconAnchorEl(searchIconAnchorEl ? null : event.currentTarget);
    },
    [searchIconAnchorEl],
  );

  const generateSearchUrl = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    params.set("query", searchInput);

    return router.push(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchInput, searchParams]);

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
    },
    [],
  );

  const handleBlurSearchInput = useCallback(() => {
    generateSearchUrl();
  }, [generateSearchUrl]);

  const handleKeyDownSearchInput = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        generateSearchUrl();
      }
    },
    [generateSearchUrl],
  );

  const handleClickAvatar = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setMenuAnchorEl(searchIconAnchorEl ? null : event.currentTarget);
    },
    [searchIconAnchorEl],
  );

  const handleCloseMenu = useCallback(() => {
    setMenuAnchorEl(null);
  }, []);

  const openSearchInputPopup = Boolean(searchIconAnchorEl);

  const handleCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, [setIsOpenDrawer]);

  const handleOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, [setIsOpenDrawer]);

  const isShopProductsPage = useMemo(() => pathname === "/shop", [pathname]);

  return (
    <Box
      data-testid="Header"
      sx={{
        marginLeft: isTablet ? "80px" : isDesktop ? "330px" : "0px",
        padding: "24px",
        height: "96px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {isMobile ? (
        <IconButton
          aria-label="open"
          data-testid="Header_MenuIcon"
          children={<DragHandleIcon />}
          onClick={handleOpenDrawer}
        />
      ) : (
        <Input
          disabled={isShopProductsPage}
          value={searchInput}
          onKeyDown={handleKeyDownSearchInput}
          onBlur={handleBlurSearchInput}
          onChange={handleSearchInputChange}
          startIcon={<SearchIcon />}
          data-testid="Header_SearchInput"
          searchWidth="356px"
          placeholder="Search or type a command"
          endHelper="⌘ F"
        />
      )}
      <Drawer
        data-testid="Header_Drawer"
        isOpen={isOpenDrawer}
        onOpen={handleOpenDrawer}
        onClose={handleCloseDrawer}
        listItems={navigationItems}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
        }}
      >
        {/* search input on mobile */}
        {isMobile && (
          <>
            <IconButton
              aria-label="search-mobile"
              data-testid="Header_SearchInputIcon_Mobile"
              onClick={handleClickMobileSearchIcon}
              children={<SearchIcon />}
              size="large"
            />
            <Popper
              open={openSearchInputPopup}
              anchorEl={searchIconAnchorEl}
              sx={{ backgroundColor: theme.palette.grey[200], width: "100%" }}
            >
              <Box sx={{ padding: " 12px 16px" }}>
                <Input
                  disabled={isShopProductsPage}
                  value={searchInput}
                  onKeyDown={handleKeyDownSearchInput}
                  onBlur={handleBlurSearchInput}
                  onChange={handleSearchInputChange}
                  startIcon={<SearchIcon />}
                  data-testid="Header_SearchInput_Mobile"
                  placeholder="Search or type a command"
                />
              </Box>
            </Popper>
          </>
        )}

        {!isDownLg && (
          <Button
            aria-label="create"
            sx={{ width: "120px" }}
            startIcon={<AddIcon />}
            children="Create"
            color="primary"
          />
        )}
        <IconButton
          aria-label="chat-icon"
          badgeContent={0}
          children={<ChatBubbleOutlineIcon />}
          size="large"
          sx={iconButtonStyles}
        />
        <IconButton
          aria-label="notification-icon"
          badgeContent={0}
          children={<NotificationsNoneIcon />}
          size="large"
          sx={iconButtonStyles}
        />

        <Avatar
          avtBackground={themes.colors.yellow[600]}
          size="small"
          imgNextSrc={Customer1}
          alt="Customer1"
          onClick={handleClickAvatar}
        />
        <MenuPopup anchorEl={menuAnchorEl} onCloseModal={handleCloseMenu} />
      </div>
    </Box>
  );
};

export default Header;
