import React, { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import Paper from '@material-ui/core/Paper';

import MaterialTable from 'material-table';
import axios from 'axios';
import './DataTable.css';
import data from './data.json'
const DataTable = () => {
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const response = await axios.get('/results');
  //   setData(response.data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   // getData();

  // }, []);

  return (
    <div className="table-responsive">
      <MaterialTable
        title="Filter/Search/Sort by Column Attribute"
        columns={[
          { title: 'Name', field: 'player_name_last_first' },
          { title: 'Season (Year)', field: 'season' },
          { title: 'Team', field: 'team_abbrev' },
          {
            title: 'Pitch Hand',
            field: 'pitch_hand',
          },
          { title: '# of pitches', field: 'num_pitches' },
          {
            title: 'Four Seam Speed',
            field: 'four_seam_speed',
          },
          {
            title: 'Four Seam Spin',
            field: 'four_seam_spin',
          },
          {
            title: 'Sinker Speed',
            field: 'sinker_speed',
          },
          {
            title: 'Sinker Spin',
            field: 'four_seam_pct',
          },
          {
            title: 'Sinker %',
            field: 'sinker_pct',
          },
          {
            title: 'Cutter Speed',
            field: 'cutter_speed',
          },
          {
            title: 'Cutter Spin',
            field: 'cutter_spin',
          },
          {
            title: 'Cutter %',
            field: 'cutter_pct',
          },
          {
            title: 'Slider Speed',
            field: 'slider_speed',
          },
          {
            title: 'Slider Spin',
            field: 'slider_spin',
          },
          {
            title: 'Slider %',
            field: 'slider_pct',
          },
          {
            title: 'Change Up Speed',
            field: 'change_up_speed',
          },
          {
            title: 'Change Up Spin',
            field: 'change_up_spin',
          },
          {
            title: 'Change Up %',
            field: 'change_up_pct',
          },
          {
            title: 'Curve Speed',
            field: 'curve_speed',
          },
          {
            title: 'Curve Spin',
            field: 'curve_spin',
          },
          {
            title: 'Curve %',
            field: 'curve_pct',
          },
          {
            title: 'Splitter Speed',
            field: 'splitter_speed',
          },
          {
            title: 'Splitter Spin',
            field: 'splitter_spin',
          },
          {
            title: 'Splitter %',
            field: 'splitter_pct',
          },
          {
            title: 'Plate Appearances',
            field: 'plate_appearances',
          },
        ]}
        data={data}
        options={{
          filtering: true,
          sorting: true,
          grouping: true,
        }}
      />
    </div>
  );
};

export default DataTable;
