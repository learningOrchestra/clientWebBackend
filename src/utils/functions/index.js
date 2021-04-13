import {handleGetAuthorization} from '../auth';

export const handleMiddlewareAuth = async (
    {root, args, context, info}, next,
) => {
  await handleGetAuthorization(args);
  const result = await next();
  return result;
};
