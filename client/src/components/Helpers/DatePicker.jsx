import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { es } from "date-fns/locale";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DatePickerComponent = ({ register, Controller, control, calculateAge }) => {
  

  return (
    <MuiPickersUtilsProvider locale={es} utils={DateFnsUtils}>
      <Controller
        control={control}
        name="birthday"
        register={register}
        render={({ value, onChange }) => (
          <KeyboardDatePicker
            inputVariant="outlined"
            fullWidth
            value={value || null}
            onChange={(e) => {onChange(e); calculateAge(e)}}
            label="Fecha de Nacimiento"
            format="dd/MM/yyyy"
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerComponent;
