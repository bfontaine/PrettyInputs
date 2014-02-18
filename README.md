# PrettyInputs

This is a little script to make some pretty inputs, *à la*
[Dropbox](//www.dropbox.com/login).


## Usage

Include `pretty_input.min.css` and `pretty_input.min.js` in your page, with the
JS at the bottom of its `<body>`.

Your inputs must be as follow:

```html
<div data-input-field>
    <label for="my-id" data-inset-label>the label</label>
    <input type="text" id="my-id" />
</div>
```
