// import Accordion from 'react-bootstrap/Accordion';
import Image from "next/image";
import expandImg from '../../images/expandImg.svg';

function Accordian({ h1, p, }) {
  return (
    <></>
    // <Accordion defaultActiveKey="none">
    //   <Accordion.Item eventKey="0">
    //     <Accordion.Header>
    //       <div className="flex flex-col justify-center py-0 px-0 items-center w-full">
    //         <h1 className="text-2xl text-center  font-caslon">{h1}</h1>

    //       </div>
    //       <style jsx global>{`
    //         .accordion-button::after {
    //           display: none !important;
    //           width: 0 !important;
    //         }
                 
    //           .accordion-body{
    //            border: 1px solid #000 !important;
    //            border-radius: 0 !important;
    //           }
    //             .accordion-item:focus,
    //         .accordion-item:active {
    //           border-top: none !important; /* Remove top border when active */
    //         }
    //             .accordion-button {
    //           background-color: transparent !important;
    //           border: 1px solid black !important;
    //           border-radius: 0 !important;
    //         }
    //           .accordian-header:actvie{}
    //         .accordion-button:not(.collapsed) {
    //           background-color: transparent !important;
    //           color: inherit !important;
    //           box-shadow: none !important;
    //           border: 1px solid black !important;
    //           border-bottom: none !important;
    //         }
    //             .accordion-button:focus {
    //           box-shadow: none !important;
    //           outline: none !important;
    //         }
    //           .accordian-header{
    //           border: 0 !important;
    //           }

    //       `}</style>
    //     </Accordion.Header>
    //     <Accordion.Body>
    //       <div className="btn-container flex flex-col justify-center text-center items-center">
    //         <p className='font-caslon text-large w-[70%]'>  {p}</p>
    //         <Image
    //           src={expandImg}
    //           alt='expandImg'
    //           className='relative top-[34px] flex justify-center'
    //         />
    //       </div>
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
  );
}

export default Accordian;