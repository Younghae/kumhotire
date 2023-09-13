"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Idea_Master_admin from "./Idea_master_admin/page";
import User_admin from "./user_admin/page";
import Group_admin from "./group_admin/page";
import Menu_admin from "./menu_admin/page";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Master(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 10,
        bgcolor: "background.paper",
        display: "flex",
        height: 600,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          backgroundColor: "#D9D9D9",
          // "&:hover": {
          //   backgroundColor: "black",
          //   transition: "0.2s",
          // },
        }}
      >
        <Tab
          label="Idea 마스터 관리"
          {...Master(0)}
          color="black"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            backgroundColor: "#D9D9D9",

            "&:hover": {
              // backgroundColor: "black",
              color: "black",
              transition: "0.2s",
            },
            // "&:active": {
            //   color: "red",
            // },
          }}
        />
        <Tab label="사용자 관리" {...Master(1)} />
        <Tab label="그룹 관리" {...Master(2)} />
        <Tab label="메뉴 관리" {...Master(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Idea_Master_admin />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <User_admin />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Group_admin />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Menu_admin />
      </TabPanel>
    </Box>
  );
}
