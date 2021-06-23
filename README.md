# Next.js Toolstore
Repo is intended to be a starting place/quick solution for a performance demo using the [Next.js sdk](https://docs.sentry.io/platforms/javascript/guides/nextjs/). 

# Node version

```node -v v14.2.0```
# Setup

1. ``` npm install ```

2. Run wizard: `npx @sentry/wizard -i nextjs`

2. Add backend to `.env.local` in root directory specifying:
```NEXT_PUBLIC_BACKEND=<myDeployedBackend>```


# Start Server

1. Development: `npm run dev` - no sourcemap upload
2. Production:
`npm run build` - sourcemap uploads via webpack plugin then: `npm run start`



# Performance Dashboard
Relevant transaction categories include `/` and `checkout` for pageload and non-pageload operations.

# Known Limitations
- Latencies associated with server side rendering (SSR) `getServerSideProps` are currently not captured by the sdk.

# Future work

1. Make deployble to GCP.
2. Add breadcrumbs. 
3. Add custom tags.
4. Add beforeSend()
5. Add other pages for navigation.
6. Set user.