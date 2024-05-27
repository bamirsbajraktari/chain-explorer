import type { Route } from 'nextjs-routes';

const TEMPLATE_MAP: Record<Route['pathname'], string> = {
  '/': ' - Blockchain explorer',
  '/txs': ' - Transactions',
  '/txs/kettle/[hash]': ' - Kettle %hash% transactions',
  '/tx/[hash]': ' - Transaction %hash%',
  '/blocks': ' - Blocks',
  '/block/[height_or_hash]': ' - Block %height_or_hash%',
  '/accounts': ' - Top accounts',
  '/address/[hash]': ' - Address details for %hash%',
  '/verified-contracts': ' - Verified contracts',
  '/contract-verification': ' - Verify contract',
  '/address/[hash]/contract-verification': ' - Contract verification for %hash%',
  '/tokens': ' - Tokens',
  '/token/[hash]': ' - Token details',
  '/token/[hash]/instance/[id]': ' - NFT instance',
  '/apps': ' - Apps marketplace',
  '/apps/[id]': ' - Marketplace app',
  '/stats': ' - Statistics',
  '/api-docs': ' - REST API',
  '/graphiql': ' - GraphQL',
  '/search-results': ' - Search result for %q%',
  '/auth/profile': '- My profile',
  '/account/watchlist': '- Watchlist',
  '/account/api-key': '- API keys',
  '/account/custom-abi': '- Custom ABI',
  '/account/public-tags-request': '- Public tag requests',
  '/account/tag-address': '- Private tags',
  '/account/verified-addresses': '- My verified addresses',
  '/withdrawals': ' - Withdrawals',
  '/visualize/sol2uml': ' - Solidity UML diagram',
  '/csv-export': ' - Export data to CSV',
  '/deposits': ' - Deposits (L1 > L2)',
  '/output-roots': ' - Output roots',
  '/batches': ' - Tx batches (L2 blocks)',
  '/batches/[number]': ' - L2 tx batch %number%',
  '/blobs/[hash]': ' - Blob %hash% details',
  '/ops': ' - User operations',
  '/op/[hash]': ' - User operation %hash%',
  '/404': ' - Error - page not found',
  '/name-domains': ' - Domains search and resolve',
  '/name-domains/[name]': ' - %name% domain details',
  '/validators': ' - Validators list',
  '/gas-tracker': ' - Gas tracker',

  // service routes, added only to make typescript happy
  '/login': 'login',
  '/api/metrics': 'node API prometheus metrics',
  '/api/log': 'node API request log',
  '/api/media-type': 'node API media type',
  '/api/proxy': 'node API proxy',
  '/api/csrf': 'node API CSRF token',
  '/api/healthz': 'node API health check',
  '/auth/auth0': 'authentication',
  '/auth/unverified-email': 'unverified email',
};

const TEMPLATE_MAP_ENHANCED: Partial<Record<Route['pathname'], string>> = {
  '/token/[hash]': '%symbol% token details',
  '/token/[hash]/instance/[id]': 'token instance for %symbol%',
  '/apps/[id]': '- %app_name%',
  '/address/[hash]': 'address details for %domain_name%',
};

export function make(pathname: Route['pathname'], isEnriched = false) {
  const template = (isEnriched ? TEMPLATE_MAP_ENHANCED[pathname] : undefined) ?? TEMPLATE_MAP[pathname];

  return `%network_name% ${ template }`;
}
