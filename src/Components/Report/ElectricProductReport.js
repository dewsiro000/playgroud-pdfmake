import pdfMake from 'addthaifont-pdfmake/build/pdfmake'
import 'addthaifont-pdfmake/build/vfs_fonts'
import dayjs from 'dayjs'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import _ from 'lodash'
dayjs.extend(buddhistEra)

pdfMake.fonts = {
  Sarabun: {
    normal: 'Sarabun-Light.ttf',
    bold: 'Sarabun-Regular.ttf',
    italics: 'Sarabun-LightItalic.ttf',
    bolditalics: 'Sarabun-Italic.ttf',
  },
}

const renderTableBody = (data) => {
  const content = _.map(data?.arr, (row, key) => [
    { text: row?.Time || '', style: 'tableContent' },
    { text: row?.PF || '', style: 'tableContent' },
    {
      text: row?.["1AH5"] || "",
      style: 'tableContent',
    },
    { text: row?.Neatral || '', style: 'tableContent' },
    { text: row?.Neatral || '', style: 'tableContent' },
    { text: row?.Temp || '', style: 'tableContent' },
    { text: row?.Power_Not || '', style: 'tableContent' },
    { text: row?.Voltage || '', style: 'tableContent' },
    { text: row?.Pressure || '', style: 'tableContent' },
    { text: row?.TempC || '', style: 'tableContent' },
    { text: row?.Flow || '', style: 'tableContent' },
    { text: row?.comment || '', style: 'tableContent' },
  ])
  return content
}


