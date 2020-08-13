export const getBaseUrl = () => (
  process.env.BASE_URL
);

export const getBackendApiEndpoint = () => (
  process.env.BACKEND_API_ENDPOINT
);

export const getGraphqlEndpoint = () => (
  process.env.BACKEND_GRAPHQL_ENDPOINT
);

export const getWebsocketEndpoint = () => (
  process.env.BACKEND_WEBSOCKET_ENDPOINT
);

export const getUploaderEndpoint = () => (
  process.env.BACKEND_UPLOADER_ENDPOINT
);


export const getBlockchainHost = () => (
  process.env.BLOCKCHAIN_API_HOST
);

export const getBlockchainPort = () => (
  process.env.BLOCKCHAIN_API_PORT
);

export const getBlockchainProtocol = () => (
  process.env.BLOCKCHAIN_API_PROTOCOL
);

export const getBlockchainApiEndpoint = () => (
  process.env.BLOCKCHAIN_API_ENDPOINT
);

export const getBlockchainHistoryEndpoint = () => (
  process.env.BLOCKCHAIN_HISTORY_ENDPOINT
);



export const isMaintenanceMode = () => (
  process.env.MAINTENANCE_MODE
);

export const isWebsocketEnabled = () => (
  process.env.WEBSOCKET_ENABLED
);



export const getIframelyEndpoint = () => (
  process.env.IFRAMELY_ENDPOINT
);

export const getAllowedVideoHosts = () => (
  process.env.ALLOWED_VIDEO_HOSTS.split(',')
);


export const getGoogleCaptchaSitekey = () => (
  process.env.GOOGLE_CAPTCHA_SITE_KEY
);


export const getRootCommunityId = () => (
  process.env.ROOT_COMMUNITY_ID
);

export const getReferralPostId = () => (
  process.env.REFERRAL_POST_ID
);


