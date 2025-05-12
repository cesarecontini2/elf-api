# ELF API

A Deno-based API server using Hono framework.

## Development

To run the development server:

```bash
deno task dev
```

## Deployment to Deno Deploy

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for Deno Deploy at https://dash.deno.com/
3. Create a new project in Deno Deploy
4. Connect your repository
5. Configure the deployment:
   - Entry point: `main.ts`
   - Environment variables (if needed): Add them in the Deno Deploy dashboard

The application will be automatically deployed when you push changes to your repository.

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /elf-ui/*` - Serves the frontend application
- `GET /assets/*` - Serves static assets
- `GET /*.js` - Serves JavaScript files
- `GET /*.css` - Serves CSS files
- `GET /favicon.ico` - Serves the favicon
```
