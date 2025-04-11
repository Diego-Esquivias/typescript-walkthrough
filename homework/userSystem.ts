enum Role{
    Admin = "Admin",
    Moderator = "Moderator",
    Member = "Member",
    Guest = "Guest"
}

enum Status{
    Active = "Active",
    Inactive = "Inactive",
    Suspended = "Suspended",
    Pending = "Pending"
}

interface User { id: number; username: string; email: string; role: Role; status: Status; }


function canAccessAdminPanel(user: User): boolean {
    return ((user.role == "Admin" || user.role == "Moderator") && user.status == "Active") ? true : false
}

function suspendInactiveUsers(users: User[]): User[] {
    const updatedUsers = users.map(user => {
        user.status == Status.Inactive ? user.status = Status.Suspended : user.status = user.status
        return user
    })

    return updatedUsers
}

const list_People: User[] = [
    {
        id: 1,
        username: "Bob",
        email: "bob1223@gmail.com",
        role: Role.Guest,
        status: Status.Inactive
    }, {
        id: 12,
        username: "Tom",
        email: "tom09865@gmail.com",
        role: Role.Admin,
        status: Status.Active
    }, {
        id: 31,
        username: "Monty",
        email: "monty91083@gmail.com",
        role: Role.Moderator,
        status: Status.Pending
    }, {
        id: 71,
        username: "Sam",
        email: "sam198281@gmail.com",
        role: Role.Member,
        status: Status.Inactive
    }, {
        id: 28,
        username: "Alex",
        email: "alex56789@gmail.com",
        role: Role.Guest,
        status: Status.Inactive
    }
]

console.log(canAccessAdminPanel(list_People[0]))
console.log(canAccessAdminPanel(list_People[1]))
console.log(canAccessAdminPanel(list_People[2]))
console.log(canAccessAdminPanel(list_People[3]))

console.log(suspendInactiveUsers(list_People))

// Bonus 
function filterUsersByRole(users: User[], role: Role): User[] {
    const updatedUsers = users.filter(user => {
        if (user.role == role) {
            return user
        } 
    })
    return updatedUsers
}

console.log(filterUsersByRole(list_People, Role.Guest))

// DOK Extension Questions
// Why are enums more effective here than strings or numbers?
// Enums help avoid typos, make your code easier to read, and keep allowed values in one place.

// How does using readonly or immutability principles protect your data?
// It keeps your data safe from accidental changes, making your code more reliable.

// How would you scale this system to allow dynamic roles loaded from a database?
// Instead of hardcoding roles, load them from the database and validate them when users log in or get updated.