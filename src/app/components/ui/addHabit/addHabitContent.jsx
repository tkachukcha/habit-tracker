import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useFormik, Field } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ColorSelect from './colorSelect';
import IconSelect from './iconSelect';
import { useDispatch } from 'react-redux';
import { createHabit } from '../../../store/habits';

const AddHabitContent = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      color: '#fff',
      time: 'anytime',
      icon: ''
    },
    validationSchema: yup.object({
      name: yup.string().required('Required'),
      icon: yup.string().required('Required')
    }),
    onSubmit: (values) => {
      dispatch(createHabit(values));
    }
  });

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add Habit
      </Typography>
      <Divider />
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <Box
        // sx={{
        //   display: 'flex',
        //   flexDirection: { xs: 'column', sm: 'row' },
        //   justifyContent: 'space-between'
        // }}
        >
          <TextField
            sx={{ width: '100%' }}
            margin="normal"
            required
            id="name"
            label="Habit name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <FormControl sx={{ width: '100%', mt: 2, mb: 1 }}>
            <InputLabel id="time">Time of the day</InputLabel>
            <Select
              labelId="time"
              id="time"
              name="time"
              value={formik.values.time}
              label="Time of the day"
              onChange={formik.handleChange}
            >
              <MenuItem value={'anytime'}>Anytime</MenuItem>
              <MenuItem value={'morning'}>Morning</MenuItem>
              <MenuItem value={'afternoon'}>Afternoon</MenuItem>
              <MenuItem value={'evening'}>Evening</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <ColorSelect
          color={formik.values.color}
          onChange={(value) => {
            formik.setFieldValue('color', value);
          }}
        />

        <IconSelect
          icon={formik.values.icon}
          color={formik.values.color}
          onChange={(value) => {
            formik.setFieldValue('icon', value);
          }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: 3,
            mb: 1,
            width: '100%'
          }}
        >
          Add new habit
        </Button>
      </Box>
    </>
  );
};

export default AddHabitContent;