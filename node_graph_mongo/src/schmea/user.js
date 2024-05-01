import { User, UserTC } from "../models/user";

const UserQuery = {
  userById: UserTC.geResolver("findById"),
  userByIds: UserTC.getResolver("findByIds"),
  userOne: UserTC.getResolver("findOne"),
  userMany: UserTC.getResolver("count"),
  userConnection: UserTC.getResolver("connection"),
  userPagination: UserTC.getResolver("pagination"),
};

const UserMutation = {
  userCreateOne: UserTC.getResolver("createOne"),
  userCreateMany: UserTC.getResolver("createMany"),
  userUpdateById: UserTC.getResolver("updateById"),
  userUpdateOne: UserTC.getResolver("updateOne"),
  userUpdateMany: UserTC.getResolver("updateMany"),
  userRemoveById: UserTC.getResolver("removeById"),
  userRemoveOne: UserTC.getResolver("removeOne"),
  userRemoveMany: UserTC.getResolver("removeMany"),
};

export { UserQuery, userMutation };
