# GDG Chennai
![alt text][logo]

[logo]: /images/logo-name.png "GDG Chennai Logo"

The site uses [Jekyll](http://jekyllrb.com), a static site generator. GitHub Pages, where the site is hosted, natively supports Jekyll so every time someone pushes to this repository, the website will be built and updated. For hosting it yourself, see [Setting up a local copy of the website](#contribution-guidelines).

### Contribution Guidelines

**Note:** Major issues or feature requests should be filed on the [issue tracker](https://github.com/skcript/gdgchennai/issues) first. Once you raise the request, the community moderators and other awesome members will come together to review the issue/feature request.

**If you would like to make minor change:**
1. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
2. Click on the file you would like to edit from your Github page
3. Click on the small Edit icon towards the top right of the file view
4. GitHub's editor allows you to write in [Markdown](https://guides.github.com/features/mastering-markdown/) as well as other languages, but there are no validations in place. 
5. Once you are done editing, enter a brief summary and description about the change you have made, and issue a Pull Request to the master repo.

**If you would like to make some major change:**
For largest changes, GitHub's in-browser editor might not be the solution. The best way to do that is to setup a local clone of the website, and work on it using your favorite editor like [Sublime](http://sublimetext.com) or [Atom](https://atom.io). 

Then, setup the local [Developer Environment](#setting-up-developer-environment)
1. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
2. [Clone](https://help.github.com/articles/cloning-a-repository/) your newly forked repo to your local machine
3. Open Terminal, and run `cd gdgchennai`
4. Now, install the dependencies: `bundle install`
5. Now, run `bundle exec jekyll serve` - builds the website and runs a local webserver on port 400
6. Once you are done working, raise pull requests to [skcript/GDGChennai](https://github.com/skcript/gdgchennai)

**Note:** you can add the `--watch` option when running `jekyll serve` to let Jekyll watch for file changes, which means the site will be rebuilt when a file is modified.

**Note 2:** on case-insensitive file systems like on Windows and Mac OS X you'll run into redirect loops for some URLs. The workaround is to disable redirects locally by removing the `gems: jekyll-redirect-from` entry from `_config.yml`.


### Setting up Developer Environment

**Dependencies**

 - [Ruby](https://www.ruby-lang.org/) - Jekyll is written in Ruby
 - [Bundler](http://bundler.io/) - a package manager for Ruby. Install it by running `gem install bundler`
 
### Repository structure

 - `_includes` - *special folder* contains snippets that can be included via `{% include file.html %}` in other pages
 - `_layouts` - *special folder* contains the layouts that are shared between pages. Layouts can be inherited, the root layout is `base.html`.
 - `_posts` - *special folder*, contains the source pages for the blog section, see [Writing a blog post](#writing-a-blog-post)
 - `_site` - the output of the generated site is stored here by default, this folder only exists after Jekyll built the site
 - `archived` - content that is no longer relevant but kept to keep external links working
 - `community` - contains the source pages for the `/community` website section
 - `css` - contains the main stylesheet
 - `docs` - contains the source pages for the `/docs` website section
 - `download` - contains the source pages for the `/download` website section
 - `files` - stores binary files used in pages
 - `images` - stores the images used in pages
 - `news` - lists the blog pages from the `_posts` directory

### Libraries And Codes used
1. [Material Design Light](https://getmdl.io)
2. [Jekyll](https://jekyllrb.com)
3. [Gallery.css](https://github.com/benschwarz/gallery-css)
4. [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/)
5. [Konami.js](https://github.com/snaptortoise/konami-js)