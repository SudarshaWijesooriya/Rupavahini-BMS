import '../../Styles/PBooking.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Formtable from "./components/Formtable";
import AllDetailTable from "./components/AllDetailTable";

// axios.defaults.baseURL = "http://localhost:8080";

function PBooking() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false)
  const [formData, setFormData] = useState({
    bookingNo: "",
    division: "",
    unit: "",
    productName: "",
    serviceNo: "",
    ppNumber: "",
    date: "",
    type: "",
    location: "",
    programTitle: "",
    episodeNo: "",
    programeDuration: "",
    dateOfTelecast: "",
    timeOfTelecast: "",
    scheduleChannel: "",
    frequencyOfTelecast: "",
    typeOfBooking: "",
    equipment: "",
  });

  const [formDataEdit, setFormDataEdit] = useState({
    bookingNo: "",
    division: "",
    unit: "",
    productName: "",
    serviceNo: "",
    ppNumber: "",
    date: "",
    type: "",
    location: "",
    programTitle: "",
    episodeNo: "",
    programeDuration: "",
    dateOfTelecast: "",
    timeOfTelecast: "",
    scheduleChannel: "",
    frequencyOfTelecast: "",
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
    const data = await axios.post("/create", formData);
    console.log(data);
    if (data.data.success){
      setAddSection(false)
      alert(data.data.message)
      getFetchData()
      setFormData(false)
    }
  };

  const getFetchData = async()=>{
    const data = await axios.get("/")
    console.log(data)
    if (data.data.success){
      setDataList(data.data.data)
    }
  };
  useEffect(()=>{
    getFetchData()
  },[])

  const handleDelete = async(id)=>{
    const data = await axios.delete("/delete/"+id)

    if (data.data.success){
      getFetchData()
      alert(data.data.message)
    }
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const data = await axios.put("/update",formDataEdit)
    if (data.data.success){
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
    }
  }

  const handleEditOnChange = async(e)=>{
    const { value, name } = e.target;
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  }

  const handleEdit = (el) =>{
    setFormDataEdit(el)
    setEditSection(true)
  }

   
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
export default PBooking;