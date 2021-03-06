# Exercise 06 - Images

## Lesson

The web without images would be pretty dull!

HTML provides an `img` element to embed images into your website

```html
<img
  src="/media/cc0-images/grapefruit-slice-332-332.jpg"
  alt="Grapefruit slice atop a pile of other slices"
/>
```

> The `img` tag is one of the exceptions that doesn't need a closing or self-closing tag!

Each image should contain an `src` attribute with the path/URL to the image and, for an accessibility reason, an `alt` title used by screen readers or when the browser couldn't load the image properly.

> Despite the normal `img` tag there was also introduced a new [`picture`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

To ensure that the image isn't blowing up your page, you can set the width or height via the corresponding attributes.

```html
<img
  src="/media/cc0-images/grapefruit-slice-332-332.jpg"
  width="400"
  alt="Grapefruit slice atop a pile of other slices"
/>
```

> The unit for width is pixels. We will learn about that later!

## Goals

Create a page with an image gallery. You can show them as a list, table, or just below each other!

## Tips

- [`img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

## Extra Credit

Try to experiment with the `picture` tag and document the differences within the `extra.html`.

[Prev](../05/README.md) • [Next](../07/README.md)
