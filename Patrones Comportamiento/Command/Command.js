// Command
class Command {
  execute() {}
}

class PrintCommand extends Command {
  execute() {
    console.log("Ejecutando comando");
  }
}

class Invoker {
  run(cmd) {
    cmd.execute();
  }
}

new Invoker().run(new PrintCommand());
