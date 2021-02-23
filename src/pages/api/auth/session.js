import StatusCodes from 'http-status-codes';
import { verify } from 'jsonwebtoken';

import { cors } from '../../../lib/initMiddleware';

export default async (req, res) => {
  await cors(req, res);
  const { authorization: token } = req.headers;

  try {
    const data = verify(token, process.env.JWT_SECRET);
    res.statusCode = StatusCodes.OK;
    res.end(JSON.stringify({ data }));
  } catch (error) {
    res.statusCode = StatusCodes.UNAUTHORIZED;
    res.end(JSON.stringify({ error }));
  }
};
