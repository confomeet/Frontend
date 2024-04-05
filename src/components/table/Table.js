import React, { useState } from "react";
import MUIDataTable, { ExpandButton } from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import createBreakpoints from "@mui/material/styles/createBreakpoints";
import { useSelector } from "react-redux";
import CustomToolbar from "./CustomToolBar";
import useStyles from "./TableStyle";
import CustomFooter from "./CustomFooter";
import { useTheme } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";
export default function FullTabel(props) {
  const theme = useTheme();
  const [rowsExpanded, setRowsExpanded] = useState([]);
  const [rowsSelected, setrowsSelected] = useState([]);
  const { settingsReducer } = useSelector((state) => state);
  const { isRtl: isDirectionRTL } = settingsReducer.settings;

  // const breakpoints = createBreakpoints({});
  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MuiTooltip: {
          tooltip: { fontFamily: "inherit" },
        },

        MuiMenuItem: {
          root: { fontFamily: "inherit", justifyContent: "flex-end" },
        },
        MuiButtonBase: {
          root: { "&$disabled": { backgroundColor: "gainsboro" } },
        },
        MuiListItem: {
          root: {
            "& .Mui-selected:hover": {
              backgroundColor: "#f8f8f8",
            },
          },
        },
        MuiInput: {
          underline: {
            "&:before": {
              borderBottom: "1px solid #ccc!important",
            },
            "&:after": {
              borderBottom: "1px solid #bf9e669c!important",
            },
          },
        },
        MuiPopover: {
          paper: {
            borderRadius: 7,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px!important",
            "& ul": {
              display: "flex",
              flexDirection: "column",
              alignItems: "end",

              direction: theme.direction === "rtl" ? "rtl" : "ltr",
            },
            "& ul:nth-child(3)": {
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              direction: theme.direction === "rtl" ? "ltr" : "rtl",
            },
            "& li": {
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "#f8f8f8!important",
              },
              "& > div": {
                display: "flex",
                justifyContent: "flex-start",
              },
              "& > div > span": {
                fontFamily: "inherit!important",
                fontSize: theme.globals.fontSize.xs + 2,
              },
            },
          },
        },
        MuiChip: {
          root: {
            fontFamily: "inherit",
            margin: "8px!important",
            border: "1px solid #cccccc80!important",
            backgroundColor: "#f8f8f8!important",
            padding: "0px 12px",
            "& svg": {
              color: "#bf9e66",
            },
          },
        },
        MUIDataTableViewCol: {
          root: {
            fontFamily: "inherit",

            "& span": {
              fontFamily: "inherit",
            },
          },
          label: {
            fontFamily: "inherit",
          },
        },
        MuiFormControlLabel: {
          root: {
            display: "flex",
            flexDirection: "row-reverse",
            margin: "4px 0 !important",
          },
        },
        MuiFormControl: {
          root: {
            margin: "0px 0 0 40px!important",
          },
        },
        MuiFormLabel: {
          root: {
            fontFamily: "inherit",
          },
        },
        MUIDataTableFilter: {
          root: {
            backgroundColor: "#fff",
            padding: "24px 24px 51px 24px",
            direction: theme.direction === "rtl" ? "rtl" : "ltr",

            fontFamily: "inherit",
          },

          gridListTile: {
            marginTop: "0px!important",
            padding: "13px!important",
            "& > div > label": {
              fontSize: theme.globals.fontSize.xs + 2,
            },
            "& > div > div ": {
              fontFamily: "inherit",
              fontSize: theme.globals.fontSize.xs + 1,

              "& > label": {},
              "& svg": {
                left: "0px!important",
                right: "unset!important",
              },
              "&:after": {
                borderBottom: "1px solid #bf9e669c!important",
              },
              "&:before": {
                borderBottom: "1px solid #ccc!important",
              },
            },
            "& > div > div > div": {
              color: "#444!important",
              paddingRight: "3px!important",
              paddingLeft: "21px",
              fontFamily: "inherit",
              "&:focus": {
                backgroundColor: "unset!important",
              },
            },
          },
          title: {
            fontFamily: "inherit",
            fontSize: `${theme.globals.fontSize.s}px!important`,
            color: "#444!important",
            fontWeight: 700,
          },
          reset: {
            display: "flex",
            alignItems: "baseline",
            margin: "0px",
            width: "100%",
            justifyContent: "space-between",
          },
          resetLink: {
            color: "#fff",
            backgroundColor: `${theme.palette.primary.main}!important`,
            borderRadius: 20,
            minWidth: "92px!important",
            fontFamily: "inherit",
            marginLeft: "30px",
            "&:hover": {
              backgroundColor: "#fff!important",
              color: `${theme.palette.primary.main}!important`,
              border: "1px solid #bf9e66",
            },
          },
        },
        MuiInputLabel: {
          formControl: {
            right: "0 !important",
            left: "auto !important",
            fontFamily: "inherit",
            fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
            color: `${theme.palette.primary.main}!important`,
            "& svg": {
              right: "0px!important",
            },
          },
        },
        MUIDataTableToolbar: {
          root: {
            display: props.DisableToolbar && "none",
            [theme.breakpoints.down("xs")]: {
              display: props.DisableToolbar && "none !important",
            },
          },

          filterPaper: {
            borderRadius: 7,
            top: "228px!important",
            padding: "12px!important",
            boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.2)!important",
          },
          filterCloseIcon: {
            transition: "all .5s ease-in-out",
            position: "absolute",
            left: "28px!important",
            right: "unset!important",
            top: "40px!important",
            zIndex: "1000",
            width: "28px",
            height: "28px",
            backgroundColor: "#e04041",
            color: "#fff",
            "&:hover": {
              transform: "rotate(360deg)",
              border: "1px solid #e04041",
              backgroundColor: "#fff",
              color: "#e04041",
            },
          },
          "& .iconActive": {
            color: " #f7c97a!important",
          },
        },

        MuiCheckbox: {
          root: {
            "& svg": { width: 18, height: 18 },
            "&$checked": { color: `${theme.palette.primary.main}!important` },
          },
        },
        MuiTableRow: {
          root: {
            backgroundColor: "inherit !important",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
            "&$selected": {
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
            },
            "& td > p": {
              // fontSize: theme.globals.fontSizeXS,
            },
          },

          "& .emptyTitle": {
            fontFamily: "inherit",
          },
        },
        MUIDataTable: {
          root: {
            backgroundColor: `${theme.palette.primary.main}!important`,
            fontFamily: "inherit",
          },

          responsiveBase: {
            position: "inherit !important",
            "& button": {
              border: "none !important",
              fontFamily: "inherit!important",
              padding: "2px 1px !important",
              color: "#636363 !important",
              fontWeight: "bold",
              background: "unset!important",
              boxShadow: "none!important",
              "&:hover": {
                background: "unset!important",
              },
              [theme.breakpoints.down("600")]: {
                // fontSize: theme.globals.fontSizeXXS,
              },
            },
            MuiButtonBase: {
              root: {
                background: "#fff",
                boxShadow: "none",
              },
            },
          },
          paper: {
            boxShadow: "none !important",
            border: "1px solid #e8e8e8",
            borderRadius: 4,
            overflow: "auto",
            [theme.breakpoints.down("768")]: {
              borderRadius: 10,
            },
            "& button": {
              border: "none !important",
              fontFamily: "inherit!important",
              padding: "6px 8px !important",
              color: `${theme.palette.primary.main}!important`,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "none!important",
              },
            },
          },
        },
        MUIDataTableToolbarSelect: {
          root: {
            height: 64,
            flexDirection: "row-reverse",
            fontFamily: "inherit",
            backgroundColor: "#fff",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.05)",
            "& button": {
              backgroundColor: `${theme.palette.primary.main}!important`,
              color: "#fff!important",
            },
            "& > div": {
              width: "50%",
              "& h6": {
                padding: "0 32px",
                fontFamily: "inherit",
                textAlign: isDirectionRTL ? "left" : "right",
                [theme.breakpoints.down("600")]: {
                  fontSize: `${theme.globals.fontSize.xs}px!important`,
                },
              },
              "& i": { color: "#ffffff" },
            },
          },
        },
        MUIDataTableBodyCell: {
          root: {
            fontFamily: "inherit",
            textAlign: isDirectionRTL ? "right" : "left",
            "& > i": {
              color: "red",
              fontSize: `${theme.globals.fontSize.s + 1}px!important`,
            },
            "& a:active": {
              color: "#bf9e66",
            },
            "& a": {
              color: "#bf9e66 !important",
            },
          },
        },
        MuiTableBody: {
          root: {
            MuiCheckbox: {
              root: { color: "gainsboro!important" },
            },
          },
        },
        MuiToolbar: {
          root: {
            borderRadius: 20,
            top: 0,
            position: "sticky",
            background: "white",
            zIndex: "100",
            flexDirection: "row-reverse",
            "& button": { "&:hover": { color: "#f7c97a" } },
            "& .Mui-focused": {
              "&:after": {
                borderBottom: "2px solid",
                borderBottomColor: `${theme.palette.primary.main}!important`,
              },
            },
            "& div": {
              display: "flex",
              fontFamily: "inherit!important",
            },
            "& button": {
              border: "none !important",
              fontFamily: "inherit!important",
              padding: "6px 8px !important",
              color: "#636363 !important",
              fontWeight: "bold",
            },
          },
        },

        MuiTableCell: {
          root: {
            fontFamily: "inherit",
            border: "1px solid gainsboro",
            borderTop: "none",
            borderBottom: "none!important",
            "& > div": {
              justifyContent: "flex-start",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              [theme.breakpoints.down("700")]: {
                fontSize: theme.globals.fontSize.xs + 1,
              },
              "& div": {
                fontFamily: "inherit",
                fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
                fontWeight: "bold",
                display: "flex",
                left: "0px!important",
                right: "unset!important",
                "& i": {
                  fontSize: `${theme.globals.fontSize.s - 1}px!important`,
                },
                "& > input": {
                  minWidth: "177px!important",
                },
              },
            },
          },
          head: {
            fontWeight: "bold",
            fontFamily: "inherit",
            backgroundColor: "#f8f8f8!important",
            border: "none",
            whiteSpace: "nowrap",

            "& > div": { justifyContent: "center" },
            "& input": {
              color: `${theme.palette.primary.main}!important`,
            },
          },
          footer: {
            border: "none!important",
            [theme.breakpoints.down("600")]: {
              padding: "0px 4px !important",
              alignItems: "center!important",
            },

            "& > button": {
              [theme.breakpoints.down("900")]: {
                width: "130px!important",
                height: "36px!important",
                minWidth: "56px!important",
              },
              "&:hover": {
                border: "1px solid",
                borderColor: `${theme.palette.primary.main}!important`,
                backgroundColor: "rgba(191, 158, 102, 0.04)!important",
                color: `${theme.palette.primary.main}!important`,
              },
            },
          },
        },

        MUIDataTableSelectCell: {
          fixedLeft: {
            position: "relative",
          },
          headerCell: {
            "& path": {
              color: `${theme.palette.primary.main}!important`,
              border: "1px solid grey",
            },
          },
        },
        MUIDataTableHeadCell: {
          data: { textTransform: "capitalize" },
          contentWrapper: {
            display: "flex",
            justifyContent: "flex-start !important",
            alignItems: "center !important",
            textTransform: "capitalize",
            "& button": {
              color: `${theme.palette.primary.main}!important`,
            },
          },
          fixedHeader: {
            fontFamily: "inherit",
            border: "none",
            padding: "8px 16px",
            color: "#636363",
            fontSize: theme.globals.fontSize.xs + 1,
            backgroundColor: "red",
            [theme.breakpoints.down("600")]: {
              padding: "2px 16px",
            },
          },
          toolButton: {
            margin: "0px !important",
          },
        },
        responsiveScroll: {},
        MuiTableFooter: {
          root: {
            position: "relative",
            color: "#ffffff !important",
            "& td": {
              fontFamily: "inherit",
            },
            "& div": {
              justifyContent: "flex-start",
              flexDirection: "row",
            },
            "& p": {
              fontSize: theme.globals.fontSize.xs,
              fontWeight: "bold",
              fontFamily: "inherit",
              "& span": {
                color: "#4c4c4c !important",
              },
            },
            "& span": {
              color: "#ffffff !important",
              fontSize: theme.globals.fontSize.xs,
              padding: "3px",
              fontWeight: "100 !important",
            },
            "& button": {
              width: "35px!important",
              height: "35px!important",
              minWidth: "35px!important",
              backgroundColor: `${theme.palette.primary.main}!important`,
              color: "#fff!important",
              boxShadow: "none",
              margin: "16px",
              "&:hover": {
                backgroundColor: `${theme.palette.primary.main}!important`,
              },
              [theme.breakpoints.down("600")]: {
                margin: "4px",
              },
            },
          },
        },
        MuiTablePagination: {
          caption: {
            fontFamily: "inherit",
          },
          actions: {
            "& button": {
              transform: isDirectionRTL ? "rotate(180deg)" : "rotate(0deg)",

              [theme.breakpoints.down("600")]: {
                width: 25,
                height: 25,
                minWidth: 25,
              },
            },
          },
        },
      },
    });

  const classes = useStyles();
  const lang = window.getAppLang();
  const options = {
    rowsPerPage: props.rowsPerPage || 10,
    page: props.pagination && props.page,
    download: !!props.exportToExcel,
    print: false,
    search: !!props.search,
    viewColumns: !!props.viewColumns,
    filter: !!props.filter,
    rowsExpanded: rowsExpanded,
    expandableRows: props.expandableRows,
    isRowExpandable: (dataIndex, expandedRows) => {
      return props.isRowExpandable ? props.isRowExpandable(dataIndex) : true;
    },
    onRowExpansionChange: (curExpanded, allExpanded) => {
      if (!allExpanded.length) setRowsExpanded([]);
      else setRowsExpanded(curExpanded.map((e) => e.index));
    },
    renderExpandableRow: (rowData, rowMeta) =>
      props.renderExpandableRow &&
      props.renderExpandableRow(rowMeta?.dataIndex),

    setRowProps: (row, dataIndex, rowIndex) => {
      return {
        onDoubleClick: () => {
          props.cellDoubleClick && props.cellDoubleClick(row[0]);
        },
        style: {
          backgroundColor:
            rowIndex % 2 === 0 ? "#ffffff" : "rgba(221, 226, 236, 0.27)",
        },
      };
    },

    textLabels: {
      body: {
        noMatch: Object.translate("FULL_TABLE.BODY.NO_MATCH"),
        toolTip: Object.translate("FULL_TABLE.BODY.SORT"),
        columnHeaderTooltip: (column) =>
          `${Object.translate("FULL_TABLE.BODY.SORT_FOR")} ${column.label}`,
      },
      pagination: {
        next: Object.translate("FULL_TABLE.PAGINATION.NEXT"),
        previous: Object.translate("FULL_TABLE.PAGINATION.PREVIOUS"),
        rowsPerPage: Object.translate("FULL_TABLE.PAGINATION.ROWS_PER_PAGE"),
        displayRows: Object.translate("FULL_TABLE.PAGINATION.OF"),
      },
      toolbar: {
        search: Object.translate("FULL_TABLE.TOOLBAR.SEARCH"),
        downloadCsv: Object.translate("FULL_TABLE.TOOLBAR.EXPORT_DATA"),
        print: Object.translate("FULL_TABLE.TOOLBAR.PRINT"),
        viewColumns: Object.translate("FULL_TABLE.TOOLBAR.VIEW_COLUMNS"),
        filterTable: Object.translate("FULL_TABLE.TOOLBAR.FILTER_TABLE"),
      },
      filter: {
        all: Object.translate("FULL_TABLE.FILTER.ALL"),
        title: Object.translate("FULL_TABLE.FILTER.FILTER_BY"),
        reset: Object.translate("FULL_TABLE.FILTER.reset"),
      },
      viewColumns: {
        title: Object.translate("FULL_TABLE.COLUMNS.VIEW"),
        titleAria: Object.translate("FULL_TABLE.COLUMNS.SHOW_HIDE"),
      },
      selectedRows: {
        text: Object.translate("FULL_TABLE.ROWS.SELECTED"),
        delete: Object.translate("FULL_TABLE.ROWS.DELETE"),
        deleteAria: Object.translate("FULL_TABLE.ROWS.DELETE_S"),
      },
    },
    filterType: "textField",

    downloadOptions: {
      filterOptions: {
        useDisplayedColumnsOnly: true,
        useDisplayedRowsOnly: true,
      },
    },
    onDownload: props.exportToExcel
      ? (buildHead, buildBody, columns, data) => {
          props.exportToExcel(
            columns.map((c) => c.name),
            data.map((d) => d.data)
          );

          return false;
        }
      : () => false,
    selectableRowsOnClick: !props.disableSelectRowsOnClick,
    selectableRows: props.selectableRows
      ? "multiple"
      : props.singleRowSelect
      ? "single"
      : "none",
    fixedHeader: true,
    Delete: true,

    selectableRowsOnClick: false,
    onCellClick: (colData, cellMeta) => {
      if (props.onCellClick && cellMeta.colIndex !== props.columns.length - 1)
        props.onCellClick(cellMeta.dataIndex, cellMeta.colIndex);
    },
    rowsSelected: rowsSelected,
    isRowSelectable: (dataIndex, selectedRows) =>
      props.data[dataIndex][props.data[dataIndex].length - 1] !== false,
    onRowSelectionChange: async (
      currentRowsSelected,
      allRowsSelected,
      rowsSelected
    ) => {
      let rowsSelected1 = allRowsSelected.map((row) => row.dataIndex);
      let data = props.data;
      let IDS = [];
      data.map((row, index) => {
        let bool = rowsSelected1.includes(index);
        if (bool) {
          IDS.push(row[0]);
        }
      });
      setrowsSelected(rowsSelected1);
      props.setIDS && props.setIDS(IDS);
    },
    draggableColumns: { enabled: true },

    customFooter: props.customFooter
      ? props.customFooter
      : (
          count,
          page,
          rowsPerPage,
          changeRowsPerPage,
          changePage,
          textLabels
        ) => {
          return (
            <CustomFooter
              rowsPerPageOptions={props.rowsPerPageOptions}
              pagination={props.pagination}
              handlePaginationChange={props.handlePaginationChange}
              enableSearch={props.enableSearch}
              searchValue={props.searchValue}
              count={props.count ? props.count : count}
              paginatedCount={
                props.paginatedCount ? props.paginatedCount : null
              }
              page={page}
              rowsPerPage={rowsPerPage}
              changeRowsPerPage={changeRowsPerPage}
              changePage={changePage}
              textLabels={textLabels}
              handleAdd={props.handleAdd}
              switchDialog={props.switchDialog}
              dialogIcon={props.dialogIcon}
              dialogTitle={props.dialogTitle}
              setOperation={props.setOperation}
            />
          );
        },

    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => {
      return (
        <CustomToolbar
          handleDelete={props.handleDelete}
          handleDownload={props.handleDownload}
          handleEdit={props.handleEdit}
          handleView={props.handleView}
          selectedRows={selectedRows}
          setrowsSelected={setrowsSelected}
          additionalActions={props.additionalActions}
        />
      );
    },
  };

  const CustomCheckbox = (props) => {
    let newProps = Object.assign({}, props);
    newProps.color =
      props["data-description"] === "row-select" ? "secondary" : "primary";
    newProps.classes.disabled = newProps.classes.checked;
    return <Checkbox {...newProps} />;
  };

  const components = {
    ExpandButton: (props) => {
      if (props.hideExbandBtn && props.hideExbandBtn(props.dataIndex))
        return <div style={{ width: "24px" }} />;

      return <ExpandButton {...props} />;
    },
  };

  return (
    <div className={classes.fullTableContainer}>
      {props.data ? (
        <>
          <ThemeProvider theme={getMuiTheme()}>
            <div
              style={{ display: "table", tableLayout: "fixed", width: "100%" }}
            >
              <MUIDataTable
                data={props.data}
                columns={props.columns}
                options={options}
                components={components}
              />
            </div>
          </ThemeProvider>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
