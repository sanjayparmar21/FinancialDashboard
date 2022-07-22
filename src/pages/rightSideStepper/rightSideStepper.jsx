import React from 'react';
import { Avatar, Box, Button, Grid } from '@mui/material';
import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';

const StyledButtonForUpdate = styled(Button) `
    &:hover {
        color: #42caff !important;
        background-color: #212a35 !important;
        border: 1px solid #42caff !important;
    }
`
const StyledButtonForStatus = styled(Button) `
    &:hover {
        color: #42caff !important;
        background-color: #212a35 !important;
        border: 1px solid #42caff !important;
    }
`
const StyledButtonForGrowing = styled(Button) `
    &:hover {
        color: #7087fa !important;
        background-color: #ffffff !important;
        border: 1px solid #7087fa !important;
    }
`
const StyledButtonForIncreasing = styled(Button) `
    &:hover {
        color: #228beb !important;
        background-color: #ffffff !important;
        border: 1px solid #228beb !important;
    }
`
const StyledButton = styled(Button) `
    &:hover {
        color: #52cf73 !important;
        background-color: #ffffff !important;
        border: 1px solid #52cf73 !important;
    }
`

export default function RightSideStepper() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 90 ? 90 : prevProgress + 10));
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Grid item container xs={12} sx={{ padding: "0.5vw", backgroundColor: "#212a35", color: "#ffffff" }} >
        <Grid item xs={6}>
          <StyledButtonForUpdate sx={{ backgroundColor: "#42caff", color: "#212a35", border: "1px solid #42caff", paddingX: "1vw", marginY: "2vw", marginLeft: "1vw" }} >
            <b>Updates</b>
          </StyledButtonForUpdate>
        </Grid>
        <Grid item xs={6}>
          <StyledButtonForStatus sx={{ backgroundColor: "#42caff", color: "#212a35", border: "1px solid #42caff", paddingX: "1vw", marginY: "2vw", marginLeft: "1.5vw" }} >
            <b>Status</b>
          </StyledButtonForStatus>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Box>
              <Box style={{display: "flex", alignItems: "center", justifyContent: "center",float: "left", height: "15px", width: "15px", backgroundColor: "#42caff", borderRadius: "100%", marginRight: "1vw" }}>
                <Box style={{ height: "7px", width: "7px", backgroundColor: "#ffffff", borderRadius: "100%" }}>
                </Box>
              </Box>
              Monthly spending
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "right"}}>
              +$3654
            </Box>
          </Grid>
          <StyledButtonForGrowing sx={{ backgroundColor: "#7087fa", color: "#ffffff", border: "1px solid #7087fa", borderRadius: "20px", paddingY: '0.5px', paddingX: '1.3vw', margin: '1vw'}}>Growing</StyledButtonForGrowing>
          <StyledButton sx={{ backgroundColor: "#52cf73", color: "#ffffff", border: "1px solid #52cf73", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>+2.2%</StyledButton>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Box>
              <Box style={{display: "flex", alignItems: "center", justifyContent: "center",float: "left", height: "15px", width: "15px", backgroundColor: "#42caff", borderRadius: "100%", marginRight: "1vw" }}>
                <Box style={{ height: "7px", width: "7px", backgroundColor: "#ffffff", borderRadius: "100%" }}></Box>
              </Box>
              Debt
            </Box>
            {/* <Box>
            Debt
            </Box> */}
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "right"}}>
            $544
            </Box>
          </Grid>
          <StyledButtonForIncreasing sx={{ backgroundColor: "#228beb", color: "#ffffff", border: "1px solid #228beb", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>Increasing</StyledButtonForIncreasing>
          <StyledButton sx={{ backgroundColor: "#52cf73", color: "#ffffff", border: "1px solid #52cf73", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>+1.3%</StyledButton>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Box style={{display: "flex", alignItems: "center", justifyContent: "center",float: "left", height: "15px", width: "15px", backgroundColor: "#42caff", borderRadius: "100%", marginRight: "1vw" }}>
              <Box style={{ height: "7px", width: "7px", backgroundColor: "#ffffff", borderRadius: "100%" }}></Box>
            </Box>
            Subscription
            {/* <Box>
              Subscription
            </Box> */}
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "right"}}>
              -$346
            </Box>
          </Grid>
          <StyledButtonForIncreasing sx={{ backgroundColor: "#228beb", color: "#ffffff", border: "1px solid #228beb", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>Increasing</StyledButtonForIncreasing>
          <StyledButton sx={{ backgroundColor: "#52cf73", color: "#ffffff", border: "1px solid #52cf73", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>+3.7%</StyledButton>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Box style={{display: "flex", alignItems: "center", justifyContent: "center",float: "left", height: "15px", width: "15px", backgroundColor: "#42caff", borderRadius: "100%", marginRight: "1vw" }}>
              <Box style={{ height: "7px", width: "7px", backgroundColor: "#ffffff", borderRadius: "100%" }}></Box>
            </Box>
            Insurance
            {/* <Box>
              Insurance
            </Box> */}
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "right"}}>
              +$633
            </Box>
          </Grid>
          <StyledButtonForGrowing sx={{ backgroundColor: "#7087fa", color: "#ffffff", border: "1px solid #7087fa", borderRadius: "20px", paddingY: '0.5px', paddingX: '1.3vw', margin: '1vw'}}>Growing</StyledButtonForGrowing>
          <StyledButton sx={{ backgroundColor: "#52cf73", color: "#ffffff", border: "1px solid #52cf73", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>+0.9%</StyledButton>
        </Grid>
      </Grid>

      <hr style={{ marginTop: "3vw", borderTop: "1px solid #42caff" }}></hr>
      
      <Grid item container xs={12} sx={{ backgroundColor: "#222b35", marginTop: "3vw", padding: '1vw' }} >
        <Box sx={{ padding: '1vw', backgroundColor: "#212a35", color: "#ffffff", borderRadius: '15px' }}>
          <Box sx={{ fontSize: '1.2vw' }}>Economic Strategy</Box>
          <Box sx={{ fontSize: '1vw' }}>Consultant</Box>
          <Box style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              fontSize: '0.9vw',
              marginTop: '1vw',
            }}
          > 
            <Avatar
              src="https://qph.fs.quoracdn.net/main-qimg-c7a526dfad7e78f9062521efd0a3ea70-c"
              alt="avatar image"
            />
            <span style={{ marginLeft: '1vw' }}>Robert Fox</span>
          </Box>
          <Box style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              fontSize: '0.8vw',
              marginTop: '1vw',
            }}
          > 
            <Box style={{ backgroundColor: "#00d07a", color: "#ffffff", padding: '0.2vw', borderRadius: "10px" }}>+2%</Box>
            <span style={{ marginLeft: '1vw' }}>Income Growth</span>
          </Box>
          <Box sx={{ marginTop: '2vw' }}>
            <Box>
              Credit of trust
              <span style={{ marginLeft: "4vw" }}>9/10</span>
            </Box>
            <LinearProgress variant="determinate" value={progress} color="inherit" sx={{ color: '#ffc137' }} />
          </Box>
        </Box>
      </Grid>
    </>
  )
}
