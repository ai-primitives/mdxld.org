# mdxld.org

The serving surface for **MDXLD**.

MDXLD is an **extension of [MDX](https://mdxjs.com)** — a superset that adds `$id`,
`$type` and `$context` linked-data keys to the YAML frontmatter, and in doing so is also a
superset of YAML-LD. `$context` is always `https://schema.org.ai`, unversioned.

**MDX is not ours.** It is an open standard authored by the MDX community; see
[mdxjs.com](https://mdxjs.com). MDXLD is ours, and it sits on top of theirs without
changing it: every valid MDX document is a valid MDXLD document.

MDXLD's documentation home is **[mdx.org.ai](https://mdx.org.ai)**. Both are properties of
[The Org.AI Foundation](https://foundation.org.ai).

Every page here is self-canonical. The front page does *not* point `rel=canonical` at
mdx.org.ai: that URL 307s to `/docs`, which serves a component reference rather than
MDXLD's definition, and a canonical must resolve to a page containing the referent. See
the comment in `app/[[...mdxPath]]/page.jsx` for the condition under which that flips.

## Status

Pre-1.0 and deliberately unfixed. Nothing freezes until real external implementations
prove the shape.

## Development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```

Content lives in `content/*.mdx`. Site chrome — navbar, footer, banner, metadata — lives
in `app/layout.jsx`. Canonical URLs are computed in `app/[[...mdxPath]]/page.jsx`.
