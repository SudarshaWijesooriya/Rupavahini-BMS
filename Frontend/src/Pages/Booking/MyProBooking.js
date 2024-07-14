import '../../Styles/PBooking.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Formtable from "./components/ProFromtable";
import AllDetailTable from "./components/ProDetailTable";

axios.defaults.baseURL = "http://localhost:4000/api";

function MyProBooking() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false)
  const [formData, setFormData] = useState({
    bookingNo: "",
    division: "",
    unit: "",
    productName: "",
    serviceNo: "",
    PPNo: "",
    date: "",
    type: "",
    location: "",
    proTitle: "",
    episodeNo: "",
    proDuration: "",
    dateOfTelecast: "",
    timeOfTelecast: "",
    scheduleChannel: "",
    freqOfTelecast: "",
    typeOfBooking: "",
    equipment: "",
  });

  const [formDataEdit, setFormDataEdit] = useState({
    bookingNo: "",
    division: "",
    unit: "",
    productName: "",
    serviceNo: "",
    PPNo: "",
    date: "",
    type: "",
    location: "",
    proTitle: "",
    episodeNo: "",
    proDuration: "",
    dateOfTelecast: "",
    timeOfTelecast: "",
    scheduleChannel: "",
    freqOfTelecast: "",
    typeOfBooking: "",
    equipment: "",
    _id: "",
  });

  const [dataList, setDataList] = useState([])

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/programmes", formData);
    if (response.status === 200) {
      setAddSection(false);
      alert("Programme created successfully");
      getFetchData();
      setFormData({});
    }
  };

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/programmes/${formDataEdit._id}`, formDataEdit);
    if (response.status === 200) {
      getFetchData();
      alert("Programme updated successfully");
      setEditSection(false);
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

   
  return (
    <>
      <div className="container1">
        <button className="btn btn-add" onClick={() => setAddSection(true)}>
          Add a Proramme
        </button>
        </div>
        
        <div className="container">
        {addSection && (
          <Formtable 
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={() => setAddSection(false)}
            rest={formData}
          />
          )
        }
        {
          editSection && (
            <Formtable 
              handleSubmit={handleUpdate}
              handleOnChange={handleEditOnChange}
              handleclose={() => setEditSection(false)}
              rest={formDataEdit}
            />
          )
        }
        {
          <AllDetailTable 
          dataList={dataList} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete}
        />
        }
        
      </div>
    </>
  );
}
export default MyProBooking;