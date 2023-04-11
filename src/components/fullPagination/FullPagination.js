import { Box, Grid, Pagination, Typography } from "components/muiComponents";
import PaginationSelect from "components/select/PaginationSelect";
import { useSelector } from "react-redux";
import useStyles from "./Style";

export default function FullPagination(props) {
  const classes = useStyles();
  const {
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  return (
    <Grid container>
      <Grid
        container
        item
        lg={12}
        md={12}
        xs={12}
        className={classes.paginationContainer}
      >
        {isRTL && (
          <Pagination
            count={props.count}
            page={props.page}
            shape="rounded"
            onChange={props.handlePaginationClick}
            color="primary"
            defaultPage={1}
            className={classes.pagination}
          />
        )}
        {!isRTL && (
          <Pagination
            count={props.count}
            page={props.page}
            shape="rounded"
            onChange={props.handlePaginationClick}
            color="primary"
            defaultPage={1}
            className={classes.ltrPagination}
          />
        )}
        <Box className={classes.selectGrid}>
          <PaginationSelect
            value={props.rowsPerPage}
            onChange={props.handleRowsPerPage}
          />
          <Typography style={{ marginInlineStart: "12px", fontSize: "13px" }}>
            {Object.translate("FULL_TABLE.PAGINATION.ROWS_PER_PAGE")}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
