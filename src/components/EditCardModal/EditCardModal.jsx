// import Modal from "react-modal";
// import css from "./EditCardModal.module.css";
// import * as Yup from "yup";
// import { Form, Formik, Field, ErrorMessage } from "formik";
// import svg from "../../img/icons.svg";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { updateTask } from "../../redux/tasks/operations.js";
// import { useParams } from "react-router-dom";
// import { DatePicker } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { useState } from "react";
// import dayjs from "dayjs";
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeft from '@mui/icons-material/ChevronLeft';
// import ChevronRight from '@mui/icons-material/ChevronRight';
// import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import SvgIcon from '@mui/material/SvgIcon';

// Modal.setAppElement("#root");

export const EditCard = ({ isOpen, isClose, task }) => {
//   const [selectedDate, setSelectedDate] = useState(dayjs(task.deadline));
//   const changeDate = (valueDate) => {
//     setSelectedDate(valueDate)
//   }

//   const dispatch = useDispatch();
//   const { deskId } = useParams();
//   const taskModalValidation = Yup.object().shape({
//     cardtitle: Yup.string()
//       .min(3, "Too short!")
//       .max(20, "Too long!")
//       .required("Required!"),
//     carddescription: Yup.string()
//       .min(3, "Too short!")
//       .max(64, "Too long!")
//       .required("Required!"),
//   });

//   const taskEditNotify = () => toast.success("You edited the task");

//   const CustomCalendarHeaderRoot = styled('div')({
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #000000',
//     backgroundColor: '#1F1F1F'
//   });

//   const CustomDatePicker = styled(DatePicker)({
//     '& .MuiInputBase-root': {
//       display: 'flex',
//       alignItems: 'center',
//       backgroundColor: '#151515',
//       color: '#BEDBB0',
//       fontFamily: 'Poppins, sans-serif !important',
//       fontSize: '14px',
//       fontWeight: '500',
//       lineHeight: '21px',
//       letterSpacing: '-0.02em',
//       textAlign: 'left',
//     },
//     '& .MuiInputBase-input': {
//       padding: '0',
//       width: 'auto',
//     },
//     '& .MuiOutlinedInput-notchedOutline': {
//       border: 'none',
//     },
//     '&:hover .MuiOutlinedInput-notchedOutline': {
//       borderColor: '#FFFFFF',
//     }
//   });
  

//   const calendarIcon = () => {
//     return (
//       <SvgIcon>
//         <use className={css.chevronIconDown} href={svg + "#chevron-down-icon"} />
//       </SvgIcon>
//     );
//   }

//   function CustomCalendarHeader(props) {
//     const { currentMonth, onMonthChange } = props;
  
//     const selectNextMonth = () => onMonthChange(currentMonth.add(1, 'month'), 'left');
//     const selectPreviousMonth = () =>
//       onMonthChange(currentMonth.subtract(1, 'month'), 'right');
  
//     return (
//       <CustomCalendarHeaderRoot>
//         <Stack spacing={1} direction="row">
//           <IconButton onClick={selectPreviousMonth} title="Previous month">
//             <ChevronLeft className={css.chevron} />
//           </IconButton>
//         </Stack>
//         <Typography variant="body2" className={css.customTypography}>{currentMonth.format('MMMM YYYY')}</Typography>
//         <Stack spacing={1} direction="row">
//           <IconButton onClick={selectNextMonth} title="Next month">
//             <ChevronRight className={css.chevron} />
//           </IconButton>
//         </Stack>
//       </CustomCalendarHeaderRoot>
//     );
//   }

//   const handleSubmit = (values) => {
//     const updatedTask = {
//       title: values.cardtitle,
//       description: values.carddescription,
//       deadline: selectedDate,
//       priority: values.priority,
//     };
//     dispatch(
//       updateTask({
//         deskId,
//         columnId: task.owner,
//         taskId: task._id,
//         updatedTask,
//       })
//     );
//     taskEditNotify();
//     isClose();
//   };

//   return (
//     <>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={isClose}
//         className={css.editCardModal}
//         overlayClassName={css.editCardModalOverlay}
//       >
//         <button
//           className={css.editCardModalCloseBtn}
//           type="button"
//           onClick={isClose}
//         >
//           <svg className={css.editCardModalIcon} width="18px" height="18px">
//             <use href={svg + "#x-close"}></use>
//           </svg>
//         </button>
//         <div className={css.editCardModalContainer}>
//           <h1 className={css.editCardModalText}>Edit card</h1>
//           <Formik
//             initialValues={{
//               cardtitle: task.title,
//               carddescription: task.description,
//               priority: task.priority,
//             }}
//             validationSchema={taskModalValidation}
//             onSubmit={handleSubmit}
//           >
//             <Form autoComplete="off" className={css.editCardModalForm}>
//               <Field
//                 type="text"
//                 name="cardtitle"
//                 className={css.editCardModalInput1}
//                 placeholder="Title"
//               />
//               <ErrorMessage
//                 className={css.error}
//                 component="span"
//                 name="cardtitle"
//               />
//               <Field
//                 as="textarea"
//                 name="carddescription"
//                 className={css.editCardModalInput2}
//                 placeholder="Description"
//               />
//               <ErrorMessage
//                 className={css.error}
//                 component="span"
//                 name="carddescription"
//               />
//               <label className={css.editCardModalLabel}>
//                 Label color
//                 <div className={css.editCardModalRadioContainer}>
//                   <div className={css.editCardModalRadioContainerRadio}>
//                     <Field
//                       type="radio"
//                       value="Low"
//                       className={css.editCardModalRadio1}
//                       id="editCardModalRadio1"
//                       name="priority"
//                     />
//                   </div>
//                   <div className={css.editCardModalRadioContainerRadio}>
//                     <Field
//                       type="radio"
//                       value="Medium"
//                       className={css.editCardModalRadio2}
//                       id="editCardModalRadio2"
//                       name="priority"
//                     />
//                   </div>
//                   <div className={css.editCardModalRadioContainerRadio}>
//                     <Field
//                       type="radio"
//                       value="High"
//                       className={css.editCardModalRadio3}
//                       id="editCardModalRadio3"
//                       name="priority"
//                     />
//                   </div>
//                   <div className={css.editCardModalRadioContainerRadio}>
//                     <Field
//                       type="radio"
//                       value="Without"
//                       className={css.editCardModalRadio4}
//                       id="editCardModalRadio4"
//                       name="priority"
//                     />
//                   </div>
//                 </div>
//               </label>

//               <div className={css.createCardModalDateContainer}>
//                 <p className={css.deadlineText}>Deadline</p>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <CustomDatePicker
//                   value={selectedDate}
//                   onChange={changeDate}
//                   format={dayjs(selectedDate).format('DD/MM/YYYY') === dayjs().format('DD/MM/YYYY') ? 'Today, MMMM DD' : 'dddd, MMMM DD'}
//                   slots={{ openPickerIcon: calendarIcon, calendarHeader: CustomCalendarHeader }}
//                   minDate={dayjs()}
//                 />
//               </LocalizationProvider>
//               </div>

//               <button type="submit" className={css.editCardModalSubmit}>
//                 <span className={css.editCardModalSpan}>
//                   <svg
//                     className={css.editCardModalAddIcon}
//                     width="14px"
//                     height="14px"
//                   >
//                     <use href={svg + "#icon-plus"}></use>
//                   </svg>
//                 </span>
//                 Edit
//               </button>
//             </Form>
//           </Formik>
//         </div>
//       </Modal>
//     </>
//   );
};
