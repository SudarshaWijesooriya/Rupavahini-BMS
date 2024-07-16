import '../../Styles/PBooking.css';
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

function ProBooking() {

  const [dataList, setDataList] = useState([]);

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
      }
    } catch (error) {
      alert("programme alredy Aproved!");
    }
    try {
      const updatedProgramme = { ...programme, status: "Approved" };
      const response = await axios.put(`/programmes/${programme._id}`, updatedProgramme);
      if (response.status === 200) {
        setDataList(prevDataList =>
          prevDataList.map(el => (el._id === programme._id ? { ...el, status: "Approved" } : el))
        );
      }
    } catch (error) {
      alert("Error approving programme: " + error.message);
    }
    // getFetchDatabooking();
  };

  // const getFetchDatabooking = async () => {
  //   const response = await axios.get("/booking");
  //   if (response.status === 200) {
  //     setDataList(response.data);
  //   }
  // };

  return (
    <>
      <div className="container1">
        <h1>View All Requests</h1>
      </div>

      <div className="container">
        <div className="table-outer">
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th className="booking-no">Booking No</th>
                  <th className="division">Division</th>
                  <th className="unit">Unit</th>
                  <th className="product">Product</th>
                  <th className="service-no">Service No</th>
                  <th className="pp-num">PP_Num</th>
                  <th className="date">Date</th>
                  <th className="type">Type</th>
                  <th className="location">Location</th>
                  <th className="program">Program</th>
                  <th className="epi-no">Epi No</th>
                  <th className="duration">Duration</th>
                  <th className="telecast-date">Telecast Date</th>
                  <th className="telecast-time">Telecast Time</th>
                  <th className="freq">Freq</th>
                  <th className="channel">Channel</th>
                  <th className="type-of-book">Type of Book</th>
                  <th className="equipment">Equipment</th>
                  <th className="status">Status</th>
                  <th className="buttoncol"></th>
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
                      <td>{el.PPNo}</td>
                      <td>{el.date}</td>
                      <td>{el.type}</td>
                      <td>{el.location}</td>
                      <td>{el.proTitle}</td>
                      <td>{el.episodeNo}</td>
                      <td>{el.proDuration}</td>
                      <td>{el.dateOfTelecast}</td>
                      <td>{el.timeOfTelecast}</td>
                      <td>{el.freqOfTelecast}</td>
                      <td>{el.scheduleChannel}</td>
                      <td>{el.typeOfBooking}</td>
                      <td>{el.equipment}</td>
                      <td>{el.status}</td>
                      <td className='buttoncol'>
                        <button className="btn btn-aprove" onClick={() => handleAproved(el)}>Approve</button>
                        <button className="btn btn-delete" onClick={() => handleDelete(el._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="19" style={{ textAlign: "center" }}>No data is available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProBooking;
