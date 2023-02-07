// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBBtn,
//   MDBInput,
//   MDBRow,
// } from "mdb-react-ui-kit";

// export default function Comments() {
//     const handleComment = (e) => {
//         e.preventDefault()

//     }

//   return (
//     <MDBContainer className="mt-2" style={{ maxWidth: "1000px", paddingBottom: "1rem" }}>
//       <MDBRow className="justify-content-center">
//         <MDBCol>
//         <MDBCard
//             className="shadow-0 border"
//             style={{ backgroundColor: "#f0f2f5" }}
//         >
//         <MDBCardBody className="p-2">
//             <form className="comment-form" onSubmit={handleComment}>
//             <MDBInput className="p-1" placeholder="add public comment..." />
//             <button className="comment-button">add</button>
//             </form>
//         </MDBCardBody>
//         </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }