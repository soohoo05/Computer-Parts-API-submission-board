import axios from 'axios'
import key from '../key'

export const Submitter = (part, body) => {
  switch (part) {
    case "Case":
      CaseSubmission(body);
      break;
    case "Cooler":
      CoolerSubmission(body);
      break;
    case "CPU":
      CPUSubmission(body);
      break;
    case "Memory":
      MemorySubmission(body);
      break;
    case "Motherboard":
      MotherboardSubmission(body);
      break;
    case "PowerSupply":
      PowerSupplySubmission(body);
      break;
    case "Storage":
      StorageSubmission(body);
      break;
    case "VideoCard":
      VideoCardSubmission(body);
      break;
    default:
      console.log("Nani?");
  }
};

const CaseSubmission = theBody => {
  console.log(theBody)
  axios.post(`http://localhost:3000/computerparts/cases/${key.key}`,{
    theBody
  })
};

const CoolerSubmission = theBody => {
  axios.post(`http://localhost:3000/computerparts/cpucoolers/${key.key}`,{
    theBody
  })
};

const CPUSubmission = theBody => {
  axios.post(`http://localhost:3000/computerparts/cpu/${key.key}`,{
    theBody
  })
};

const MemorySubmission = theBody => {
  axios.post(`http://localhost:3000/computerparts/memory/${key.key}`,{
    theBody
  })
};

const MotherboardSubmission = theBody => {
  axios.post(`http://localhost:3000/computerparts/motherboard/${key.key}`,{
    theBody
  })
};

const PowerSupplySubmission = theBody => {
  axios.post(`http://localhost:3000/computerparts/powersupply/${key.key}`,{
    theBody
  })
};

const StorageSubmission = theBody => {
  axios.post(`http://localhost:3000/computerparts/storage/${key.key}`,{
    theBody
  })
};

const VideoCardSubmission = theBody => {
  axios.post(`http://localhost:3000/computerparts/videocard/${key.key}`,{
    theBody
  })
};
