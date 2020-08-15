import { NextApiHandler } from 'next';

/**
 * Dynamically create the robots.txt (for dev and production)
 */

const RobotsTxtProduction = `User-agent: *
Allow: /`;

// Disallow all routes in development
const RobotsTxtDevelopment = `User-agent: *
Disallow: /
`;

const RobotsHandler: NextApiHandler = (_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  const content =
    process.env.STAGE === 'production'
      ? RobotsTxtProduction
      : RobotsTxtDevelopment;
  res.setHeader('Content-Length', Buffer.byteLength(content));

  res.end(content);
};

export default RobotsHandler;
