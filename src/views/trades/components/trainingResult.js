// import React from 'react';

// function TrainingResult() {
//   return <div>TrainingResult</div>;
// }

// export default TrainingResult;



import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Experiments from './experiments';

export default function TrainingResult() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Experiments" value="1" />
            <Tab label="Issues" value="2" />
            <Tab label="Pull Requests" value="3" />
            <Tab label="Wiki" value="4" />
            {/* <Tab label="HHHH" value="5" /> */}
          </TabList>
        </Box>
        <TabPanel value="1"><Experiments/></TabPanel>
        <TabPanel value="2">Issues</TabPanel>
        <TabPanel value="3">Pull Requests</TabPanel>
        <TabPanel value="4">Wiki</TabPanel>
        {/* <TabPanel value="5">HDHDH</TabPanel> */}
      </TabContext>
    </Box>
  );
}
