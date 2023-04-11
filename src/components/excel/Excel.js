const dataAlignment = {
  vertical: "middle",
  horizontal: "center",
  wrapText: true,
};

const tabelHeaderTitleFont = {
  name: "Sakkal Majalla",
  family: 2,
  size: 16,
  bold: true,
};
const columnTitleFont = {
  name: "Sakkal Majalla",
  family: 2,
  size: 14,
  bold: true,
};
const dataFont = { name: "Sakkal Majalla", family: 2, size: 12, bold: false };
const dataBorder = { bottom: { style: "thin" }, left: { style: "thin" } };

const addWorkSheetOptions = {
  views: [
    {
      rightToLeft: true,
    },
  ],
};

const pageSetup = {
  paperSize: 9,
  orientation: "landscape",
  horizontalDpi: 300,
  verticalDpi: 72,
  margins: {
    header: 0.1,
    footer: 0.1,
    left: 0.1,
    right: 0.1,
    top: 0.1,
    bottom: 0.1,
  },
  fitToPage: false,
  showGridLines: true,
  scale: 0.5,
};
const getMaxRowHeight = (arr) => {
  let maxHeight = 20;
  if (arr && Array.isArray(arr))
    arr.map((e) => {
      if (e) maxHeight = Math.max(`${e}`.split("\n").length * 20, maxHeight);
    });
  return maxHeight;
};

const nextLetter = (value) => {
  let carry = 1,
    res = "";
  for (let i = value.length - 1; i >= 0; i--) {
    let char = value.toUpperCase().charCodeAt(i);

    char += carry;

    if (char > 90) {
      char = 65;
      carry = 1;
    } else carry = 0;

    res = String.fromCharCode(char) + res;
    if (!carry) {
      res = value.substring(0, i) + res;
      break;
    }
  }

  if (carry) res = "A" + res;

  return res;
};

const handleTextValidation = (text) => {
  if (!text) return;
  const unValidChar = ["\\", "/", "?", "*", "[", "]", ":"];
  let newText = text.split("/").join(" ");
  return newText;
};

export const exportDataToXsl = async ({ fileName, workSheets }) => {
  const Excel = await import("exceljs/dist/exceljs.min.js");
  let alertTitle = null,
    alertMsg = null;

  if (!workSheets || !Array.isArray(workSheets)) {
    alertTitle = Object.translate("xsl.workSheets.badInput.alertTitle");
    alertMsg = Object.translate("xsl.workSheets.badInput.alertMsg");
  } else if (!workSheets.length) {
    alertTitle = Object.translate("xsl.workSheets.emptyInput.alertTitle");
    alertMsg = Object.translate("xsl.workSheets.emptyInput.alertMsg");
  }

  if (alertTitle) {
    console.error({ alertTitle });
    return;
  }
  const workbook = new Excel.Workbook();
  workbook.views = [
    {
      x: 0,
      y: 0,
      width: 10000,
      height: 20000,
      firstSheet: 0,
      activeTab: 0,
      visibility: "visible",
    },
  ];

  let outputWorkSheets = [];

  for (let sheet_idx = 0; sheet_idx < workSheets.length; sheet_idx++) {
    outputWorkSheets[sheet_idx] = workbook.addWorksheet(
      handleTextValidation(workSheets[sheet_idx].title),
      addWorkSheetOptions
    );

    Object.keys(pageSetup).map((key) => {
      outputWorkSheets[sheet_idx].pageSetup[key] = pageSetup[key];
    });
  }

  for (let sheet_idx = 0; sheet_idx < outputWorkSheets.length; sheet_idx++) {
    let sheet = outputWorkSheets[sheet_idx];
    let letter = "A";
    let {
      imageHeader,
      tableHeader,
      tableHeaderHeight,
      tableHeaderWidth,
      columnTitles,
      columnWidth,
      rows,
      cellsFill,
      lastRowFont,
      protect,
    } = workSheets[sheet_idx];
    let headerRowIdx = 0;

    if (imageHeader) {
      headerRowIdx = 1;
      let workSheetImageHeader = workbook.addImage({
        base64: imageHeader.base64,
        extension: imageHeader.extension,
      });
      let headerLetter = "A";
      for (let cw_idx = 0; cw_idx < columnTitles.length - 1; cw_idx++) {
        headerLetter = nextLetter(headerLetter);
      }
      sheet.addImage(workSheetImageHeader, {
        tl: { col: 3, row: 0 },
        br: { col: 5, row: 1 },
        editAs: "absolute",
      });
      sheet.mergeCells(`A1:${headerLetter}1`);
      sheet.getRow(1).height = imageHeader.height;
    }
    if (tableHeader) {
      headerRowIdx = headerRowIdx + 1;
      let headerLetter = "A";
      for (let cw_idx = 0; cw_idx < columnTitles.length - 1; cw_idx++) {
        headerLetter = nextLetter(headerLetter);
      }

      sheet.mergeCells(`A${headerRowIdx}:${headerLetter}${headerRowIdx}`);

      sheet.getCell(`A${headerRowIdx}`).value = tableHeader;
      sheet.getRow(headerRowIdx).font = tabelHeaderTitleFont;
      sheet.getRow(headerRowIdx).alignment = dataAlignment;
      sheet.getRow(headerRowIdx).height = tableHeaderHeight || 50;
      sheet.getRow(headerRowIdx).width = tableHeaderWidth || 900;
    }

    for (let cw_idx = 0; cw_idx < columnTitles.length; cw_idx++) {
      sheet.getColumn(letter).width = columnWidth[cw_idx] || 50;
      letter = nextLetter(letter);
    }
    let columnTitlesRowIdx = headerRowIdx + 1;
    sheet.addRow(columnTitles);
    sheet.getRow(columnTitlesRowIdx).font = columnTitleFont;
    sheet.getRow(columnTitlesRowIdx).alignment = dataAlignment;
    sheet.getRow(columnTitlesRowIdx).height = 40;

    for (let row_idx = 0; row_idx < rows.length; row_idx++) {
      let currentRowIdx = columnTitlesRowIdx + row_idx;
      sheet.addRow([
        ...rows[row_idx].map((val) => {
          if (val === null) return "";
          return val;
        }),
      ]);
      sheet.getRow(currentRowIdx).font = dataFont;
      sheet.getRow(currentRowIdx).alignment = dataAlignment;
      sheet.getRow(currentRowIdx).height = getMaxRowHeight(rows[row_idx]);
    }
    sheet.lastRow.alignment = dataAlignment;
  }
  let buf = await workbook.xlsx.writeBuffer();
  let xslFileName = fileName
    ? `${fileName}.xlsx`
    : `EXCEL_FILE_${new Date().getTime()}.xlsx`;

  const downloadUrl = window.URL.createObjectURL(new Blob([buf]));

  const link = document.createElement("a");

  link.href = downloadUrl;

  link.setAttribute("download", xslFileName);

  document.body.appendChild(link);

  link.click();
};
