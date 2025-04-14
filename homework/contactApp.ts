// Creates an interface for what information should be included for each contact
interface Person { id: number; name: string; email: string; pNumber: number; isFavorite: boolean; }

// Creates a list of contacts
const contacts: Person[] = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        pNumber: 5551234567,
        isFavorite: true
    },
    {
        id: 2,
        name: "Bob Martinez",
        email: "bob.martinez@example.com",
        pNumber: 5559876543,
        isFavorite: false
    },
    {
        id: 3,
        name: "Charlie Nguyen",
        email: "charlie.nguyen@example.com",
        pNumber: 5554567890,
        isFavorite: true
    }
];

// Gets the last id in the array
const lastId: number = contacts.length

// This function adds a new contact to the contacts array
function addContact(name: string, email: string, pNumber: number, isFavorite: boolean): void {
    
    const newContact: Person = {
        id: lastId + 1,
        name: name,
        email: email,
        pNumber: pNumber,
        isFavorite: isFavorite
    }

    contacts.push(newContact)
}

// Deletes contact based on id
function deleteContact(id:number): void {
    const position = contacts.findIndex(c => c.id == id)

    if(position != -1) {
        contacts.splice(position, 1)
    }
}

// Displays each individual contact in the array
function displayContacts() {
    console.log("Contacts")

    const displayContacts = contacts.map(contact => {
        console.log(contact.isFavorite == true ? "Name: ⭐" + contact.name + " | Email: " + contact.email + " | Number: " + contact.pNumber : "Name: " + contact.name + " | Email: " + contact.email + " | Number: " + contact.pNumber)
    })
}

// Testing for adding a contact
addContact("Tom Luiz", "tom1234@gmail.com", 12345678, true)
console.log(contacts)

// Testing for deleting a contact
deleteContact(1)
console.log(contacts)

displayContacts()