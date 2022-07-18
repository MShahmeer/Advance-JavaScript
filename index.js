// Event Propagation(Event Bubling and Event Capturing)
// Event Propagation means in which order the elements recieve the events

// (Event Bubling and Event Capturing)
// bottom to top is called the bubble phase, by default every event is bubble phase, means the last element in the dom or bom will get the event frist and then it will propagate to others in upper tree

const parentID = document.getElementById("parent");
const childID = document.getElementById("child");

const parentCall = () => {
  console.log("parentCalled");
};

const childCall = () => {
  console.log("childCalled");
  //   event.stopPropagation();  method to stop the propagation
};

parentID.addEventListener("click", parentCall, true); // 3rd argument defines capture propagation
childID.addEventListener("click", childCall, false); //by default is bubbling
