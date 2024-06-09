// import Modal from "react-modal";
// import css from "./CreateCard.module.css";
// // import * as Yup from 'yup';
// import { Form, Formik, Field } from "formik";

// Modal.setAppElement('#root');

// export const CreateColumn = (isOpen, isClose) => {
//     // const columnModalValidation = Yup.object.shape({
//     //     columnname: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('Required!')
//     // });
//     const createCardStyle = {
//         content: {
//           top: '50%',
//           left: '50%',
//           right: 'auto',
//           bottom: 'auto',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//           width: '335px',
//           height: '552px'
//         },
//       };

//     return (
//     <>
//     <Modal isOpen={} onRequestClose={} style={createCardStyle}>
//         <button type="button" className={css.createCardModalCloseBtn}>Close</button>
//         <div className={css.createCardModalContainer}>
//             <h1 className={css.createCardModalText}>Add card</h1>
//             <Formik
//                 initialValues={{ cardtitle: '', carddescription: ''}}
//                 // validationSchema={columnModalValidation}
//                 onSubmit={(values, actions) => {

//                 }}>
//                     <Form autoComplete="off">
//                         <Field type='text' name='cardtitle' />
//                         <Field type='text' name='carddescription' />
//                         <button type="submit">Add</button>
//                     </Form>
//             </Formik>
//         </div>

//     </Modal>
//     </>
// )
// }