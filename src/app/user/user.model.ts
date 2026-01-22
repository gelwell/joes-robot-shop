export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

const enum UserRole {
  Admin = 'Admin',
  Customer = 'Customer',
}

export { UserRole };

const UserStatus = {
  Active: 'Active',
  Inactive: 'Inactive',
};  

export { UserStatus };
//export type { UserStatus }; 
//export type UserStatus = 'Active' | 'Inactive';


// IMPORTANT:  
// ****NEVER**** store credentials unencrypted like this.  This is for demonstration purposes only.

const users = {
  "jim@joesrobotshop.com" : {
    firstName: "Jim",
    lastName: "Smith",
    email: "jim@joesrobotshop.com",
    password: "password1"
    // role: UserRole.Admin,
    // status: UserStatus.Active
  },
  "joe@joesrobotshop.com" : {
    firstName: "Joe",
    lastName: "Robot",
    email: "joe@joesrobotshop.com",
    password: "password1"
    // role: UserRole.Customer,
    // status: UserStatus.Active
  }
}

