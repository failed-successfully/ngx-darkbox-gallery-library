# How to contribute

We really appriciate your will to help us out.
To make your contributions most valuble please read the follwing paragraphs.
We will try to be as brief as possible in this contribution guide ;-).

Here are some important resources:

  * [Local development setup](https://github.com/failed-successfully/ngx-darkbox-gallery-library/blob/main/docs/development/local-setup.md) tells you how to get started locally
  * Bugs? [Github](https://github.com/failed-successfully/ngx-darkbox-gallery-library/issues/new?assignees=&labels=bug&template=bug_report.md&title=) is where to report them


## Submitting changes

Please send a [GitHub Pull Request to Darkbox](https://github.com/ailed-successfully/ngx-darkbox-gallery-library/pull/new/main) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include tests. We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Always write a clear log message using the [conventional commit sytle](https://www.conventionalcommits.org/en/v1.0.0/) for your commits. One-line messages are fine:

    $ git commit -m "chore: A brief summary of the commit"

## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

  * We indent using two spaces (soft tabs)
  * We ALWAYS use blank lines at the end of each file
  * We ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
  * This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
  * So that we can consistently serve images from the CDN, always use image_path or image_tag when referring to images. Never prepend "/images/" when using image_path or image_tag.
