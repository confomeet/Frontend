import React, { useState, useEffect } from "react";
import useStyles from "./CustomTabsStyle";
import clsx from "clsx";

function CustomTabs({ contentList }) {
  const classes = useStyles();
  const [tabList, setTabList] = useState([]);
  const handleTabChange = (i) => {
    setTabList(
      tabList.map((item, idx) => ({ ...item, isSelected: idx === i }))
    );
  };
  useEffect(() => {
    (async () => {
      setTabList([...contentList]);
    })();
  }, [contentList]);

  return (
    <div>
      <div className={clsx(classes.CustomTabs, "CustomTabsButtons")}>
        {tabList.map((item, idx) => (
          <input
            type="radio"
            id={`tab${idx}`}
            name="tab-control"
            checked={item.isSelected}
          />
        ))}
        <ul>
          {tabList.map((item, idx) => (
            <li
              title="Features"
              style={{
                background: item.isSelected ? "#fff" : "",
                border: item.isSelected ? "1px solid #bf9e66" : "",
              }}
              onClick={() => handleTabChange(idx)}
            >
              <label for={`tab${idx}`} role="button">
                <span style={{ color: item.isSelected ? "#bf9e66" : "" }}>
                  {item.title}
                </span>
              </label>
            </li>
          ))}
        </ul>

        <div className={classes.content}>
          {tabList.map((item, idx) => (
            <section style={{ display: item.isSelected ? "" : "none" }}>
              {item.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomTabs;
