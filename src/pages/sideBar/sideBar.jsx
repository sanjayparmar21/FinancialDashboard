import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GridViewIcon from '@mui/icons-material/GridView';
import InboxIcon from '@mui/icons-material/Inbox';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Badge, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import './styles.css';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function SideBar() {
  return (
    <>
      <ProSidebar style={{ marginTop: "0vw"}}> {/* collapsed */}
        <SidebarContent>
          <Menu iconShape="square">
            <Menu title="Components" icon={<PermIdentityIcon />}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <ListItem sx={{ marginRight: '-1vw' }}> 
                  <Avatar 
                    src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg" 
                    alt="First Name" 
                  /> 
                </ListItem>
              </StyledBadge>
            </Menu>
            <SubMenu title="Users" icon={<PermIdentityIcon />} style={{ marginTop: "3vw"}} > {/* open */}
                <MenuItem icon={<QuestionMarkIcon />}> Information </MenuItem>
                <MenuItem icon={<GroupAddIcon />}> Clients </MenuItem>
                <MenuItem icon={<CurrencyRupeeIcon />}> Currency </MenuItem>
                <MenuItem icon={<PostAddIcon />}> Documents </MenuItem>
                <MenuItem icon={<FormatListBulletedIcon />}> Projects </MenuItem>
                <MenuItem icon={<ManageHistoryIcon />}> Risk Manager </MenuItem>
            </SubMenu>
            <SubMenu title="Accounts" icon={<GridViewIcon />}>
                <MenuItem icon={<BusinessCenterIcon />}> Business </MenuItem>
                <MenuItem icon={<PersonPinIcon />}> Personal </MenuItem>
                <MenuItem icon={<MedicalServicesIcon />}> Medical </MenuItem>
            </SubMenu>
            <SubMenu title="Personals" icon={<InboxIcon />}>
                <MenuItem icon={<PostAddIcon />}> Documents </MenuItem>
                <MenuItem icon={<GroupAddIcon />}> Clients </MenuItem>
                <MenuItem icon={<FormatListBulletedIcon />}> Projects </MenuItem>
            </SubMenu>
            <SubMenu title="Share" icon={<ShareIcon />}>
                <MenuItem icon={<PostAddIcon />}> Documents </MenuItem>
                <MenuItem icon={<FormatListBulletedIcon />}> Projects </MenuItem>
                <MenuItem icon={<ManageHistoryIcon />}> Risk Manager </MenuItem>
            </SubMenu>
            <SubMenu title="Settings" icon={<SettingsIcon />}>
                <MenuItem icon={<PostAddIcon />}> Documents </MenuItem>
                <MenuItem icon={<FormatListBulletedIcon />}> Projects </MenuItem>
                <MenuItem icon={<ManageHistoryIcon />}> Risk Manager </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </>
  )
}
