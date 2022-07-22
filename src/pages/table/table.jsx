import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Avatar, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function Table() {
  return (
    <Box padding={'1vw'}>
      <Box>
        <Box sx={{ paddingY: "1vw", fontSize: "1.2vw", color: "#ffffff" }}>
          Recent Subscription
          <span style={{ marginLeft: "2vw", color: "#ffffff", fontSize: "0.9vw" }} >
            This week
            <KeyboardArrowDownIcon />
          </span>
        </Box>
      </Box>
      <table>
        <thead style={{ color: "#ffffff" }}>
          <tr>
            <th style={{ paddingRight: '2vw' }}>Name</th>
            <th style={{ paddingRight: '15vw'}}></th>
            <th style={{ paddingRight: '9vw' }}>Amount</th>
            <th style={{ paddingRight: '8vw' }}>Location</th>
            <th style={{ paddingRight: '6vw' }}>Shared with</th>
            <th style={{ paddingRight: '6vw' }}>Status</th>
          </tr>
        </thead>
        <tbody style={{ color: "#ffffff" }}>
        <tr>
          <td>
            <Checkbox style={{ color: "#ffffff" }} />
          </td>
          <td 
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          > 
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpjQiynN6jkDXSLTK3LKlSZZIw8H6mPc2ECu7oKLran7jU4L3qrd-kD95zNUTwjx1fpo&usqp=CAU"
              alt="image"
              style={{ marginRight: "1vw"}}
            />
              Play Station
          </td>
          <td>$243</td>
          <td>New York</td>
          <td>
            <Avatar
              src="https://qph.fs.quoracdn.net/main-qimg-c7a526dfad7e78f9062521efd0a3ea70-c"
              alt="image"
            />
          </td>
          <td><IOSSwitch sx={{ m: 1 }} defaultChecked /></td>
        </tr>
        <tr>
          <td><Checkbox style={{ color: "#ffffff" }} /></td>
          <td 
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          > 
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzwFAdHT5O90YRjXSKfC6Chk06xY2FZQuA8wcVpoOtl4Yhd4_oS2mEB5U6pAGJMZWlJA&usqp=CAU"
              alt="image"
              style={{ marginRight: "1vw"}}
            />
            Apple Music
          </td>
          <td>$80</td>
          <td>Huston</td>
          <td>
            <Avatar
              src="https://i0.wp.com/evanstonroundtable.com/wp-content/uploads/2022/05/Lushina-scaled-e1652827479814.jpg?fit=1200%2C900&ssl=1"
              alt="image"
            />
          </td>
          <td><IOSSwitch sx={{ m: 1 }} /></td>
        </tr>
        <tr>
          <td><Checkbox defaultChecked style={{ color: "#ffffff" }} /></td>
          <td 
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap', 
            }}
          > 
            <Avatar
              src="https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj"
              alt="image"
              style={{ marginRight: "1vw"}}
            />
            Youtube
          </td>
          <td>$243</td>
          <td>New York</td>
          <td>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgVUiuTQbmj_jO_W1nmX8bzbXS2DDxMStn8FdSPyK7SSAKVnHXZjTx9764JdwzGSWd84&usqp=CAU"
              alt="image"
            />
          </td>
          <td><IOSSwitch sx={{ m: 1 }} defaultChecked /></td>
        </tr>
        <tr>
          <td><Checkbox style={{ color: "#ffffff" }} /></td>
          <td 
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap', 
            }}
          > 
            <Avatar
              src="https://image.similarpng.com/very-thumbnail/2020/05/Popular-social-media-Behance-logo-transparent-PNG.png"
              alt="image"
              style={{ marginRight: "1vw"}}
            />
            Behance
          </td>
          <td>$153</td>
          <td>Dallas</td>
          <td>
            <Avatar
              src="https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960"
              alt="image"
            />
          </td>
          <td>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </td>
        </tr>
        </tbody>
      </table>
      </Box>
  );
}
