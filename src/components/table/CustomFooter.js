import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import { Fab } from "components/muiComponents";
import FullPagination from "components/fullPagination/FullPagination";
import IconwithLabelBtn from "../circleButton/IconwithLabelBtn";
import { AddIcon } from "../icons";
import useStyles from "./TableStyle";

const CustomFooter = (props) => {
  const classes = useStyles();

  const {
    count,
    paginatedCount,
    textLabels,
    rowsPerPage,
    page,
    handleAdd,
    switchDialog,
    setOperation,
    pagination,
    changeRowsPerPage,
    changePage,
    dialogIcon,
    dialogTitle,
    handlePaginationChange,
  } = props;
  const handleRowChange = async (event) => {
    pagination &&
      handlePaginationChange &&
      handlePaginationChange({
        pageIndex: paginatedCount ? 1 : page + 1,
        pageSize: event.target.value,
      });
    changeRowsPerPage(event.target.value);
  };

  const handlePageChange = async (_, page) => {
    pagination &&
      handlePaginationChange &&
      handlePaginationChange({
        pageIndex: page + 1,
        pageSize: rowsPerPage,
      });
    changePage(page);
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 24px 15px 24px",
  };

  return (
    <TableFooter>
      <TableRow style={{ backgroundColor: "#fff" }}>
        <TableCell style={footerStyle}>
          {handleAdd && (
            <Fab
              onClick={() => {
                handleAdd();
              }}
              className={classes.Add}
            >
              <AddIcon />
            </Fab>
          )}
          {switchDialog &&
            (dialogTitle ? (
              <IconwithLabelBtn
                onClick={() => {
                  switchDialog(true);
                  setOperation && setOperation(true);
                }}
                className={classes.Add}
                icon={dialogIcon || <AddIcon />}
                label={dialogTitle}
              />
            ) : (
              <Fab
                onClick={() => {
                  switchDialog(true);
                  setOperation && setOperation(true);
                }}
                className={classes.Add}
                icon={dialogIcon || <AddIcon />}
              />
            ))}
          <FullPagination
            count={
              paginatedCount ? paginatedCount : Math.ceil(count / rowsPerPage)
            }
            page={page || 1}
            variant="outlined"
            shape="rounded"
            handlePaginationClick={handlePageChange}
            rowsPerPage={rowsPerPage}
            handleRowsPerPage={handleRowChange}
          />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};
export default CustomFooter;
