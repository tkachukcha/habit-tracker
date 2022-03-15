import React from 'react';
import AddButton from '../components/common/addButton';
import HabitList from '../components/ui/habitList';
import AddHabitModal from '../components/ui/addHabitModal';

const Today = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <HabitList />
      <AddButton onOpen={handleOpen} />
      <AddHabitModal onClose={handleClose} open={open} />
    </>
  );
};

export default Today;
