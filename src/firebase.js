import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBCLsGcyb98u38jwvjiv9IDvVvkzQVGZU",
  authDomain: "wasy-amo-admin.firebaseapp.com",
  projectId: "wasy-amo-admin",
  storageBucket: "wasy-amo-admin.appspot.com",
  messagingSenderId: "338592998350",
  appId: "1:338592998350:web:94dd031fd0380f19d7819f",
  measurementId: "G-6J9X16SGL5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const buildingCollection = collection(db, 'buildingCollection');

export function addBuilding(buildingData) {
    return addDoc(buildingCollection, buildingData);
}

export async function getBuildings() {
    const querySnapshot = await getDocs(buildingCollection);
    const buildings = [];

    querySnapshot.forEach((doc) => {
        buildings.push({ id: doc.id, ...doc.data() });
    });

    return buildings;
}
