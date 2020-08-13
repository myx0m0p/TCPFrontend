import io from 'socket.io-client';
import { getToken } from '../utils/token';
import { getWebsocketEndpoint } from '../utils/config';

const token = getToken();

const socket = io(getWebsocketEndpoint(), {
  autoConnect: false,
  transports: [
    'websocket',
  ],
  query: { token },
});

export default socket;
