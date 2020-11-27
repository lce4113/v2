const ghpages = require("gh-pages");

var input = process.argv.slice(2);

const metaargs = [
  {
    "name": "message",
    "commands": [
      "-m",
      "--message"
    ],
    "required": true,
    "key": "m"
  },
  {
    "name": "folder",
    "commands": [
      "-f",
      "--folder"
    ],
    "default": "build",
    "key": "f"
  }
]

var args = {};
if (input[0] && input[0][0] === '-') {
  for (let i = 0, j = 1; i < input.length; i += 2, j += 2) {
    for (const arg of metaargs) {
      if (arg.commands.includes(input[i])) {
        args[arg.key] = input[j];
      } else if (arg.required) {
        console.error(`Required parameter "${arg.name}" not provided.`);
        process.exit(9);
      } else if (arg.default) {
        args[arg.key] = arg.default;
      }
    }
  }
} else {
  for (const i in metaargs) {
    const arg = metaargs[i];
    if (input[i]) {
      args[arg.key] = input[i];
    } else if (arg.required) {
      console.error(`Required parameter "${arg.name}" not provided.`);
      process.exit(9);
    } else if (arg.default) {
      args[arg.key] = arg.default;
    }
  }
}

ghpages.publish(args.f, {
  message: args.m
});