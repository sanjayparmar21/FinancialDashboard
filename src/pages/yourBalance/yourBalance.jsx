import React from 'react'
import { Button, Grid, Box } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styled from 'styled-components';

// customized button
const StyledButton = styled(Button) `
    &:hover {
        color: #42caff;
        background-color: #0c3b50;
        border: 1px solid #42caff;
    }
`

export default function YourBalance() {
  return (
    <>
        <Grid container item xs={12} sx={{ padding: '1vw', backgroundColor: "#212a35", color: "#ffffff" }}>
        {/* <Grid container item xs={12} sx={{ padding: '1vw', color: "#ffffff" }} style={{ background: "linear-gradient(#7e567e, #bf9bbf)" }} > */}
            <Grid item xs={12}>
                <Box sx={{ marginBottom: '2vw', fontSize: '1.2vw' }}>Your Balance</Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ fontSize: '2vw' }}>$22,774</Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ color: "#a8a8a8", fontSize: '1.2vw' }}>3.743.443 BTC</Box>
            </Grid>
            <Grid item xs={6} 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap', 
                    paddingTop: "2vw"
                }}
            >
                <ArrowDownwardIcon sx={{ backgroundColor: "#e44f4d", color: "#e7c5c9", padding: "0.5vw", borderRadius: "20%"}} />
                <Box sx={{ fontSize: '1vw', marginLeft: "1vw" }}>13,300</Box>
                <Box sx={{ color: "#a8a8a8", fontSize: '0.8vw' }}>Income</Box>
            </Grid>
            <Grid item xs={6} 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap', 
                    paddingTop: "2vw"
                }}
            >
                <ArrowUpwardIcon sx={{ backgroundColor: "#52cf73", color: "#b6eec5", padding: "0.5vw", borderRadius: "20%"}} />
                <Box sx={{ fontSize: '1vw', marginLeft: "1vw" }}>7,400</Box>
                <Box sx={{ color: "#a8a8a8", fontSize: '0.8vw', display: "inline-block" }}>Outcome</Box>
            </Grid>
            <Grid item xs={12} sx={{ paddingY: "1.3vw" }}>
                <StyledButton sx={{ backgroundColor: "#42caff", color: "#0c3b50", border: "1px solid #0c3b50", borderRadius: "10px", paddingX: "1.5vw", paddingY: "0.5vw", fontWeight: "bold" }}>
                    See details
                </StyledButton>
            </Grid>
        </Grid>
    </>
  )
}
