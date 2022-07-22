import React from 'react';
import { Grid, Box } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function MiddleCard() {
    const [progress1, setProgress1] = React.useState(0);
    const [progress2, setProgress2] = React.useState(0);
    const [progress3, setProgress3] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress1((prevProgress) => (prevProgress >= 55 ? 55 : prevProgress + 10));
        setProgress2((prevProgress) => (prevProgress >= 98 ? 98 : prevProgress + 10));
        setProgress3((prevProgress) => (prevProgress >= 33 ? 33 : prevProgress + 5));
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
        <>
            {/* middle card start */}
            <Grid item container xs={12} sx={{ padding: '2vw' }}>
                {/* card one start */}
                <Grid item xs={3.9} sx={{ backgroundColor: "#212a35", color: "#ffffff", padding: '0.8vw', marginRight: '1vw' }} >
                    <Box sx={{ color: "#ffffff", fontSize: "1vw" }}>
                        Debt
                        <span style={{ marginLeft: '10vw' }}>
                            This week
                            <KeyboardArrowDownIcon />
                        </span>
                    </Box>
                    <Box sx={{ color: "#42caff", fontSize: "1vw" }}>
                        Credit Inc.
                        <span style={{ marginLeft: '7.5vw', color: "#42caff" }}>-2.3%</span>
                        <ArrowDownwardIcon sx={{ color: "#42caff", marginLeft: '0.5vw' }} />
                    </Box>
                    <Grid item xs={12} 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap', 
                        paddingTop: "2vw" 
                    }}
                    >
                        <span style={{position: 'absolute', top: '31.3vw', left: '19.6vw'}}>55%</span>
                        <CircularProgress variant="determinate" value={progress1} sx={{ color:'#8446f1' }} />
                        <span style={{ fontSize: '20px', marginLeft: '10.2vw' }}><b> +$1,433 </b></span>
                        <MoreVertIcon style={{ marginLeft: '1vw', color: "#352745" }} />
                    </Grid>
                </Grid>
                {/* card one end */}
                {/* card two start */}
                <Grid item xs={3.85} sx={{ backgroundColor: "#212a35", color: "#ffffff", padding: '1vw', marginRight: '1vw' }} >
                    <Box sx={{ color: "#ffffff", fontSize: "1vw" }}>
                        Debt
                        <span style={{ marginLeft: '10vw' }}>
                            Today
                            <KeyboardArrowDownIcon />
                        </span>
                    </Box>
                    <Box sx={{ color: "#42caff", fontSize: "1vw" }}>
                        Sushi Bar
                        <span style={{ marginLeft: '8vw', color: "#42caff" }}>-1.3%</span>
                        <ArrowDownwardIcon sx={{ color: "#42caff", marginLeft: '0.5vw' }} />
                    </Box>
                    <Grid item xs={12} 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap', 
                        paddingTop: "2vw" 
                    }}
                    >
                        <span style={{position: 'absolute', top: '31.5vw', left: '40.9vw'}}>98%</span>
                        <CircularProgress variant="determinate" value={progress2} sx={{ color:'#465af9' }} />
                        <span style={{ fontSize: '20px', marginLeft: '10.2vw' }}><b> +$744 </b></span>
                        <MoreVertIcon style={{ marginLeft: '1vw', color: "#352745" }} />
                    </Grid>
                </Grid>
                {/* card two end */}
                {/* card three start */}
                <Grid item xs={3.85} sx={{ backgroundColor: "#212a35", color: "#ffffff", padding: '0.8vw' }}>
                    <Box sx={{ color: "#ffffff", fontSize: "1vw" }}>
                        Debt
                        <span style={{ marginLeft: '9vw' }}>
                            This Month
                            <KeyboardArrowDownIcon />
                        </span>
                    </Box>
                    <Box sx={{ color: "#42caff", fontSize: "1vw" }}>
                        Apple TV
                        <span style={{ marginLeft: '7.3vw', color: "#42caff" }}>+1.8%</span>
                        <ArrowUpwardIcon sx={{ color: "#42caff", marginLeft: '1vw' }} />
                    </Box>
                    <Grid item xs={12} 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap', 
                        paddingTop: "2vw" 
                    }}
                    >
                        <span style={{position: 'absolute', top: '31.2vw', left: '61.6vw'}}>33%</span>
                        <CircularProgress variant="determinate" value={progress3} sx={{ color:'#ffc73e' }} />
                        <span style={{ fontSize: '20px', marginLeft: '9.8vw' }}><b> +$345 </b></span>
                        <MoreVertIcon style={{ marginLeft: '1vw', color: "#352745" }} />
                    </Grid>
                </Grid>
                {/* card three end */}
            </Grid>
            {/* middle card end */}
        </>
    );
}
