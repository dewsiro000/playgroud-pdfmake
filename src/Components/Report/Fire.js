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
        { text: "" || '', style: 'tableContent' },
        { text: "" || '', style: 'tableContent' },
        { text: "" || '', style: 'tableContent' },
        { text: "" || '', style: 'tableContent' },
        { text: "" || '', style: 'tableContent' },
        { text: "" || '', style: 'tableContent' },
        { text: "" || '', style: 'tableContent' },
        { text: row?.comment || '', style: 'tableContent' },
    ])
    return content
}

const Fire = async (form, formInput, date) => {
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
                margin: [10, 13, 10, 2],
                style: 'tableExample',
                table: {
                    widths: ['25%', '50%', '12.45%', '12.455%'],
                    body: [
                        [  // Row 1
                            {  //1
                                text: '', alignment: 'center',
                                border: [true, true, true, false],
                            },
                            { //2
                                text: `${form?.name || 'บันทึกความชื้นเชื้อเพลิง'}`,
                                alignment: 'center',
                                bold: true,
                                rowSpan: 2,
                                font: 'Sarabun',
                                fontSize: '13',
                                margin: [0, 5],
                                border: [true, true, true, false],
                            },
                            {  //3
                                // text: `รหัสเอกสาร FM-BM-  ${form?.docNo || ''}  `,
                                text: `รหัสเอกสาร   FM-BM-002  `,
                                fontSize: '10.5',
                                colSpan: 2,
                            },
                            {
                                text: '', margin: [0, -1],
                                bold: true,
                                border: [true, true, true, true]
                            },
                        ],
                        [  // Row 2
                            {
                                text: '',
                                alignment: 'center',
                                border: [true, false, true, false],
                            },

                            { text: ``, alignment: 'center' },
                            {
                                text: `แก้ไขครั้งที่  :  02`,
                                fontSize: '10',
                            },
                            {
                                text: 'หน้าที่: 1/1',
                                alignment: 'left',

                            },
                        ],
                        [  // Row 3
                            {
                                text: 'THAI TALLOW AND OIL CO.,LTD.',
                                alignment: 'center',
                                bold: true,
                                font: 'Sarabun',
                                margin: [2, -3],
                                fontSize: '9.5',
                                border: [true, false, true, true],
                            },
                            {
                                text: 'ประจำเดือน..................................พ.ศ...................   ',
                                alignment: 'center',
                                border: [true, false, true, true],
                                margin: [0, -7],
                                fontSize: '11.7',
                            },
                            {
                                // text: `วันที่ประกาศใช้:${dayjs(date).format(
                                //     'DD/MM/BBBB '
                                // )}`,
                                text: 'วันที่ประกาศใช้ : 01/06/2564',
                                fontSize: '10',
                                colSpan: 2,
                            },
                            { text: '', margin: [0, 0], border: [true, false, true, true] },
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
                        '7%',  //1
                        '11%', //2
                        '11%', //3
                        '11%', //4
                        '11%', //5
                        '11%', //6
                        '11%', //7
                        '11%', //8
                        '16%', //9
                    ],
                    body: [
                        [
                            // Row 1
                            {  //1
                                text: '',
                                alignment: 'center',
                                bold: true,
                                border: [true, true, true, false],
                            },
                            { //2
                                text: 'ช่วงเวลาการวัด',
                                alignment: 'center',
                                fontSize: '11',
                                bold: true,
                                border: [true, true, false, true],
                                colSpan: 7,
                                margin: [0, 2],

                            },
                            { //3
                                text: '',
                                alignment: 'center',
                                bold: true,
                                border: [true, true, true, false],
                            },
                            { //4
                                text: '',
                                alignment: 'center',
                                bold: true,
                                border: [true, true, true, false],
                            },
                            { //5
                                text: '',
                                colSpan: 2,
                                alignment: 'center',
                                border: [true, true, true, false],
                                bold: true,
                            },
                            {}, //6
                            {  //7
                                text: '',
                                colSpan: 2,
                                alignment: 'center',
                                border: [true, true, true, false],
                                bold: true,
                            },
                            {}, //8
                            {  //9
                                text: 'หมายเหตุ',
                                alignment: 'center',
                                fontSize: '12',
                                bold: true,
                                border: [true, true, true, false],
                                // margin: [0, 2],
                            },

                        ],
                        [
                            // Row 2
                            {  //1
                                text: 'วันที่',
                                alignment: 'center-bottom',
                                margin: [6, -9],
                                bold: true,
                                border: [true, false, true, false],
                            },
                            { //2
                                text: '01.00',
                                alignment: 'center',
                                bold: true,
                                border: [true, true, true, false],
                                margin: [0, 2],
                            },
                            { //3
                                text: '04.00',
                                alignment: 'center',
                                bold: true,
                                border: [true, true, true, false],
                                margin: [0, 2],
                            },
                            { //4
                                text: '08.00',
                                alignment: 'center',
                                bold: true,
                                border: [true, true, true, false],
                                margin: [0, 2],
                            },
                            { //5
                                text: '12.00',
                                // colSpan: 2,
                                alignment: 'center',
                                border: [true, true, true, false],
                                margin: [0, 2],
                                bold: true,
                            },
                            { //6
                                text: '16.00',
                                // colSpan: 2,
                                alignment: 'center',
                                border: [true, true, true, false],
                                margin: [0, 2],
                                bold: true,
                            },
                            {  //7
                                text: '20.00',
                                // colSpan: 2,
                                alignment: 'center',
                                border: [true, true, true, false],
                                margin: [0, 2],
                                bold: true,
                            },
                            {  //8
                                text: '24.00',
                                // colSpan: 2,
                                alignment: 'center',
                                border: [true, true, true, false],
                                margin: [0, 2],
                                bold: true,
                            },
                            {  //9
                                text: '',
                                alignment: 'center',
                                bold: true,
                                border: [true, false, true, false],
                            },
                        ],
                        ...TableBody,
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
                                text: '',
                                alignment: 'left',
                                border: [false, false, false, false],

                            },
                            {
                                text: ` `,
                                alignment: 'center',
                                border: [false, false, false, false],
                            },
                        ],
                        [
                            {
                                text: '     ',
                                alignment: 'center',
                                border: [false, false, false, false],
                            },
                            {
                                text: ' ......................................................... ',
                                alignment: 'center',
                                border: [false, false, false, false],
                            },
                        ],
                        [
                            {
                                text: '',
                                alignment: 'left',
                                border: [false, false, false, false],
                            },
                            {
                                text: '(.........................................................)   ',
                                alignment: 'center',
                                border: [false, false, false, false],
                            },
                        ],
                        [
                            {
                                text: '',
                                alignment: 'center',
                                border: [false, false, false, false],
                            },
                            {
                                text: ' หัวหน้าแผนก Biomass ',
                                alignment: 'center',
                                border: [false, false, false, false],
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
                margin: [0, 1],
                alignment: 'center',
            },
        },
    }
    pdfMake.createPdf(docDefinition).open()
}
export default Fire
