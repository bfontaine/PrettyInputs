PrettyInputs
============

This is a little script to make some pretty inputs, *à la*
[Dropbox](//www.dropbox.com/login).


Usage
-----

1. Download `pretty_inputs.min.js` and `pretty_inputs.min.css`.
2. Add this line in the `<head>` of the page:   
```<link rel="stylesheet" src="/path/to/pretty_inputs.min.css" />```
3. Add this line in the bottom of the `<body>` of the page:   
```<script src="/path/to/pretty_inputs.min.js"></script>```   
Note: you need to include jQuery too.
4. *Et voilà!*

Your inputs must be as follow:

```html
<div class="input-field">
    <label for="_inp_1" class="inset-label">the label</label>
    <input type="text" id="_inp_1" />
</div>
```

You can change the ids, add class, and/or change the input’s type, but you must
keep this format.
