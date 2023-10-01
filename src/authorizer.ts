import { newEnforcer } from "casbin";

export const can = async (
  subject: string,
  object: string,
  action: string
): Promise<boolean> => {
  const enforcer = await newEnforcer("casbin_model.conf", "casbin_policy.csv");
  return await enforcer.enforce(subject, object, action);
};
