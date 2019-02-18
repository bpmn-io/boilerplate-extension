# @bpmn-io/{{NAME}}

A boilerplate to quickly copy as a start for bpmn.io library extensions.

## Usage

```sh
NAME=foo degit bpmn-io/boilerplate-extension $NAME \
  grep -rl '{{NAME}}' . | xargs sed -i s@{{NAME}}@$NAME@g
```

## License

MIT
