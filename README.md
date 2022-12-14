# bookbuy

Tech challenge - Goodreads shopper.

Objectives:
1. Will ask the user to select their preferred genre
2. Will fetch a random book for the selected genre from
https://www.goodreads.com/choiceawards/best-books-2020
3. Will then open a browser (Chrome for example)
4. Will go to Amazon.com
5. Will find the selected book on Amazon
6. Will add that book to the cart
7. Will display the checkout page

## ๐งญ Table of contents

- [๐ Requierments](#-requierments)
- [๐ Quickstart](#-quickstart)
- [๐ Troubleshooting](#-troubleshooting)
- [๐ค Contributing](#-contributing)
- [๐งช Testing](#-testing)
- [โ๏ธ License](#๏ธ-license)

## ๐ Requierments

To use this package you will need:

- [NodeJS](https://nodejs.org/en/)

## ๐ Quickstart

Install using the terminal:

```bash
npm install bookbuy -g
```

### Example use

```bash
bookbuy
```

For error stacktrace use the `--debug` flag
```bash
bookbuy --debug
```

## ๐ Troubleshooting

If you run into trouble or have questions just [submit an issue](https://github.com/danielcobo/bookbuy/issues).

## ๐ค Contributing

### Anyone can contribute

Contributions come in many shapes and sizes. All are welcome.
You can contribute by:

- asking questions
- suggesting features
- sharing this repo with friends
- improving documentation (even fixing typos counts ๐)
- providing tutorials (if you do, please [let me know](https://twitter.com/danielcobocom), I would love to read them)
- improving tests
- contributing code (new features, performance boosts, code readability improvements..)

### Rules for contributions

**General guidelines:**

- there are no dumb questions
- be polite and respectful to others
- do good

**When coding remember:**

- working > maintainability > performance
- best code is no code
- be descriptive when naming
- keep it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- do test

**Contribution licence:**
All contributions are considered to be under same [license](#๏ธ-license) as this repository.

## ๐งช Testing

**Testing suite:** [๐ Jest](https://jestjs.io) | **Test command:** `npm test`

**Mutation testing suite:** [๐ฝ Stryker Mutator](https://stryker-mutator.io) | **Mutation test command:** `npm run mutation`

If you intend to develop further or contribute code, then please ensure to write and use testing. Strive for 100% code coverage and high mutation scores. Mutation score 100 is great, but it's not always neccessary (if there are valid reasons).

## โ๏ธ License

[MIT License](https://github.com/danielcobo/bookbuy/blob/master/LICENSE.md)
