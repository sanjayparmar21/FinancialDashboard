import React from 'react';
import { Avatar, Box, Button, Grid } from '@mui/material';
import styled from 'styled-components';
import LinearProgress from '@mui/material/LinearProgress';

const StyledButtonForGrowing = styled(Button) `
    &:hover {
        color: #7087fa;
        background-color: #ffffff;
        border: 1px solid #7087fa;
    }
`
const StyledButtonForIncreasing = styled(Button) `
    &:hover {
        color: #ff878d;
        background-color: #ffffff;
        border: 1px solid #ff878d;
    }
`
const StyledButton = styled(Button) `
    &:hover {
        color: #24e4a6;
        background-color: #ffffff;
        border: 1px solid #24e4a6;
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
      <Grid item container xs={12} sx={{ backgroundColor: "#f9fafb", padding: "0.5vw" }}>
        <Grid item xs={6}>
          <Button sx={{ backgroundColor: "#ffffff", color: "#474dc2", paddingX: "1vw", marginY: "2vw", marginLeft: "1vw" }}>
            <b>Updates</b>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button sx={{ backgroundColor: "#dfe1e3", color: "#afbbce", paddingX: "1vw", marginY: "2vw", marginLeft: "1.5vw" }}>
            <b>Status</b>
          </Button>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Box>
              <Box style={{display: "flex", alignItems: "center", justifyContent: "center",float: "left", height: "15px", width: "15px", backgroundColor: "#4559f9", borderRadius: "100%", marginRight: "1vw" }}>
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
          <StyledButton sx={{ backgroundColor: "#24e4a6", color: "#ffffff", border: "1px solid #24e4a6", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>+2.2%</StyledButton>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Box>
              <Box style={{display: "flex", alignItems: "center", justifyContent: "center",float: "left", height: "15px", width: "15px", backgroundColor: "#4559f9", borderRadius: "100%", marginRight: "1vw" }}>
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
          <StyledButtonForIncreasing sx={{ backgroundColor: "#ff878d", color: "#ffffff", border: "1px solid #ff878d", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>Increasing</StyledButtonForIncreasing>
          <StyledButton sx={{ backgroundColor: "#24e4a6", color: "#ffffff", border: "1px solid #24e4a6", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>+1.3%</StyledButton>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Box style={{display: "flex", alignItems: "center", justifyContent: "center",float: "left", height: "15px", width: "15px", backgroundColor: "#4559f9", borderRadius: "100%", marginRight: "1vw" }}>
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
          <StyledButtonForIncreasing sx={{ backgroundColor: "#ff878d", color: "#ffffff", border: "1px solid #ff878d", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>Increasing</StyledButtonForIncreasing>
          <StyledButton sx={{ backgroundColor: "#24e4a6", color: "#ffffff", border: "1px solid #24e4a6", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>+3.7%</StyledButton>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={8}>
            <Box style={{display: "flex", alignItems: "center", justifyContent: "center",float: "left", height: "15px", width: "15px", backgroundColor: "#4559f9", borderRadius: "100%", marginRight: "1vw" }}>
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
          <StyledButton sx={{ backgroundColor: "#24e4a6", color: "#ffffff", border: "1px solid #24e4a6", borderRadius: "20px", paddingY: '0.5px', paddingX: '0.8vw', margin: '1vw'}}>+0.9%</StyledButton>
        </Grid>
      </Grid>

      <hr style={{ marginTop: "3vw", borderTop: "1px solid #fcfcfd" }}></hr>
      
      <Grid item container xs={12} sx={{ backgroundColor: "#f9fafb", marginTop: "3vw", padding: '1vw' }}>
        <Box sx={{ padding: '1vw', backgroundColor: "#373bbd", color: "#ffffff", borderRadius: '15px' }}>
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
            <Box style={{ backgroundColor: "#00d07a", padding: '0.2vw', borderRadius: "10px" }}>+2%</Box>
            <span style={{ marginLeft: '1vw' }}>Income Groth</span>
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
