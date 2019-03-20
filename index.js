import {AutocompleteSelectCellEditor} from './ag-grid-autocomplete-editor';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {Grid} from 'ag-grid-community';

const selectData = [
    {value: 0, label: 'this'},
    {value: 1, label: 'is'},
    {value: 2, label: 'sparta'},
    {value: 3, label: 'yolo'},
    {value: 4, label: 'yoloooooo'},
    {value: 5, label: 'yola'},
    {value: 6, label: 'yoli'},
    {value: 7, label: 'yolu'},
    {value: 8, label: 'yolp'},
    {value: 9, label: 'yolop'},
    {value: 10, label: 'yolpo'},
    {value: 11, label: 'yolui'},
    {value: 12, label: 'yolqw'},
    {value: 13, label: 'yolxz'},
    {value: 14, label: 'yolcv'},
    {value: 15, label: 'yolbn'},
];
const rowDatas = [
    {make: null, model: null, price: null},
    {make: null, model: null, price: null},
    {make: null, model: null, price: null},
    {make: null, model: null, price: null},
    {make: null, model: null, price: null},
    {make: null, model: null, price: null},
    {make: null, model: null, price: null},
];
const columnDefs = [
    {
        headerName: "Make",
        field: "make",
        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            data: selectData,
            placeholder: 'Select an option',
        },
        valueFormatter: (params) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true,
    },
    {
        headerName: "Model",
        field: "model",
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
            values: selectData.map(d => d.label),
        },
        editable: true,
    },
    {
        headerName: "Price",
        field: "price",
        editable: true,
    },
];
const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowDatas,
    suppressScrollOnNewData: false,
};
let eGridDiv = document.querySelector('#myGrid');
new Grid(eGridDiv, gridOptions);
