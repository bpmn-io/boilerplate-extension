# @bpmn-io/{{NAME}}

[![Build Status](https://travis-ci.org/bpmn-io/{{NAME}}.svg?branch=master)](https://travis-ci.com/bpmn-io/{{NAME}})

A boilerplate to quickly copy as a start for bpmn.io library extensions.

## Usage

```sh
( \
  NAME=foo && \
  echo "scaffolding @bpmn-io/$NAME" && \
  degit bpmn-io/boilerplate-extension "$NAME" && \
  cd "$NAME" && \
  grep -rl '{{NAME}}' . | xargs sed -i s@{{NAME}}@$NAME@g && \
  git init . \
)
```

## License

MIT
