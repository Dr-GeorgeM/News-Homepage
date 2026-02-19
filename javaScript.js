const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function createSeats() {
  const batch = db.batch();
  const totalSeats = 735;

  for (let i = 1; i <= totalSeats; i++) {
    const seatRef = db.collection("seats").doc(`seat_${i}`);

    batch.set(seatRef, {
      seatNumber: i,
      row: Math.ceil(i / 21), // كل صف فيه 21 كرسي
      status: "available",
      reservedBy: null,
      paymentStatus: "pending",
    });
  }

  await batch.commit();
  console.log("735 seats created successfully!");
}

createSeats();
