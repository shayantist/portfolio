# Portfolio 2020

My very own personal site/portfolio built with `Next.js` and `TypeScript`! The design is heavily inspired by an actual good designer: [Sean Halpin](seanhalpin.design), who you should totally check out!

Been super cathartic to work on this little side project that _doesn't_ have dire consequences if I don't finish it on time. On top of that, it's been a great learning experience to pick up `Next.js` and experiment with UI design using `emotion`.

One thing I'm really proud of is making all the site content editable from a single [content.ts](./src/content.ts) file without having to touch the rest of the code. Could be useful to anyone interested in forking this ;)

To-Do:

- Set up Flask server with next for ML demo (docker + nginx)
- Clean up duplicate CSS across pages (`styled-components` is wonderful for this!)
- Add sitemap for [`robots.txt`](https://www.reddit.com/r/nextjs/comments/u0soy3/update_your_robotstxt_to_help_google_index_your/)
- Replace [`react-particles-js`](https://www.npmjs.com/package/react-particles-js) implementation of [pretty particle show](src/components/Particles) with [GSAP](https://codepen.io/celli/pen/xZgpvN) (more performant + looks even prettier!)
- Replace [content.js](./src/content.js) with [Notion](https://notion.so/) as the source (much more flexible for editing)
