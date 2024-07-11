"use strict";(self.webpackChunknextjs_practice=self.webpackChunknextjs_practice||[]).push([[2838],{"./src/components/ui/ContactItem/ContactItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContactItemFollowers:()=>ContactItemFollowers,ContactItemFollowing:()=>ContactItemFollowing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ContactItem_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),themes=__webpack_require__("./src/themes.ts"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),Grid=__webpack_require__("./node_modules/@mui/material/Grid/Grid.js"),ImageList=__webpack_require__("./node_modules/@mui/material/ImageList/ImageList.js"),ImageListItem=__webpack_require__("./node_modules/@mui/material/ImageListItem/ImageListItem.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js");const User1={src:"static/media/User1.3e8f321c.webp",height:62,width:64,blurDataURL:"static/media/User1.3e8f321c.webp"};var Avatar=__webpack_require__("./src/components/ui/Avatar/index.tsx"),Button=__webpack_require__("./src/components/ui/Button/index.tsx");const userImageData=[{img:{src:"static/media/Product1.9d1b1635.webp",height:600,width:600,blurDataURL:"static/media/Product1.9d1b1635.webp"},imgTitle:"product 1"},{img:{src:"static/media/Product2.b79fc5d9.webp",height:600,width:600,blurDataURL:"static/media/Product2.b79fc5d9.webp"},imgTitle:"product 2"},{img:{src:"static/media/Product3.5df3348e.webp",height:600,width:600,blurDataURL:"static/media/Product3.5df3348e.webp"},imgTitle:"product 3"}],fakeUserContact={id:1,userName:"Rosetta Gottlieb",productNumber:12,followerNumber:23,contactStatus:"followers"};var useScreenWidth=__webpack_require__("./src/hooks/useScreenWidth.tsx"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const ContactItem=param=>{let{user,onChangeFollowButtonStatus,onClickMessageButton}=param;const[followButtonStatus,setFollowButtonStatus]=(0,react.useState)(""),theme=(0,useTheme.A)();(0,react.useEffect)((()=>{"following"===user.contactStatus?setFollowButtonStatus("Unfollow"):setFollowButtonStatus("Follow")}),[user.contactStatus]);const{isMobile,matchedBreakpoint:isHideImageList}=(0,useScreenWidth.A)({down:"lg"}),handleClickFollow=(0,react.useCallback)((e=>{setFollowButtonStatus((prev=>"Follow"===prev?"Following":"Unfollow"===prev?"Follow":prev)),null==onChangeFollowButtonStatus||onChangeFollowButtonStatus(e)}),[onChangeFollowButtonStatus]),handleClickMessageButton=(0,react.useCallback)((e=>{null==onClickMessageButton||onClickMessageButton(e)}),[onClickMessageButton]),{userName,productNumber,followerNumber}=user;return(0,jsx_runtime.jsxs)(Grid.Ay,{container:!0,display:"flex",flexDirection:"column",children:[(0,jsx_runtime.jsxs)(Grid.Ay,{display:"flex",flexDirection:"row",container:!0,children:[(0,jsx_runtime.jsxs)(Grid.Ay,{"data-testid":"ContactItem",item:!0,display:"flex",flexDirection:"row",lg:6,children:[(0,jsx_runtime.jsx)(Avatar.A,{avtBackground:themes.Z.colors.yellow[500],imgNextSrc:User1,alt:"User1",size:"medium"}),(0,jsx_runtime.jsxs)(Grid.Ay,{sx:{marginLeft:"16px"},display:"flex",flexDirection:"column",children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"overline",sx:{color:theme.palette.text.secondary,fontSize:isMobile?"18px":"20px"},children:userName}),(0,jsx_runtime.jsxs)(Grid.Ay,{display:"flex",flexDirection:"row",alignItems:"center",children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"body1",sx:{color:theme.palette.text.primary,marginRight:"5px"},children:productNumber}),(0,jsx_runtime.jsx)(Typography.A,{variant:"body1",sx:{color:theme.palette.text.primary},children:"Products"}),(0,jsx_runtime.jsx)(Divider.A,{orientation:"vertical",sx:{color:theme.palette.text.primary,marginLeft:"16px",marginRight:"16px",height:"12px",textAlign:"center"}}),(0,jsx_runtime.jsx)(Typography.A,{variant:"body1",sx:{color:theme.palette.text.primary,marginRight:"5px"},children:followerNumber}),(0,jsx_runtime.jsx)(Typography.A,{variant:"body1",sx:{color:theme.palette.text.primary},children:"Followers"})]}),(0,jsx_runtime.jsxs)(Grid.Ay,{sx:{marginTop:"16px"},children:[(0,jsx_runtime.jsx)(Button.A,{"aria-label":"follow-user","data-testid":"ContactItem_FollowButton",sx:{marginRight:"8px"},children:followButtonStatus,size:"small",color:"Following"===followButtonStatus?"success":"inherit",onClick:handleClickFollow}),(0,jsx_runtime.jsx)(Button.A,{disabled:!0,"aria-label":"message-user","data-testid":"ContactItem_MessageButton",children:"Message",size:"small",color:"primary",onClick:handleClickMessageButton})]})]})]}),(0,jsx_runtime.jsx)(Grid.Ay,{item:!0,lg:6,display:"flex",justifyContent:"flex-end",children:!isHideImageList&&(0,jsx_runtime.jsx)(ImageList.A,{sx:{width:"480px",height:"128px"},cols:3,children:userImageData.map(((item,index)=>(0,jsx_runtime.jsx)(ImageListItem.A,{children:(0,jsx_runtime.jsx)(Box.A,{style:{width:"100%",height:"125px",position:"relative"},children:(0,jsx_runtime.jsx)(next_image.A,{fill:!0,objectFit:"cover",src:item.img,alt:item.imgTitle,style:{borderRadius:"12px"},loading:"lazy",sizes:"100%"})})},index)))})})]}),(0,jsx_runtime.jsx)(Divider.A,{sx:{margin:"24px 0",color:theme.palette.grey[100]}})]})},ui_ContactItem=(0,react.memo)(ContactItem);try{ContactItem.displayName="ContactItem",ContactItem.__docgenInfo={description:"",displayName:"ContactItem",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"UserContact"}},onChangeFollowButtonStatus:{defaultValue:null,description:"",name:"onChangeFollowButtonStatus",required:!1,type:{name:"((e: MouseEvent<HTMLElement, MouseEvent>) => void)"}},onClickMessageButton:{defaultValue:null,description:"",name:"onClickMessageButton",required:!1,type:{name:"((e: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ContactItem/index.tsx#ContactItem"]={docgenInfo:ContactItem.__docgenInfo,name:"ContactItem",path:"src/components/ui/ContactItem/index.tsx#ContactItem"})}catch(__react_docgen_typescript_loader_error){}var _ContactItemFollowers_parameters,_ContactItemFollowers_parameters_docs,_ContactItemFollowers_parameters1,_ContactItemFollowing_parameters,_ContactItemFollowing_parameters_docs,_ContactItemFollowing_parameters1;const ContactItem_stories={title:"Ui components/ContactItem",component:ui_ContactItem,parameters:{layout:"centered"},tags:["autodocs"]},ContactItemFollowers={args:{user:fakeUserContact}},ContactItemFollowing={args:{user:{...fakeUserContact,contactStatus:"following"}}};ContactItemFollowers.parameters={...ContactItemFollowers.parameters,docs:{...null===(_ContactItemFollowers_parameters=ContactItemFollowers.parameters)||void 0===_ContactItemFollowers_parameters?void 0:_ContactItemFollowers_parameters.docs,source:{originalSource:"{\n  args: {\n    user: fakeUserContact\n  }\n}",...null===(_ContactItemFollowers_parameters1=ContactItemFollowers.parameters)||void 0===_ContactItemFollowers_parameters1||null===(_ContactItemFollowers_parameters_docs=_ContactItemFollowers_parameters1.docs)||void 0===_ContactItemFollowers_parameters_docs?void 0:_ContactItemFollowers_parameters_docs.source}}},ContactItemFollowing.parameters={...ContactItemFollowing.parameters,docs:{...null===(_ContactItemFollowing_parameters=ContactItemFollowing.parameters)||void 0===_ContactItemFollowing_parameters?void 0:_ContactItemFollowing_parameters.docs,source:{originalSource:"{\n  args: {\n    user: {\n      ...fakeUserContact,\n      contactStatus: 'following'\n    }\n  }\n}",...null===(_ContactItemFollowing_parameters1=ContactItemFollowing.parameters)||void 0===_ContactItemFollowing_parameters1||null===(_ContactItemFollowing_parameters_docs=_ContactItemFollowing_parameters1.docs)||void 0===_ContactItemFollowing_parameters_docs?void 0:_ContactItemFollowing_parameters_docs.source}}};const __namedExportsOrder=["ContactItemFollowers","ContactItemFollowing"]},"./src/components/ui/Avatar/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_mui_material_Badge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Badge/Badge.js"),_barrel_optimize_names_Avatar_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_barrel_optimize_names_Avatar_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Avatar/Avatar.js"),_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs");const StyledBadge=(0,_barrel_optimize_names_Avatar_styled_mui_material__WEBPACK_IMPORTED_MODULE_3__.Ay)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_4__.A)((param=>{let{theme}=param;return{"& .MuiBadge-badge":{border:"1px solid ".concat(theme.palette.primary.main),padding:0,margin:0,width:24,height:24,borderRadius:"100%",backgroundColor:theme.palette.info.main,color:theme.palette.primary.main,"&::after":{position:"absolute",top:0,left:0,width:"16px",height:"16px",borderRadius:"50%"}}}})),Avatar=param=>{let{imgNextSrc,BadgeIcon,onClick,size="medium",avtBackground,alt,sx,badgeSx,imgWidth,imgHeight,badgeAnchorOrigin={vertical:"bottom",horizontal:"right"},...rest}=param;const getSize=sizes=>{switch(sizes){case"small":return"48px";case"medium":return"64px";case"large":return"80px"}},avtCommonStyle={width:getSize(size),height:getSize(size),backgroundColor:avtBackground,cursor:"pointer"};return BadgeIcon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledBadge,{"data-testid":"Avatar_StyledBadge",overlap:"circular",anchorOrigin:badgeAnchorOrigin,badgeContent:BadgeIcon,onClick,sx:badgeSx,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Avatar_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{sx:{...avtCommonStyle,...sx},...rest,children:imgWidth&&imgHeight?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.A,{sx:{width:imgWidth,height:imgHeight,position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{fill:!0,sizes:"100%",style:{objectFit:"cover"},alt,src:imgNextSrc})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{alt,src:imgNextSrc,fill:!0,style:{objectFit:"cover"},sizes:"100%"})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Avatar_styled_mui_material__WEBPACK_IMPORTED_MODULE_5__.A,{sx:{...avtCommonStyle,...sx},"data-testid":"Avatar_MuiAvatar",onClick,...rest,children:imgWidth&&imgHeight?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__.A,{sx:{width:imgWidth,height:imgHeight,position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{fill:!0,sizes:"100%",style:{objectFit:"cover"},alt,src:imgNextSrc})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{alt,src:imgNextSrc,fill:!0,style:{objectFit:"cover"},sizes:"100%"})})},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Avatar);try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{imgNextSrc:{defaultValue:null,description:"",name:"imgNextSrc",required:!0,type:{name:"string | StaticImport"}},alt:{defaultValue:null,description:"Used in combination with `src` or `srcSet` to\nprovide an alt attribute for the rendered `img` element.",name:"alt",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},avtBackground:{defaultValue:null,description:"",name:"avtBackground",required:!1,type:{name:"string"}},BadgeIcon:{defaultValue:null,description:"",name:"BadgeIcon",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLElement, MouseEvent>) => void)"}},badgeSx:{defaultValue:null,description:"",name:"badgeSx",required:!1,type:{name:"CSSProperties"}},badgeAnchorOrigin:{defaultValue:{value:"{ vertical: 'bottom', horizontal: 'right' }"},description:"",name:"badgeAnchorOrigin",required:!1,type:{name:'{ vertical: "bottom" | "top"; horizontal: "left" | "right"; }'}},imgWidth:{defaultValue:null,description:"",name:"imgWidth",required:!1,type:{name:"number"}},imgHeight:{defaultValue:null,description:"",name:"imgHeight",required:!1,type:{name:"number"}},slots:{defaultValue:{value:"{}"},description:"The components used for each slot inside.",name:"slots",required:!1,type:{name:"AvatarSlots"}},slotProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside.",name:"slotProps",required:!1,type:{name:"{ img?: SlotProps<ElementType<ImgHTMLAttributes<HTMLImageElement>>, {}, AvatarOwnProps>; }"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/ui/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_barrel_optimize_names_Button_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_barrel_optimize_names_Button_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Button/Button.js");const Button=param=>{let{color="primary",endIcon,startIcon,size="medium",type="button",sx,disabled,onClick,...rest}=param;const theme=(0,_barrel_optimize_names_Button_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(),commonStyle={minWidth:"100px",fontWeight:700,height:"48px",lineHeight:"20px",border:"2px solid ".concat(theme.palette.grey[100]),":disabled":{opacity:.5,pointerEvents:"none"}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.A,{"data-testid":"Button",color,startIcon,endIcon,type,sx:{...commonStyle,...(color=>{const{palette}=theme;switch(color){case"inherit":return{backgroundColor:palette.background.paper,color:palette.text.secondary,"&:hover":{borderColor:palette.text.secondary}};case"primary":return{backgroundColor:palette.info.main,color:palette.primary.main,"&:hover":{borderColor:palette.info.dark,backgroundColor:palette.info.dark}};case"success":return{backgroundColor:palette.grey[100],color:palette.text.secondary}}})(color),...(size=>{switch(size){case"small":return{borderRadius:"8px",padding:"8px 16px"};case"medium":return{borderRadius:"12px",padding:"12px 20px"}}})(size),...sx},onClick,disabled,...rest})},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Button);try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:null,description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"inherit"'},{value:'"success"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLElement, MouseEvent>) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/ui/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useScreenWidth.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),_barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js");const useScreenWidth=function(){let{only,up,down}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const theme=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.A)(),isMobile=(0,_barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(theme.breakpoints.down("md")),isTablet=(0,_barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(theme.breakpoints.between("md","xl")),isDesktop=(0,_barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(theme.breakpoints.up("xl")),onlyBreakpoint=(0,_barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(theme.breakpoints.only(only)),upBreakpoint=(0,_barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(theme.breakpoints.up(up)),downBreakpoint=(0,_barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(theme.breakpoints.down(down)),betweenBreakpoints=(0,_barrel_optimize_names_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_2__.A)(theme.breakpoints.between(up,down)),[matchedBreakpoint,setMatchedBreakpoint]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),betweenValue=!(!up||!down)&&betweenBreakpoints,exactBreakpoint=!(!only||!(!!only&&onlyBreakpoint)),matchedLarger=!(!up||!(!!up&&upBreakpoint)),matchedSmaller=!(!down||!(!!down&&downBreakpoint));return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{setMatchedBreakpoint(exactBreakpoint&&!matchedLarger&&!matchedSmaller||betweenValue||matchedLarger&&!matchedSmaller||matchedSmaller&&!matchedLarger)}),[betweenValue,exactBreakpoint,matchedLarger,matchedSmaller]),{matchedBreakpoint,isMobile,isTablet,isDesktop}},__WEBPACK_DEFAULT_EXPORT__=useScreenWidth;try{useScreenWidth.displayName="useScreenWidth",useScreenWidth.__docgenInfo={description:"",displayName:"useScreenWidth",props:{only:{defaultValue:null,description:"",name:"only",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},up:{defaultValue:null,description:"",name:"up",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},down:{defaultValue:null,description:"",name:"down",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useScreenWidth.tsx#useScreenWidth"]={docgenInfo:useScreenWidth.__docgenInfo,name:"useScreenWidth",path:"src/hooks/useScreenWidth.tsx#useScreenWidth"})}catch(__react_docgen_typescript_loader_error){}}}]);