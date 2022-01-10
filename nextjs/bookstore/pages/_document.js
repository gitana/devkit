import Document from 'next/document'
import { getCurrentBranch } from '../lib/cloudcms';

const makePreviewUrl = (url) => `/api/preview?url=${url}`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    
    const originalRenderPage = ctx.renderPage
    const branch = await getCurrentBranch(ctx);
    
    ctx.renderPage = () => {
      const page = originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => {
          return Component
        },
      })

      // branch.trackPage({path: makePreviewUrl(ctx.req.url), html: page.html});

      return page;
    }
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
}

export default MyDocument