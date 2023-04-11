import DateRange from "components/dateRange";
import { Grid } from "components/muiComponents";
import { useState } from "react";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
import TextFeildGeneral from "videoComponents/textFeildGeneral/TextFeildGeneral";
import { eventsStyles } from "../../pages/events/style";
import { getThisMonth } from "utils";
export default function SearchFeilds(props) {
  const classes = eventsStyles();

  const handleDateRangeChange = ({ startDate, endDate }) => {
    props.handleSearchParamsChange("startDate", startDate);
    props.handleSearchParamsChange("endDate", endDate);
  };

  return (
    <Grid container className={classes.searchContainer}>
      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.findValueFeild}
      >
        <TextFeildGeneral
          label={Object.translate("LABEL.TOPIC")}
          value={props?.searchParams?.topic}
          onChange={(e) => {
            const topic = e.target.value;
            props?.handleSearchParamsChange("topic", topic);
          }}
          onBlur={(e) => {
            const topic = e.target.value;
            props?.handleSearchParamsChange("topic", topic);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key) || !props.handleSearch) return;
            e.preventDefault();
            props?.handleSearch();
          }}
        />
      </Grid>
      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.findValueFeild}
      >
        <TextFeildGeneral
          label={Object.translate("LABEL.SUB_TOPIC")}
          value={props?.searchParams?.subTopic}
          onChange={(e) => {
            const subTopic = e.target.value;
            props?.handleSearchParamsChange("subTopic", subTopic);
          }}
          onBlur={(e) => {
            const subTopic = e.target.value;
            props?.handleSearchParamsChange("subTopic", subTopic);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key) || !props?.handleSearch) return;
            e.preventDefault();
            props?.handleSearch();
          }}
        />
      </Grid>
      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.findValueFeild}
      >
        <TextFeildGeneral
          label={Object.translate("LABEL.ORGANIZER")}
          value={props?.searchParams?.organizer}
          onChange={(e) => {
            const organizer = e.target.value;
            props?.handleSearchParamsChange("organizer", organizer);
          }}
          onBlur={(e) => {
            const organizer = e.target.value;
            props?.handleSearchParamsChange("organizer", organizer);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key) || !props?.handleSearch) return;
            e.preventDefault();
            props.handleSearch();
          }}
        />
      </Grid>
      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.findValueFeild}
      >
        <TextFeildGeneral
          label={Object.translate("LABEL.PARTICIPANTS")}
          value={props?.searchParams?.participant}
          onChange={(e) => {
            const participant = e.target.value;
            props?.handleSearchParamsChange("participant", participant);
          }}
          onBlur={(e) => {
            const participant = e.target.value;
            props?.handleSearchParamsChange("participant", participant);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key) || !props.handleSearch) return;
            e.preventDefault();
            props?.handleSearch();
          }}
        />
      </Grid>

      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.findValueFeild}
      >
        <TextFeildGeneral
          label={Object.translate("LABEL.EMAIL")}
          value={props?.searchParams?.email}
          onChange={(e) => {
            const email = e.target.value;
            props?.handleSearchParamsChange("email", email);
          }}
          onBlur={(e) => {
            const email = e.target.value;
            props?.handleSearchParamsChange("email", email);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key) || !props?.handleSearch) return;
            e.preventDefault();
            props?.handleSearch();
          }}
        />
      </Grid>
      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.findValueFeild}
      >
        <TextFeildGeneral
          label={Object.translate("LABEL.PHONE")}
          value={props?.searchParams?.phoneNumber}
          onChange={(e) => {
            const phoneNumber = e.target.value;
            props?.handleSearchParamsChange("phoneNumber", phoneNumber);
          }}
          onBlur={(e) => {
            const phoneNumber = e.target.value;
            props?.handleSearchParamsChange("phoneNumber", phoneNumber);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key) || !props?.handleSearch) return;
            e.preventDefault();
            props?.handleSearch();
          }}
        />
      </Grid>

      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.findValueFeild}
      >
        <TextFeildGeneral
          label={Object.translate("LABEL.MEETINGID")}
          value={props?.searchParams?.meetingId}
          onChange={(e) => {
            const meetingId = e.target.value;
            props?.handleSearchParamsChange("meetingId", meetingId);
          }}
          onBlur={(e) => {
            const meetingId = e.target.value;
            props?.handleSearchParamsChange("meetingId", meetingId);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key) || !props?.handleSearch) return;
            e.preventDefault();
            props?.handleSearch();
          }}
        />
      </Grid>

      <Grid
        item
        lg={3}
        md={4}
        sm={6}
        xs={12}
        className={classes.findValueFeild}
      >
        <span style={{ fontSize: "12.5px", color: "rgba(0, 0, 0, 0.6)" }}>
          {Object.translate("LABEL.DATE_RANGE")}
        </span>
        <DateRange
          handleDateRangeChange={(data) => handleDateRangeChange(data)}
          handleSearch={() => props.handleSearch()}
          dateRange={props.searchParams}
        />
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.searchBtnsBox}
        style={{ marginInlineEnd: "20px" }}
      >
        <PrimaryButton
          size="small"
          onClick={() => {
            props.handleSearch && props.handleSearch();
          }}
          primaryButton={Object.translate("LABEL.SEARCH")}
        />

        <SecondaryButton
          secondaryButton={Object.translate("LABEL.CLEAR")}
          onClick={() => {
            props?.clearSearchParams && props?.clearSearchParams();
            props?.handleSearch && props?.handleSearch(props?.initSearchParams);
          }}
        />
      </Grid>
    </Grid>
  );
}
