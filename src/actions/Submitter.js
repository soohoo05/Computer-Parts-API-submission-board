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

const CaseSubmission = body => {
  console.log("Case");
};

const CoolerSubmission = body => {
  console.log("cool");
};

const CPUSubmission = body => {
  console.log("cpu");
};

const MemorySubmission = body => {
  console.log("mem");
};

const MotherboardSubmission = body => {
  console.log("moth");
};

const PowerSupplySubmission = body => {
  console.log("power");
};

const StorageSubmission = body => {
  console.log("stora");
};

const VideoCardSubmission = body => {
  console.log("vidcard");
};
