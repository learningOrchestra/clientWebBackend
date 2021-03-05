import StatusCodes from 'http-status-codes';
import { verify } from 'jsonwebtoken';

import { cors } from '../../../lib/initMiddleware';
import {
  handleGetFile, handleCreateFile, handleUpdateFile, handleDeleteFile,
} from '../../../database/controllers/File';

const GET = async (req) => {
  const { query } = req;
  const data = await handleGetFile(query);
  return data;
};

const POST = async (req) => {
  const { query, body } = req;
  const data = await handleCreateFile(query, body);
  return data;
};

const PUT = async (req) => {
  const { query, body } = req;
  const data = await handleUpdateFile(query, body);
  return data;
};

const DELETE = async (req) => {
  const { query } = req;
  const data = await handleDeleteFile(query);
  return data;
};

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
        const projects = await GET(req);
        res.statusCode = StatusCodes.OK;
        res.end(JSON.stringify({ projects }));
        return;
      }
      case 'POST': {
        const response = await POST(req);
        res.statusCode = StatusCodes.OK;
        res.end(JSON.stringify({ response }));
        return;
      }
      case 'PUT': {
        const response = await PUT(req);
        res.statusCode = StatusCodes.OK;
        res.end(JSON.stringify({ response }));
        return;
      }
      case 'DELETE': {
        const response = await DELETE(req);
        res.statusCode = StatusCodes.OK;
        res.end(JSON.stringify({ response }));
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
