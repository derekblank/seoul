# seoul

An over-engineered microsite intended to demonstrate code style and file organization for scalable applications built with static site generators. Based off [Playbook](https://github.com/centresource/generator-playbook), a Yeoman generator for rapidly building interfaces. [Jekyll](http://jekyllrb.com/) is included for static site generation. [Bourbon](http://bourbon.io) and [Neat](http://neat.bourbon.io) are included to assist in writing CSS faster. [Grunt](http://gruntjs.com/) is used for compilation of [Sass](http://sass-lang.com). [Bower](http://bower.io/) is used for managing dependencies.

Areas of interest include:

 - UI components: `app/index.html` and `app/includes/component/neighborhood.html`
 - Module-based Javascript architecture: `app/scripts`
 
Content is based on neighborhoods in Seoul, Korea.

## Project Setup
If you do not have [Node.js](http://nodejs.org/) `>=0.10`, [Yeoman](http://yeoman.io/) `>=1.1.2`, [Ruby](https://www.ruby-lang.org/en/) `>=1.9` and the [Bundler](http://bundler.io/) gem installed, you must do that first. Once you have installed these dependencies, you may:

1. Clone this repository
2. Run `npm install` to install node packages.
3. Run `bower install` to install third-party frameworks, plugins, and dependencies.
4. Run `bundle install` to intall necessary gems.
5. Run `grunt serve` to initialize a local dev environment.

## Usage
### Grunt Tasks
##### grunt serve
Serve your source locally into your browser. LiveReload will automatically load any changes to HTML, CSS and JavaScript that you make.

##### grunt build
Build the concatenated, minified production version of the source into the `dist` directory.

##### grunt deploy
Deploy the production version of the source to [GitHub Pages](http://pages.github.com/) via [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control).
