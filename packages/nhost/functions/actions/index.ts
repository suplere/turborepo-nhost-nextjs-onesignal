import { Request, Response } from "express";
import { createUserIdHashHandler } from "../_utils/handlers/createUserIdHashHandler";
import { CreateUserIdOutput } from "../_utils/types/actions";

export default async (req: Request, res: Response) => {
  // Check if the request comes from our backend
  if (
    req.headers["nhost-webhook-secret"] !== process.env.NHOST_WEBHOOK_SECRET
  ) {
    return res.status(401).send("Unauthorized");
  }
  const { name } = req.body.action;

  let result: CreateUserIdOutput | {};

  switch (name) {
    case "createUserIdHash":
      result = await createUserIdHashHandler();
      break;

    default:
      result = {};
      break;
  }

  res.status(200).json(result);
};
