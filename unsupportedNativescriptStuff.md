# Things needed to modify because unsupported in Nativescript

Besides for whole layout naturally since html is not supported but custom elements must be used

1. `URL` like `new URL("https://example.com")`
2. Localstorage -> needs [AppSettings](https://nativescript.org/blog/client-side-storage-in-nativescript-applications/)
3. CSS complex definitions of properties like `background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('{station.photoUrl}') no-repeat center center fixed;`
4. CSS `!important` flag
5. CSS `.example ~ label` selector but weirdly `.example > label` is supported
