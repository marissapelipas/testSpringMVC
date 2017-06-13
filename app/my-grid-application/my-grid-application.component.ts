import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";
import {RedComponentComponent} from "../red-component/red-component.component";

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
  private gridOptions: GridOptions;
  let
  rowData = [];

  constructor() {
    let columnDefs = [
      {
        headerName: '#', width: 50, checkboxSelection: true, suppressSorting: true,
        suppressMenu: true, pinned: true
      },
      {headerName: "Make", field: "make", editable: true},
      {headerName: "Model", field: "model", editable: true},
      {headerName: "Price", field: "price", editable: true},
      {headerName: "Suppress Navigable", field: "make", editable: true, suppressNavigable: true},
      {headerName: "Not Editable", field: "model", editable: false}
    ];


    for (let i = 0; i < 1; i++) {
      this.rowData.push({code: 1, make: "Toyota", model: "Celica", price: 35000 + (i * 1000)});
      this.rowData.push({code: 2, make: "Ford", model: "Mondeo", price: 32000 + (i * 1000)});
      this.rowData.push({code: 3, make: "Porsche", model: "Boxter", price: 72000 + (i * 1000)});
    }

    this.gridOptions = {
      columnDefs: columnDefs,
      rowData: this.rowData,
      editType: 'fullRow',
      onCellValueChanged: function (event) {
        console.log('onCellValueChanged: ' + event.colDef.field + ' = ' + event.newValue);
      },
      onRowValueChanged: function (event) {
        let data = event.data;
        console.log('onRowValueChanged: (' + data.make + ', ' + data.model + ', ' + data.price + ')');
      },
      onGridReady: function (event) {
        event.api.sizeColumnsToFit();
      }
    }
  }

  onBtStopEditing() {
    this.gridOptions.api.stopEditing();
  }

  onBtStartEditing() {
    this.gridOptions.api.setFocusedCell(2, 'make');
    this.gridOptions.api.startEditingCell({
      rowIndex: 2,
      colKey: 'make'
    });
  }

  onAdd() {
    let rowCount = this.gridOptions.rowData.length;
    this.rowData.push({code: 3, make: "Porsche", model: "Boxter", price: 72000 });
    this.gridOptions.api.setRowData(this.rowData);

    this.gridOptions.api.startEditingCell({
      rowIndex: rowCount,
      colKey: 'make'
    });
    this.gridOptions.api.rowDataChanged(rowCount);
    //this.gridOptions.api.hideOverlay();

  }

  onDelete() {
    let selectedNode = this.gridOptions.api.getSelectedNodes();
    this.gridOptions.api.removeItems(selectedNode);
    this.gridOptions.api.refreshRows(selectedNode);
    // let f = this;
    // selectedNode.forEach(function(node){
    //   f.gridOptions.api.rowDataChanged(node.rowIndex);
    //   }
    // );
    //
    // let rowCount = this.gridOptions.rowData.length;
    // this.gridOptions.api.rowDataChanged(rowCount);
    // this.gridOptions.api.refreshView();
  }

  onPrintData() {
    this.gridOptions.api.refreshView();
    let rowCount = this.gridOptions.rowData.length;
    console.log("rowCount = "+rowCount);
  }

  refreshRow() {
      // at the end of the update below, this array will
      // have all of the items that we updated
      let updatedNodes = [];
      // look for all the 'Jillian' nodes
      this.gridOptions.api.forEachNode( function(node) {
        let data = node.data;
        updatedNodes.push(node);
      });
      // now tell the grid it needs refresh all these rows
      this.gridOptions.api.refreshRows(updatedNodes);

     let count = this.gridOptions.rowData.length;
     console.log(count);

     count = this.gridOptions.datasource.rowCount;
    console.log(count);
  }

   getRowData() {
    let rowData = [];
    this.gridOptions.api.forEachNode( function(node) {
      rowData.push(node.data);
    });
    console.log('Row Data:');
    console.log(rowData);
}

}
