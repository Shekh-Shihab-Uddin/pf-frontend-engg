import { collection, getDocs, query } from "firebase/firestore";
import { FirebaseDb } from "../utils/firebase";

export class TestimonyApi {
  static async fetchAll() {
    try {
      const q = query(collection(FirebaseDb, "testimonials"));
      const response = await getDocs(q);
      return response.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name || {},
          designation: doc.data().designation || {},
          image: doc.data().images || "",
          testimony: doc.data().testimony || {},
          ...doc.data(),
        };
      });
    } catch (err) {
      console.error("Error fetching projects: ", err);
      return [];
    }
  }
}
