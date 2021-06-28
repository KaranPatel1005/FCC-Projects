import React from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Previewer from './components/Preview';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMazimized: false
    }
    this.handleChange = this.handleChange.bind(this);;
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }

  handlePreviewMaximize() {
    this.setState({
      previewMazimized: !this.state.previewMazimized
    });
  }

  render() {
    const classes = this.state.editorMaximized
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : this.state.previewMazimized
        ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
        : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt']
    return (
      <div>
        <div className={classes[0]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handleEditorMaximize}
            text="Editor" />
          <Editor
            markdown={this.state.markdown}
            onChange={this.handleChange} />
        </div>
        <div className="converter" />
        <div className={classes[1]}>
          <Toolbar
            icon={classes[2]}
            onClick={this.handlePreviewMaximize}
            text="Previewer" />
          <Previewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;
