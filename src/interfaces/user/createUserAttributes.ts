import User from "./user";

type CreateUserAttributes = Omit<User, "userId">;

export default CreateUserAttributes;
