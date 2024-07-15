import '../../Styles/PBooking.css';
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

function ProBooking() {

  const [dataList, setDataList] = useState([])

  const getFetchData = async () => {
    const response = await axios.get("/programmes");
    if (response.status === 200) {
      setDataList(response.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const response = await axios.delete(`/programmes/${id}`);
    if (response.status === 200) {
      getFetchData();
      alert("Programme deleted successfully");
    }
  };

  const handleAproved = async (programme) => {
    try {
      const response = await axios.post("/booking", programme);
      if (response.status === 200) {
        alert("Programme approved successfully");
        getFetchDatabooking();
      }
    } catch (error) {
      alert("Error approving programme: " + error.message);
    }
  };

  const getFetchDatabooking = async () => {
    const response = await axios.get("/booking");
    if (response.status === 200) {
      setDataList(response.data);
    }
  };
   
  return (
    <>
      <div className="container1">
        <h1> View All requests</h1>
        </div>
        
        <div className="container">
        
        {
          <div className="table-outer">
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th>Booking No</th>
                  <th>Division</th>
                  <th>Unit</th>
                  <th>Product</th>
                  <th>Service No</th>
                  <th>PP_Num</th>
                  <th>date</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Proram</th>
                  <th>Epi No</th>
                  <th>Duration</th>
                  <th>Telicast Date</th>
                  <th>Telicast Time</th>
                  <th>Channal</th>
                  <th>Freq</th>
                  <th>Type of Book</th>
                  <th>Equipment</th>
                  <th className='buttoncol'></th>
                </tr>
              </thead>
              <tbody>
                {dataList.length > 0 ? (
                  dataList.map((el) => (
                    <tr key={el._id}>
                      <td>{el.bookingNo}</td>
                      <td>{el.division}</td>
                      <td>{el.unit}</td>
                      <td>{el.productName}</td>
                      <td>{el.serviceNo}</td>
                      <td>{el.ppNumber}</td>
                      <td>{el.date}</td>
                      <td>{el.type}</td>
                      <td>{el.location}</td>
                      <td>{el.programTitle}</td>
                      <td>{el.episodeNo}</td>
                      <td>{el.programeDuration}</td>
                      <td>{el.dateOfTelecast}</td>
                      <td>{el.timeOfTelecast}</td>
                      <td>{el.scheduleChannel}</td>
                      <td>{el.frequencyOfTelecast}</td>
                      <td>{el.typeOfBooking}</td>
                      <td>{el.equipment}</td>
                      <td className='buttoncol'>
                        <button className="btn btn-aprove" onClick={() => handleAproved(el)} >Approve</button>
                        <button className="btn btn-delete" onClick={() => handleDelete(el._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="19" style={{ textAlign: "center" }}>No data is Available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          </div>
        }
        
      </div>
    </>
  );
}
export default ProBooking;