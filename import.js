const admin = require("./node_modules/firebase-admin");
const serviceAccount = require("./service-key.json");
const data = require("./DisneyPlusAPI.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://food-delivery-5a23b-default-rtdb.firebaseio.com",
});
data &&
  Object.keys(data).forEach((key) => {
    const nestedContent = data[key];

    if (typeof nestedContent === "object") {
      Object.keys(nestedContent).forEach((docTitle) => {
        admin
          .firestore()
          .collection(key)
          .doc(docTitle)
          .set(nestedContent[docTitle])
          .then((res) => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      });
    }
  });