const ElectricProductReport = async (form, formInput = [], date) => {
  console.log('Form Input ', formInput)

  let docDefinition = {
    pageSize: 'A4',
    pageOrientation: 'landscape',
    pageMargins: [10, 73, 10, 10],
    defaultStyle: {
      font: 'Sarabun',
      fontSize: '10',
    },

    header: [
      {
        margin: [10, 8, 10, 0],
        style: 'tableExample',
        table: {
          widths: ['24.1%', '55.17%', '20.73%'],
          body: [
            [
              {
                text: 'THAITALLOW AND OIL CO.,LTD.',
                rowSpan: 2,
                fit: [35, 35],
                alignment: 'center',
                margin: [0, 2, 0, 0],
                border: [true, true, true, true],
              },
              {
                text: `${form?.name || 'Electricity Produce Report'}`,
                alignment: 'center',
                bold: true,
                rowSpan: 2,
                font: 'Sarabun',
                fontSize: '15',
                margin: [0, 5],
                border: [true, true, true, true],
              },
              {
                text: `รหัสเอกสาร FM-BM-001  `,
                // text: `รหัสเอกสาร FM-BM-00: ${form?.docNo || '-'}  `,
                fontSize: '12',
              },
            ],
            [
              { text: '', alignment: 'center' },
              { text: ``, alignment: 'center' },
              {
                text: `วันที่บังคับใช้: ${dayjs(form?.enforceDate).format('DDMMMYYYY') || '-'
                  }`,
                fontSize: '12',
              },
            ],
            [
              {
                text: '',
                alignment: 'center',
                border: [true, true, true, true],
              },
              { text: ``, alignment: 'center' },
              // {
              //   text: 'THAITALLOW AND OIL CO.,LTD.',
              //   alignment: 'center',
              //   bold: true,
              //   font: 'Sarabun',
              //   fontSize: '10',
              //   border: [true, false, true, true],
              // },
              // {
              //   text: `วันที่ ${dayjs(date).format(
              //     'DD เดือน MMMM พ.ศ. BBBB '
              //   )}`,
              //   alignment: 'center',
              //   bold: true,
              //   fontSize: '10',
              //   border: [true, false, true, true],
              // },
              {
                text: `วันที่ประกาศใช้ล่าสุด: ${form?.editVersion || '-'}`,
                fontSize: '10',
              },
            ],
          ],
        },
      },
    ],
    info: {
      title: `Electricity Produce Report ${dayjs(date).format('DD_MM_BBBB')}`,
      subject: '',
    },
    content: [
      {
        //alignment: 'between',
        table: {
          widths: [

            '8%',  //1
            '8%',  //2
            '8%',  //3
            '8%',  //4
            '8%', //5
            '8%',  //6
            '8%',  //7
            '8%',  //8
            '8%',  //9
            '8%',  //10
            '8%',  //11
            '12%',  //12
          ],
          body: [
            [
              //Row 1
              { //1
                text: 'Time',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,
                // colSpan: 10,
              },
              { //2
                text: 'PF',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,

              },
              { //3
                text: 'IAH5',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,

              },
              { //4
                text: 'Netral',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,

              },
              { //5
                text: 'Netral',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,
              },
              { //6
                text: 'Temp',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,

              },
              { //7
                text: 'Power Not',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,
              },
              { //8
                text: 'Voltag',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,
              },
              { //9
                text: 'แรงดัน',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,
              },
              { //10
                text: 'อุณหภูมิ',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,
              },
              { //11
                text: 'Flow',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
                colSpan: 1,
              },
              { //12
                text: '',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
              },
            ],

            [
              //Row 2
              { //1
                text: '',
                margin: [0, -1],
                border: [true, false, true, true],
                // alignment: 'left',
                // bold: true,
                // border: [true, false, true, true],
                // colSpan: 10,
              },
              { //2           
                text: '',
                margin: [0, -1],
                border: [true, false, true, true],
                // alignment: 'center',
                // bold: true,
                // border: [true, true, true, false],

              },
              { //3
                text: '',
                margin: [0, -1],
                border: [true, false, true, true],
                // alignment: 'center',
                // bold: true,
                // border: [true, true, true, false],

              },
              { //4
                text: '',
                margin: [0, -1],
                border: [true, false, true, true],
                // alignment: 'center',
                // bold: true,
                // border: [true, true, true, false],

              },
              { //5
                text: '',
                margin: [0, -1],
                border: [true, false, true, true],
                // alignment: 'center',
                // bold: true,
                // border: [true, true, true, false],
              },
              { //6
                text: '',
                margin: [0, -1],
                border: [true, false, true, true],
                // alignment: 'center',
                // bold: true,
                // border: [true, true, true, false],

              },
              { //7
                text: '',
                margin: [0, -1],
                border: [false, false, true, true],
                // alignment: 'center',
                // bold: true,
                // border: [true, true, true, false],
              },
              { //8
                text: '(V)',
                alignment: 'center',
                bold: true,
                border: [true, false, true, true],
              },
              { //9
                text: '(Mpa)',
                alignment: 'center',
                bold: true,
                border: [true, false, true, true],
              },
              { //10
                text: '(C)',
                alignment: 'center',
                bold: true,
                border: [true, false, true, true],
              },
              { //11
                text: '(t/h)',
                alignment: 'center',
                bold: true,
                border: [true, false, true, true],
              },
              { //12
                text: 'หมายเหตุ',
                alignment: 'center',
                bold: true,
                border: [true, false, true, false],
              },
            ],


            [
              //Row 3
              { //1
                text: 'REC',
                alignment: 'center',
                bold: true,
                border: [true, false, true, true],
                colSpan: 1,
              },
              { //2
                text: '0.90-0.99',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,

              },
              { //3
                text: '+kw/h',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,

              },
              { //4
                text: '-kw/h',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,

              },
              { //5
                text: '+kw/h',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,
              },
              { //6
                text: '2TD',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,

              },
              { //7
                text: 'Over 6750 kw',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,
              },
              { //8
                text: '380-420',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,
              },
              { //9
                text: '3.00-3.80',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
              },
              { //10
                text: '440-470',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,
              },
              { //11
                text: '40-50',
                alignment: 'center',
                bold: true,
                border: [true, true, true, true],
                colSpan: 1,
              },
              { //12
                text: '',
                margin: [0, -1],
                border: [true, false, true, true],
                colSpan: 1,
                // alignment: 'center',
                // bold: true,
                // border: [true, true, true, false],
              },
            ],

            ...renderTableBody(formInput),

          ],
        },

        styles: {
          header: {
            fontSize: 8,
            bold: true,
            alignment: 'right',
          },
          header1: {
            fontSize: 12,
            bold: true,
          },
        },
      },
    ],
    // footer: function (currentPage, pageCount) {
    //   return []
    // },

    styles: {
      icon: { font: 'Sarabun' },
      header: {
        fontSize: 12,
        bold: true,
      },
      header2: {
        fontSize: 12,
      },
      headerTable: {
        fontSize: 11,
        margin: [0, -2],
        bold: true,
        alignment: 'center',
      },
      tableContent: {
        fontSize: 10,
        margin: [0, -2],
        alignment: 'center',
      },
    },
  }
  pdfMake.createPdf(docDefinition).open()
}
export default ElectricProductReport
