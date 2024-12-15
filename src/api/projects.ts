import { collection, getDocs, query } from "firebase/firestore";
import { FirebaseDb } from "../utils/firebase";

export class ProjectApi {
  static async fetchAll() {
    try {
      const q = query(collection(FirebaseDb, "projects"));
      const response = await getDocs(q);
      return response.docs.map((doc) => {
        return {
          id: doc.id,
          description: doc.data().description || {},
          images: doc.data().images || [],
          technologies: doc.data().technologies || [],
          title: doc.data().title || "",
          siteLink: doc.data().siteLink || "",
          repoLink: doc.data().repoLink || "",
          ...doc.data(),
        };
      });
    } catch (err) {
      console.error("Error fetching projects: ", err);
      return [];
    }
  }
}
