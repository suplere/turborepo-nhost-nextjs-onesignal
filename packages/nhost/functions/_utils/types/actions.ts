type Maybe<T> = T | null;

export type CreateUserIdOutput = {
  affected_rows: number;
};

type Mutation = {
  createUserIdHash?: Maybe<CreateUserIdOutput>;
};
