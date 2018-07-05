'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.log('Initializing...');
    }
    start() {
        this.prompt([
            {
                type    : 'input',
                name    : 'name',
                message : 'Enter a name for the new component (i.e.: myNewComponent): '
            }
        ]).then( (answers) => {
            // create destination folder
            this.destinationRoot(answers.name);
            this.fs.copyTpl(
                this.templatePath('server'),
                this.destinationPath('server')
            );
            this.fs.copyTpl(
                this.templatePath('package.json'),
                this.destinationPath('package.json')
            );
            this.fs.copyTpl(
                this.templatePath('tslint.json'),
                this.destinationPath('tslint.json')
            );
            this.fs.copyTpl(
                this.templatePath('tsconfig.json'),
                this.destinationPath('tsconfig.json')
            );
        });
    }
};
