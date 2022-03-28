import React from 'react';
import AddButton from '../components/common/addButton';
import HabitList from '../components/ui/habitList';
import HabitModal from '../components/ui/addEditHabit/habitModal';

const Today = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <HabitList />
      <AddButton onOpen={handleOpen} />
      <HabitModal onClose={handleClose} open={open} />
    </>
  );
};

export default Today;
