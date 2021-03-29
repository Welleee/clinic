import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ConfirmDialog from "../Helpers/ConfirmDialog";
import SnackBar from '../Helpers/SnackBar'


const Patients = () => {
  let history = useHistory();
  const [patients, setPatients] = useState([]);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const translateGrid = {
    noRowsLabel: "No existen pacientes para mostrar",
    errorOverlayDefaultLabel: "Ocurrio un error",
    // Export selector toolbar button text
    toolbarExport: "Exportar",
    toolbarExportLabel: "Exportar",
    toolbarExportCSV: "Descargar como CSV",
    // Columns selector toolbar button text
    toolbarColumns: "Columnas",
    toolbarColumnsLabel: "Seleccionar columnas",
    // Filter panel text
    filterPanelAddFilter: "Agregar filtro",
    filterPanelDeleteIconLabel: "Eliminar",
    filterPanelOperators: "Operadores",
    filterPanelOperatorAnd: "Y",
    filterPanelOperatorOr: "O",
    filterPanelColumns: "Columnas",
    filterPanelInputLabel: "Valor",
    filterPanelInputPlaceholder: "Valor filtro",

    // Filter operators text
    filterOperatorContains: "contiene",
    filterOperatorEquals: "igual",
    filterOperatorStartsWith: "empieza con",
    filterOperatorEndsWith: "termina con",
    filterOperatorIs: "es",
    filterOperatorNot: "no es",
    filterOperatorAfter: "is after",
    filterOperatorOnOrAfter: "is on or after",
    filterOperatorBefore: "is before",
    filterOperatorOnOrBefore: "is on or before",

    // Column menu text
    columnMenuLabel: "Menu",
    columnMenuShowColumns: "Mostrar columnas",
    columnMenuFilter: "Filtro",
    columnMenuHideColumn: "Ocultar",
    columnMenuUnsort: "Desordenar",
    columnMenuSortAsc: "Ordenar ascendente",
    columnMenuSortDesc: "Ordenar descendente",

    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,
    columnHeaderFiltersLabel: "Mostrar filtros",
    columnHeaderSortIconLabel: "Ordenar",

    // Rows selected footer text
    footerRowSelected: (count) =>
      count !== 1
        ? `${count.toLocaleString()} filas seleccionadas`
        : `${count.toLocaleString()} fila seleccionada`,

    // Total rows footer text
    footerTotalRows: "Total de filas:",
  };

  const columns = [
    { field: "lastName", headerName: "Apellido", width: 220 },
    { field: "firstName", headerName: "Nombre", width: 240 },
    { field: "dni", headerName: "DNI", sortable: false, width: 120 },
    { field: "age", headerName: "Edad", type: "number", width: 95 },
    { field: "phone", headerName: "Tel", sortable: false, width: 160 },
    { field: "address", headerName: "Dirección", sortable: false, width: 220 },
    { field: "insurance", headerName: "Obra Social", width: 180 },
    {
      field: "deleteButton",
      headerName: "Acción",
      sortable: false,
      width: 120,
      disableClickEventBubbling: true,
      renderCell: ({ id }) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setOpenConfirmDialog(true);
            setPatientId(id);
          }}
        >
          Eliminar
        </Button>
      ),
    },
  ];

  const fetchPatients = async () => {
    await axios.get("/patients").then((response) => {
      setPatients(response.data);
    });
  };

  const removePatient = async (patientId) => {
    await axios.delete(`/patients/${patientId}`).then(() => {
      fetchPatients();
      setOpenConfirmDialog(false);
      setOpenSnackBar(true);
    });
  };

  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  useEffect(() => {
    fetchPatients();
  }, [setPatients]);

  return (
    <div
      style={{
        borderRadius: "10px",
        width: "100%",
        backgroundColor: "white",
        marginTop: "40px",
      }}
    >
      <DataGrid
        // checkboxSelection
        autoHeight
        localeText={translateGrid}
        rowHeight="70"
        showCellRightBorder
        // showColumnRightBorder
        rows={patients}
        columns={columns}
        sortModel={[
          {
            field: "lastName",
            sort: "asc",
          },
        ]}
        pageSize={20}
        getRowId={(row) => row._id}
        onRowClick={(row) => history.push(`/paciente/${row.id}`)}
      />

      <ConfirmDialog
        open={openConfirmDialog}
        handleClose={handleCloseConfirmDialog}
        handleAgree={() => removePatient(patientId)}
      />

      <SnackBar
        openSnackBar={openSnackBar}
        handleCloseSnackBar={handleCloseSnackBar}
        message={"Paciente eliminado correctamente!"}
      />
    </div>
  );
};

export default Patients;
