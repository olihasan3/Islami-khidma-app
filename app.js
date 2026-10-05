import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

window.sendRideRequest = async function () {

  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const fare = document.getElementById("fare").value;
  const passengers = document.getElementById("passengers").value;

  if (!pickup || !destination || !fare || !passengers) {
    alert("সব তথ্য পূরণ করুন");
    return;
  }

  await addDoc(collection(db, "rideRequests"), {
    pickup: pickup,
    destination: destination,
    proposedFare: Number(fare),
    passengers: Number(passengers),
    status: "waiting",
    createdAt: serverTimestamp()
  });

  alert("রাইড রিকোয়েস্ট পাঠানো হয়েছে ✅");
};
