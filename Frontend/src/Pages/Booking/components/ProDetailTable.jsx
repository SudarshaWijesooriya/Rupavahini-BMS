import React from 'react'

function ProDetailTable({ dataList, handleEdit, handleDelete }) {
  return (
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
            <th>Freq</th>
            <th>Channal</th>
            <th>Type of Book</th>
            <th>Equipment</th>
            <th>status</th>
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
                  <button className="btn btn-edit" onClick={() => handleEdit(el)}>Edit</button>
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
  );
}

export default ProDetailTable

