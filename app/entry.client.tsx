/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from 'react-redux'
import store from './store/reducer';


startTransition(() => {
  
  if(typeof window.globalStore === 'undefined'){
    window.globalStore = store;
  }

  hydrateRoot(
    document,
    <StrictMode>
      <Provider store={window.globalStore}>
        <RemixBrowser />
      </Provider>
    </StrictMode>
  );
});
