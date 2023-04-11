import React, { useState, useEffect } from "react";
import useStyles from "./CustomTabsStyle";
import clsx from "clsx";
import { getTransaltion } from "redux/network/functions";
import { Box, Grid, Typography } from "@mui/core";

function CustomTabs({ contentList, selectedTab, setSelectedTab }) {
  const classes = useStyles();

  const [tabList, setTabList] = useState([]);

  useEffect(() => {
    (async () => {
      setTabList([...contentList]);
    })();
  }, [contentList]);

  return (
    <>
      {tabList && tabList.length > 0 ? (
        <div className={clsx(classes.CustomTabs, "CustomTabsButtons")}>
          {tabList.map((item, idx) => (
            <input
              type="radio"
              id={`tab${idx}`}
              name="tab-control"
              checked={selectedTab === idx}
            />
          ))}
          <ul>
            {tabList.map((item, idx) => (
              <li
                title={item.title}
                style={{
                  background: selectedTab === idx ? "#fff" : "",
                  border: selectedTab === idx ? "1px solid #bf9e66" : "",
                }}
                onClick={() => setSelectedTab(idx)}
              >
                <span
                  style={{
                    padding: "0px 8px",
                    color: selectedTab === idx ? "#bf9e66" : "",
                  }}
                >
                  {item.icon}
                </span>
                <label for={`tab${idx}`} role="button">
                  <span style={{ color: selectedTab === idx ? "#bf9e66" : "" }}>
                    {item.title}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          <div className={classes.content}>
            {tabList.map((item, idx) => (
              <section style={{ display: selectedTab === idx ? "" : "none" }}>
                {item.content}
              </section>
            ))}
          </div>
        </div>
      ) : (
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className={classes.noData}>
            <img src="../../images/noData.png" />
            <p>{getTransaltion("noDataToPreview")}</p>
          </div>
        </Grid>
      )}
    </>
  );
}

export default CustomTabs;
