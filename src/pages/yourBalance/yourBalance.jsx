import React from 'react'
import { Button, Grid, Box } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styled from 'styled-components';

// customized button
const StyledButton = styled(Button) `
    &:hover {
        color: #373bbd;
        background-color: #e0e2f4;
        border: 1px solid #373bbd;
    }
`

export default function YourBalance() {
  return (
    <>
        <Grid container item xs={12} sx={{ padding: '1vw', backgroundColor: "#ffffff" }}>
                <Grid item xs={12}>
                    <Box sx={{ marginBottom: '2vw', fontSize: '1.2vw' }}>Your Balance</Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ fontSize: '2vw' }}>$22,774</Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ color: "#9dadc4", fontSize: '1.2vw' }}>3.743.443 BTC</Box>
                </Grid>
                <Grid item xs={6} 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap', 
                        paddingTop: "2vw"
                    }}
                >
                    <ArrowDownwardIcon sx={{ backgroundColor: "#acd7fd", color: "#4ba8fa", padding: "0.5vw", borderRadius: "20%"}} />
                    <Box sx={{ fontSize: '1vw', marginLeft: "1vw" }}>13,300</Box>
                    <Box sx={{ color: "#9dadc4", fontSize: '1.2vw' }}>Income</Box>
                </Grid>
                <Grid item xs={6} 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap', 
                        paddingTop: "2vw"
                    }}
                >
                    <ArrowUpwardIcon sx={{ backgroundColor: "#decffd", color: "#7432e4", padding: "0.5vw", borderRadius: "20%"}} />
                    <Box sx={{ fontSize: '1vw', marginLeft: "1vw" }}>7,400</Box>
                    <Box sx={{ color: "#9dadc4", fontSize: '2vh', display: "inline-block" }}>Outcome</Box> {/* 0.8vw */}
                </Grid>
                <Grid item xs={12} sx={{ paddingY: "1.3vw" }}>
                    <StyledButton sx={{ backgroundColor: "#373bbd", color: "#e0e2f4", border: "1px solid #e0e2f4", borderRadius: "10px", paddingX: "1.5vw", paddingY: "0.5vw", fontWeight: "bold" }}>
                        See details
                    </StyledButton>
                </Grid>
            </Grid>
    </>
  )
}
