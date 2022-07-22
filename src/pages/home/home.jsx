import React from 'react'
import { Grid } from '@mui/material'
import Chart from '../chart/chart';
import MiddleCard from '../middleCard/middleCard';
import YourBalance from '../yourBalance/yourBalance';
import Table from '../table/table';
import RightSideStepper from '../rightSideStepper/rightSideStepper';
import SideBar from '../sideBar/sideBar';

export default function Home() {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#161d24" }}>
      {/* sidebar start */}
      {/* <Grid item xs={2} > */}
      <Grid item xs={2} sx={{ backgroundColor: "#161d24"}}>
          <SideBar />
      </Grid>
      {/* sidebar end */}

      {/* left side box start */}
      <Grid item container xs={8} sx={{ backgroundColor: "#161d24"}}>
        {/* top most card start */}
        {/* left component */}
        <Grid container item xs={6} sx={{ padding: '2vw'}}>
            <YourBalance />
        </Grid>
        {/* right component */}
        <Grid item xs={6}>
            <Chart />
        </Grid>
        {/* top most card end */}

        {/* middle card start */}
        <Grid item container xs={12} >
            <MiddleCard />
        </Grid>
        {/* middle card end */}

        {/* table start */}
        <Grid item container xs={12} >
            <Table />
        </Grid>
        {/* table end */}
      </Grid>
      {/* left side box end */}

      {/* right side box start */}
      <Grid item xs={2} sx={{ marginTop: '2.7vw'}} >
          <RightSideStepper />
      </Grid>
      {/* right side box end */}
    </Grid>
  )
}
