import '../../Styles/PBooking.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Formtable from "./components/ProFromtable";
import AllDetailTable from "./components/ProDetailTable";

axios.defaults.baseURL = "http://localhost:4000/api";

function MyProBooking() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [userEmail, setUserEmail] = useState("");
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
    status: "Pending",
    email: ""
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
    status: "Pending",
    email: "",
    _id: "",
  });

  const [dataList, setDataList] = useState([]);
  const [filteredDataList, setFilteredDataList] = useState([]);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const id = localStorage.getItem("email");
      const response = await axios.get(`/users/get-by-email/${id}`);
      if (response.status === 200) {
        const user = response.data.user[0];
        setUserEmail(user.email);
        setFormData((prev) => ({ ...prev, email: user.email }));
        setFormDataEdit((prev) => ({ ...prev, email: user.email }));
        getFetchData(user.email);
      }
    };

    fetchUserEmail();
  }, []);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/programmes", formData);
    if (response.status === 200) {
      setAddSection(false);
      alert("Programme created successfully");
      getFetchData(userEmail);
      setFormData({});
    }
  };

  const getFetchData = async (email) => {
    const response = await axios.get("/programmes");
    if (response.status === 200) {
      const filteredData = response.data.filter((item) => item.email === email);
      setDataList(filteredData);
    }
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`/programmes/${id}`);
    if (response.status === 200) {
      getFetchData(userEmail);
      alert("Programme deleted successfully");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/programmes/${formDataEdit._id}`, formDataEdit);
    if (response.status === 200) {
      getFetchData(userEmail);
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
          Add a Programme
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
        )}
        {editSection && (
          <Formtable 
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )}
        <AllDetailTable 
          dataList={dataList} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default MyProBooking;
