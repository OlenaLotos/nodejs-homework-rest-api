const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  favorite: Boolean,
});

const Contact = model("contact", contactSchema);

// const fs = require("fs").promises;
// const path = require("path");
// const { v4 } = require("uuid");

// const contactsPath = path.join(__dirname, "contacts.json");
// const updateContacts = async (contacts) =>
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// async function listContacts() {
//   const result = await fs.readFile(contactsPath);
//   return JSON.parse(result);
// }

// async function getContactById(contactId) {
//   const contacts = await listContacts();
//   const result = contacts.find((contact) => contact.id === contactId);
//   return result || null;
// }

// async function addContact(name, email, phone) {
//   const contacts = await listContacts();
//   const newContact = {
//     id: v4(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await updateContacts(contacts);
//   return newContact;
// }

// async function removeContact(contactId) {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((contact) => contact.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(index, 1);
//   await updateContacts(contacts);
//   return result;
// }

// const updateById = async (id, data) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   contacts[index] = { id, ...data };
//   await updateContacts(contacts);
//   return contacts[index];
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateById,
// };
