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
      title: `Electricity Produce Report ${dayjs(date).format('DD_MM_BBBB')}`,
      subject: '',
    },
    content: [
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
export default ElectricProductReport
