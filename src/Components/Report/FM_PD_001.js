import pdfMake from 'addthaifont-pdfmake/build/pdfmake'
import 'addthaifont-pdfmake/build/vfs_fonts'
import dayjs from 'dayjs'
import _ from 'lodash'
import buddhistEra from 'dayjs/plugin/buddhistEra'
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
    { text: key + 1 || '', style: 'tableContent' },
    { text: row?.No || '', style: 'tableContent' },
    {
      text: Intl.NumberFormat('en-US').format(row?.weight) || '',
      style: 'tableContent',
    },
    { text: row?.start || '', style: 'tableContent' },
    { text: row?.Min15.แรงดัน || '', style: 'tableContent' },
    { text: row?.Min15.อุณหภูมิ || '', style: 'tableContent' },
    { text: row?.Min30.แรงดัน || '', style: 'tableContent' },
    { text: row?.Min30.อุณหภูมิ || '', style: 'tableContent' },
    { text: row?.Timer || '', style: 'tableContent' },
    { text: row?.TimeOut || '', style: 'tableContent' },
    { text: row?.comment || '', style: 'tableContent' },
  ])
  return content
}

const FM_PD_001 = async (form, formInput, date) => {
  const TableBody = renderTableBody(formInput)

  let docDefinition = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
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
                text: `${form?.name || 'เอกสาร FM_PD_001'}`,
                alignment: 'center',
                bold: true,
                rowSpan: 2,
                font: 'Sarabun',
                fontSize: '18',
                margin: [0, 5],
                border: [true, true, true, true],
              },
              {
                text: `เอกสารหมายเลข: ${form?.docNo || '-'}  `,
                fontSize: '12',
              },
            ],
            [
              { text: '', alignment: 'center' },
              { text: ``, alignment: 'center' },
              {
                text: `วันที่บังคับใช้: ${
                  dayjs(form?.enforceDate).format('DDMMMYYYY') || '-'
                }`,
                fontSize: '12',
              },
            ],
            [
              {
                text: 'THAITALLOW AND OIL CO.,LTD.',
                alignment: 'center',
                bold: true,
                font: 'Sarabun',
                fontSize: '10',
                border: [true, false, true, true],
              },
              {
                text: `วันที่ ${dayjs(date).format(
                  'DD เดือน MMMM พ.ศ. BBBB '
                )}`,
                alignment: 'center',
                bold: true,
                fontSize: '10',
                border: [true, false, true, true],
              },
              {
                text: `แก้ไขครั้งที่: 0${form?.editVersion || '-'}`,
                fontSize: '10',
              },
            ],
          ],
        },
      },
    ],
    info: {
      title: `FM_PD_001 ${dayjs(date).format('DD_MM_BBBB')}`,
      subject: '',
    },
    content: [
      {
        table: {
          widths: [
            '9%',
            '6%',
            '9%',
            '9%',
            '10%',
            '9%',
            '9%',
            '9%',
            '7%',
            '8%',
            '14%',
          ],
          body: [
            [
              // Row 1
              {
                text: 'ชุดที่',
                alignment: 'left',
                bold: true,
                border: [true, true, true, false],
              },
              {
                text: '',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
              },
              {
                text: 'นํ้าหนัก',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
              },
              {
                text: 'เริ่มอบ',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
              },
              {
                text: '15 นาที',
                colSpan: 2,
                alignment: 'center',
                border: [true, true, true, false],
                bold: true,
              },
              {},
              {
                text: '30 นาที',
                colSpan: 2,
                alignment: 'center',
                border: [true, true, true, false],
                bold: true,
              },
              {},
              {
                text: '',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
              },
              {
                text: '',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
              },
              {
                text: '',
                alignment: 'center',
                bold: true,
                border: [true, true, true, false],
              },
            ],
            [
              //Row 2
              {
                text: '',
                style: 'headerTable',
                border: [true, false, true, false],
              },
              {
                text: 'หม้อที่',
                style: 'headerTable',
                border: [true, false, true, false],
              },
              {
                text: '',
                style: 'headerTable',
                border: [true, false, true, false],
              },
              {
                text: '',
                style: 'headerTable',
                border: [true, false, true, false],
              },
              {
                text: 'แรงดัน',
                style: 'headerTable',
                border: [true, true, true, false],
              },
              {
                text: 'อุณหภูมิ',
                style: 'headerTable',
                border: [true, true, true, false],
              },
              {
                text: 'แรงดัน',
                style: 'headerTable',
                border: [true, true, true, false],
              },
              {
                text: 'อุณหภูมิ',
                style: 'headerTable',
                border: [true, true, true, false],
              },
              {
                text: 'เวลาอบ',
                style: 'headerTable',
                border: [true, false, true, false],
              },
              {
                text: 'เวลาออก',
                style: 'headerTable',
                border: [true, false, true, false],
              },
              {
                text: 'หมายเหตุ',
                style: 'headerTable',
                border: [true, false, true, false],
              },
            ],
            [
              //Row 3
              {
                text: 'ค่าควบคุม',
                alignment: 'right',
                margin: [0, -1],
                bold: true,
                border: [true, false, true, true],
              },
              { text: '', border: [true, false, true, true], margin: [0, -1] },
              {
                text: '25-30(ตัน)',
                alignment: 'center',
                margin: [0, -1],
                bold: true,
                border: [true, false, true, true],
              },
              {
                text: 'เวลา45-60M',
                alignment: 'center',
                margin: [0, -1],
                bold: true,
                border: [true, false, true, true],
              },
              {
                text: '0.80-1.20 bar',
                bold: true,
                alignment: 'center',
                margin: [0, -1],
                border: [true, false, true, true],
              },
              {
                text: '100-100 ํC',
                bold: true,
                alignment: 'center',
                margin: [0, -1],
                border: [true, false, true, true],
              },
              {
                text: '1.7-2.7 bar',
                bold: true,
                alignment: 'center',
                margin: [0, -1],
                border: [true, false, true, true],
              },
              {
                text: '130-140 ํC',
                bold: true,
                alignment: 'center',
                margin: [0, -1],
                border: [true, false, true, true],
              },
              { text: '', margin: [0, -1], border: [true, false, true, true] },
              { text: '', margin: [0, -1], border: [true, false, true, true] },
              {
                text: '',
                margin: [0, -1],
                border: [true, false, true, true],
              },
            ],
            ...TableBody,
          ],
        },
      },
      {
        alignment: 'between',
        table: {
          widths: [
            '9%',
            '6%',
            '9%',
            '9%',
            '10%',
            '9%',
            '9%',
            '9%',
            '7%',
            '8%',
            '14%',
          ],
          body: [
            [
              //Row 1
              {
                text: '',
                colSpan: 3,
                border: [true, false, false, true],
              },
              {},
              {},
              {
                text: 'รวม',
                alignment: 'center',
                style: 'header',
                border: [true, true, true, true],
              },
              { text: '', colSpan: 6, border: [false, false, false, false] },
              {},
              {},
              {},
              {},
              {},

              { text: '', border: [false, false, true, false] },
            ],
            [
              {
                text: 'หมายเหตุ          ....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................',
                alignment: 'left',
                bold: true,
                border: [true, false, true, true],
                colSpan: 10,
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
          ],
        },
      },
      {
        alignment: 'between',
        table: {
          widths: [`50%`, `50%`],
          body: [
            [
              {
                text: '\nผู้รายงานกะ A 1.ลงชื่อ................................ 2.ลงชื่อ...............................',
                alignment: 'left',

                border: [true, true, true, false],
              },
              {
                text: `\nผู้รายงานกะ B 1.ลงชื่อ................................ 2.ลงชื่อ............................... `,

                alignment: 'center',
                border: [true, true, true, false],
              },
            ],
            [
              {
                text: '    (.......................................)    (.......................................)  ',
                alignment: 'center',
                border: [true, false, true, false],
              },
              {
                text: '    (.......................................)    (.......................................)  ',
                alignment: 'center',
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: 'หัวหน้างานกะ A ลงชื่อ.............................................',
                alignment: 'left',

                border: [true, false, true, false],
              },
              {
                text: 'หัวหน้างานกะ B ลงชื่อ.......................................',

                alignment: 'left',
                border: [true, false, true, false],
              },
            ],
            [
              {
                text: '(.........................................................)   ',
                alignment: 'center',
                border: [true, false, true, true],
              },
              {
                text: '(.........................................................)    ',
                alignment: 'center',
                border: [true, false, true, true],
              },
            ],
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
export default FM_PD_001
