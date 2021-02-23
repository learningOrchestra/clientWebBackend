import StatusCodes from 'http-status-codes';
import { verify } from 'jsonwebtoken';

import { cors } from '../../../lib/initMiddleware';
import { handleCreateProject } from '../../../database/controllers/Project';
import { handleGetUser } from '../../../database/controllers/User';

export default async (req, res) => {
  await cors(req, res);
  const { authorization: token } = req.headers;

  try {
    verify(token, process.env.JWT_SECRET);
  } catch (error) {
    res.statusCode = StatusCodes.UNAUTHORIZED;
    res.end(JSON.stringify({ error }));
    return;
  }

  try {
    switch (req.method) {
      case 'GET': {
        const { uid } = req.query;
        const { projects } = await handleGetUser(uid);
        res.statusCode = StatusCodes.OK;
        res.end(JSON.stringify({ projects }));
        return;
      }
      case 'POST': {
        const data = await handleCreateProject();
        res.statusCode = StatusCodes.OK;
        res.end(JSON.stringify({ data }));
        return;
      }
      default:
        break;
    }
  } catch (error) {
    res.statusCode = StatusCodes.BAD_REQUEST;
    res.end(JSON.stringify({ message: error }));
    return;
  }

  res.statusCode = StatusCodes.METHOD_NOT_ALLOWED;
  res.end(JSON.stringify({ message: 'METHOD_NOT_ALLOWED' }));
};
