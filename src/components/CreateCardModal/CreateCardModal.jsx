// import Modal from "react-modal";
// import css from "./CreateCardModal.module.css";
// import * as Yup from "yup";
// import { Form, Formik, Field, ErrorMessage } from "formik";
// import svg from "../../img/icons.svg";
// import { useDispatch } from "react-redux";
// import { addTask } from "../../redux/tasks/operations";
// // import { DatePicker } from "@mui/x-date-pickers";
// // import { LocalizationProvider } from "@mui/x-date-pickers";
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { useState } from "react";
// import dayjs from "dayjs";
// // import Stack from '@mui/material/Stack';
// // import IconButton from '@mui/material/IconButton';
// // import ChevronLeft from '@mui/icons-material/ChevronLeft';
// // import ChevronRight from '@mui/icons-material/ChevronRight';
// // import { styled } from '@mui/material/styles';
// // import Typography from '@mui/material/Typography';
// // import SvgIcon from '@mui/material/SvgIcon';

// Modal.setAppElement("#root");

export const CreateCard = ({ isOpen, isClose, column }) => {
//   // const [selectedDate, setSelectedDate] = useState(dayjs());
//   // const dispatch = useDispatch();

//   // const changeDate = (valueDate) => {
//   //   setSelectedDate(valueDate)
//   // }

//   // const CustomCalendarHeaderRoot = styled('div')({
//   //   display: 'flex',
//   //   justifyContent: 'space-between',
//   //   alignItems: 'center',
//   //   borderBottom: '1px solid #000000',
//   //   backgroundColor: '#1F1F1F'
//   // });

//   // const CustomDatePicker = styled(DatePicker)({
//   //   '& .MuiInputBase-root': {
//   //     display: 'flex',
//   //     alignItems: 'center',
//   //     backgroundColor: '#151515',
//   //     color: '#BEDBB0',
//   //     fontFamily: 'Poppins, sans-serif !important',
//   //     fontSize: '14px',
//   //     fontWeight: '500',
//   //     lineHeight: '21px',
//   //     letterSpacing: '-0.02em',
//   //     textAlign: 'left',
//   //   },
//   //   '& .MuiInputBase-input': {
//   //     padding: '0',
//   //     width: 'auto',
//   //   },
//   //   '& .MuiOutlinedInput-notchedOutline': {
//   //     border: 'none',
//   //   },
//   //   '&:hover .MuiOutlinedInput-notchedOutline': {
//   //     borderColor: '#FFFFFF',
//   //   }
//   // });
  

//   // const calendarIcon = () => {
//   //   return (
//   //     <SvgIcon>
//   //       <use className={css.chevronIconDown} href={svg + "#chevron-down-icon"} />
//   //     </SvgIcon>
//   //   );
//   // }

//   // function CustomCalendarHeader(props) {
//   //   const { currentMonth, onMonthChange } = props;
  
//   //   const selectNextMonth = () => onMonthChange(currentMonth.add(1, 'month'), 'left');
//   //   const selectPreviousMonth = () =>
//   //     onMonthChange(currentMonth.subtract(1, 'month'), 'right');
  
//   //   return (
//   //     <CustomCalendarHeaderRoot>
//   //       <Stack spacing={1} direction="row">
//   //         <IconButton onClick={selectPreviousMonth} title="Previous month">
//   //           <ChevronLeft className={css.chevron} />
//   //         </IconButton>
//   //       </Stack>
//   //       <Typography variant="body2" className={css.customTypography}>{currentMonth.format('MMMM YYYY')}</Typography>
//   //       <Stack spacing={1} direction="row">
//   //         <IconButton onClick={selectNextMonth} title="Next month">
//   //           <ChevronRight className={css.chevron} />
//   //         </IconButton>
//   //       </Stack>
//   //     </CustomCalendarHeaderRoot>
//   //   );
//   // }

//   const radioBtns = [
//     {
//       priority: "Low",
//       labelColor: "#8FA1D0",
//       class: css.createCardModalRadio1,
//       id: "createCardModalRadio1",
//     },
//     {
//       priority: "Medium",
//       labelColor: "#E09CB5",
//       class: css.createCardModalRadio2,
//       id: "createCardModalRadio2",
//     },
//     {
//       priority: "High",
//       labelColor: "#BEDBB0",
//       class: css.createCardModalRadio3,
//       id: "createCardModalRadio3",
//     },
//     {
//       priority: "Without",
//       labelColor: "#5B5B5B",
//       class: css.createCardModalRadio4,
//       id: "createCardModalRadio4",
//     },
//   ];

//   const handleSubmit = (values, actions) => {
//     const newTask = {
//       title: values.title,
//       description: values.description,
//       deadline: selectedDate,
//       priority: values.priority,
//     };
//     actions.resetForm();
//     dispatch(
//       addTask({
//         column,
//         newTask,
//       })
//     );
//     isClose();
//   };

//   const initialValues = {
//     title: "",
//     description: "",
//     priority: "Without",
//     deadline: '',
//   };

//   const columnModalValidation = Yup.object().shape({
//     title: Yup.string()
//       .min(3, "Too short!")
//       .max(20, "Too long!")
//       .required("Required!"),
//     description: Yup.string()
//       .min(3, "Too short!")
//       .max(100, "Too long!")
//       .required("Required!"),
//     priority: Yup.string().required("Required!"),
//   });

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={isClose}
//       className={css.createCardModal}
//       overlayClassName={css.createCardModalOverlay}
//     >
//       <button
//         className={css.createCardModalCloseBtn}
//         type="button"
//         onClick={isClose}
//       >
//         <svg className={css.createCardModalIcon} width="18px" height="18px">
//           <use href={svg + "#x-close"}></use>
//         </svg>
//       </button>
//       <div className={css.createCardModalContainer}>
//         <h1 className={css.createCardModalText}>Add card</h1>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={columnModalValidation}
//           onSubmit={handleSubmit}
//         >
//             <Form autoComplete="off" className={css.createCardModalForm}>
//               <Field
//                 type="text"
//                 name="title"
//                 className={css.createCardModalInput1}
//                 placeholder="Title"
//               />
//               <ErrorMessage
//                 className={css.error}
//                 component="span"
//                 name="title"
//               />
//               <Field
//                 as="textarea"
//                 name="description"
//                 className={css.createCardModalInput2}
//                 placeholder="Description"
//               />
//               <ErrorMessage
//                 className={css.error}
//                 component="span"
//                 name="description"
//               />
//               <label className={css.createCardModalLabel}>
//                 Label color
//                 <ul className={css.createCardModalRadioList}>
//                   {radioBtns.map((radioBtn, index) => (
//                     <li key={index} className={css.ContainerRadio}>
//                       <Field
//                         type="radio"
//                         name="priority"
//                         value={radioBtn.priority}
//                         className={radioBtn.class}
//                         id={radioBtn.id}
//                       />
//                     </li>
//                   ))}
//                 </ul>
//               </label>
//               <div className={css.createCardModalDateContainer}>
//                 <p className={css.deadlineText}>Deadline</p>
//               {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <CustomDatePicker
//                   value={selectedDate}
//                   onChange={changeDate}
//                   format={dayjs(selectedDate).format('DD/MM/YYYY') === dayjs().format('DD/MM/YYYY') ? 'Today, MMMM DD' : 'dddd, MMMM DD'}
//                   slots={{ openPickerIcon: calendarIcon, calendarHeader: CustomCalendarHeader }}
//                   minDate={dayjs()}
//                 />
//               </LocalizationProvider> */}
//               </div>
//               <button type="submit" className={css.createCardModalSubmit}>
//                 <span className={css.createCardModalSpan}>
//                   <svg
//                     className={css.createCardModalAddIcon}
//                     width="14px"
//                     height="14px"
//                   >
//                     <use href={svg + "#icon-plus"}></use>
//                   </svg>
//                 </span>
//                 Add
//               </button>
//             </Form>
//         </Formik>
//       </div>
//     </Modal>
//   );
}