// const request = require("supertest");

// const mongoose = require("mongoose");

// const app = require("../../app");

// require("dotenv").config();
// const { DB_HOST } = process.env;

// describe("test login controller", () => {
//   let server;
//   beforeAll(() => {
//     mongoose
//       .connect(DB_HOST)
//       .then(() => {
//         server = app.listen(3000, () => {});
//       })
//       .catch(() => {
//         process.exit(1);
//       });
//   });
//   afterAll((done) => {
//     mongoose.disconnect(done);
//     server.close();
//   });

//   test("login with valid body, return token and users object", async () => {
//     const {
//       status,
//       body: {
//         data: { token, user },
//       },
//     } = await request(app)
//       .post("/api/auth/login")
//       .set("Content-type", "application/json")
//       .send({
//         email: "olena@gmail.com",
//         password: "111111",
//       });

//     expect(status).toBe(200);
//      expect(typeof user).toBe("object");
//     expect(typeof token).toBe("string");
//     expect(typeof user.name).toBe("string");
//     expect(typeof user.email).toBe("string");
//     expect(typeof user.subscription).toBe("string");
//   });

//   test("login with incorrect email", async () => {
//     const {
//       status,
//       body: { message },
//     } = await request(app)
//       .post("/api/auth/login")
//       .set("Content-type", "application/json")
//       .send({
//         email: "olena222@gmail.com",
//         password: "111111",
//       });

//     expect(status).toBe(401);
//     expect(message).toBe("Email is wrong");
//   });

//   test("login with incorrect password", async () => {
//     const {
//       status,
//       body: { message },
//     } = await request(app)
//       .post("/api/auth/login")
//       .set("Content-type", "application/json")
//       .send({
//         email: "olena@gmail.com",
//         password: "222222",
//       });

//     expect(status).toBe(401);
//     expect(message).toBe("Password is wrong");
//   });

//   test("login with empthy body", async () => {
//     const {
//       status,
//       body: { message },
//     } = await request(app)
//       .post("/api/auth/login")
//       .set("Content-type", "application/json")
//       .send();

//     expect(status).toBe(400);
//     expect(message).toBe("missing data");
//   });

//   test("login without email", async () => {
//     const {
//       status,
//       body: { message },
//     } = await request(app)
//       .post("/api/auth/login")
//       .set("Content-type", "application/json")
//       .send({
//         password: "111111",
//       });

//     expect(status).toBe(400);
//     expect(message).toBe('"email" is required');
//   });
// });
